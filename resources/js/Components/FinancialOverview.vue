<template>
    <div class="space-y-6">
        <div class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
            <h1 class="text-xl font-bold text-gray-800">Financial Overview</h1>
            <select class="p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="thisMonth">Today</option>
                <option value="thisMonth">This week</option>
                <option value="thisMonth" selected>This month</option>
                <option value="thisMonth">Last 3 months</option>
                <option value="thisMonth">Last 6 months</option>
                <option value="thisMonth">1 year</option>
                <option value="thisMonth">5 years</option>
                <option value="thisMonth">All time</option>
            </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-gray-900">Expenses</h3>
                <p class="text-2xl font-bold text-gray-700 mt-2">{{ financials.total_expense }}</p>
                <p class="text-green-500 font-medium mt-1">vs last month</p>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-gray-900">Income</h3>
                <p class="text-2xl font-bold text-gray-700 mt-2">{{ financials.total_income }}</p>
                <p class="text-green-500 font-medium mt-1">vs last month</p>
            </div>
            <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-gray-900">Net Profit</h3>
                <p class="text-2xl font-bold text-gray-700 mt-2">{{ financials.total_net_profit }}</p>
                <p class="text-green-500 font-medium mt-1">vs last month</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";

let financials = ref('')

onMounted(()=>{
    axios.get('/fetch-business-financials')
        .then(response =>{
            financials.value =  response.data
            console.log(response.data)
        })
})

</script>

<style scoped>
.shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-2xl {
    border-radius: 1rem;
}

.border-gray-200 {
    border-color: #E5E7EB;
}
</style>
