<?php

use App\Http\Controllers\BusinessController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Models\Categories;
use App\Models\Transaction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Business;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/', function () {
    $businesses = Business::with('transactions')
            ->get()
            ->map(function ($business) {
                $business->total_income = $business->transactions->where('type', 'Income')->sum('amount');
                $business->total_expense = $business->transactions->where('type', 'Expense')->sum('amount');
                return $business;
            });

    return Inertia::render('Welcome', [
        'businesses' => $businesses,
        'categories' => Categories::orderBy('name', 'DESC')->get(),
        'transactions' => Transaction::orderBy('date_of_transaction', 'DESC')->with('category', 'business')->get(),
    ]);
})->middleware(['auth', 'verified'])->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/new-business', [BusinessController::class, 'create']);
    Route::post('/new-business', [BusinessController::class, 'store']);
    Route::get('/all-categories', [CategoriesController::class, 'index']);
    Route::post('/add-new-category', [CategoriesController::class, 'store']);
    Route::get('/manage-businesses', [BusinessController::class, 'manageBusinesses']);
    Route::post('/add-new-transaction', [TransactionController::class, 'store']);
    Route::get('/daily-business-transactions', [TransactionController::class, 'dailyTransactions']);
    Route::get('/fetch-business-financials', [TransactionController::class, 'fetchFinancials']);
    Route::get('/business-total-balance', [TransactionController::class, 'totalBusinessBalance']);
    Route::get('edit-category/{id}', [CategoriesController::class, 'editCategory']);
});

require __DIR__.'/auth.php';
