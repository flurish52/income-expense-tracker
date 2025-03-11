<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    /** @use HasFactory<\Database\Factories\BusinessFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'manager',
        'type',
        'description',
        'est_date',
        'address',
        'country',
        'state',
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
