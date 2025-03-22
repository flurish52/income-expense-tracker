<template>
    <div>
        <div class="flex w-full p-4 justify-between items-center bg-blue-50 rounded-lg shadow-sm">
            <h1 class="text-xl font-bold text-blue-700">Daily Business Totals</h1>
            <input type="date" class="p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div v-for="transaction in dailyTransactions" :key="transaction.id"
                 class="bg-white shadow-md rounded-2xl p-6 w-full border border-gray-200 hover:shadow-lg transition">
                <h3 class="text-xl font-semibold text-gray-900">{{ transaction.name }}</h3>
                <p class="text-gray-500 mt-2">Income: <span class="text-green-600 font-medium">{{ transaction.total_daily_income }}</span></p>
                <p class="text-gray-500">Expenses: <span class="text-red-500 font-medium">{{ transaction.total_daily_expense }}</span></p>
                <hr class="my-2 border-gray-300">
                <p class="font-bold text-blue-700 text-lg mt-2">Net Profit: {{ transaction.total_net_profit }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

let props = defineProps({
    sentDailyTransactions: Array
})
let dailyTransactions = ref()
 dailyTransactions.value = props.sentDailyTransactions

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
