<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransactionFactory> */
    use HasFactory;

    protected $fillable = [
        'business_id',
        'type',
        'category_id',
        'description',
        'amount',
        'date_of_transaction',
    ];

    public function business()
    {
        return $this->belongsTo(Business::class, 'business_id');
    }

    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }

}
