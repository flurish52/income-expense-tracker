<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Transaction;
use App\Http\Requests\UpdateTransactionRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function totalBusinessBalance()
    {
       $total_Income = Transaction::where('type', 'Income')->sum('amount');
       $total_Expense = Transaction::where('type', 'Expense')->sum('amount');
       $total_balance =  $total_Income - $total_Expense;

       return response()->json($total_balance);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function fetchFinancials()
    {
        $total_income = Transaction::where('type', 'Income')->sum('amount');
        $total_expense = Transaction::where('type', 'Expense')->sum('amount');
        $total_net_profit = $total_income - $total_expense;

        $data = [
            'total_expense' => $total_expense,
            'total_income' => $total_income,
            'total_net_profit' => $total_net_profit
        ];

       return response()->json($data);
    }

    public function dailyTransactions()
    {
        $businesses = Business::with('transactions')
            ->get()
            ->map(function ($business) {
                $business->total_daily_income = $business->transactions
                    ->where('date_of_transaction', Carbon::now()->toDateString())
                    ->where('type', 'Income')
                    ->sum('amount');
                $business->total_daily_expense = $business->transactions
                    ->where('date_of_transaction', Carbon::now()->toDateString())
                    ->where('type', 'Expense')
                    ->sum('amount');

                $business->total_net_profit = $business->total_daily_income - $business->total_daily_expense;

                return $business;
            });
        return response()->json($businesses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "business_id" => "required|exists:businesses,id",
            "category_id" => "required|exists:categories,id",
            "description" => "required|string|max:1000",
            "type" => "required|string|max:1000",
            "amount" => "required|numeric|min:0",
//            "date_of_transaction" => "required|date",
        ]);

        $validatedData['date_of_transaction'] = Carbon::now()->toDateString();

        Transaction::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
