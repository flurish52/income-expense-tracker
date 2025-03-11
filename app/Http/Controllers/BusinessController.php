<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\StoreBusinessRequest;
use App\Http\Requests\UpdateBusinessRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function manageBusinesses()
    {
        return inertia::render('Business/Manage', [
            'businesses' => Business::orderBy('name', 'DESC')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('Business/Create', [
        'users' => User::orderBy('name', 'ASC')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
//        validating the incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'manager' => 'required|exists:users,id',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'est_date' => 'required|date',
            'address' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'state' => 'required|string|max:255',
        ]);

//        create and save a business to the database

        Business::create($validated);

//        return response()->json(['message' => 'Business created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Business $business)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Business $business)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Business $business)
    {
        //
    }
}
