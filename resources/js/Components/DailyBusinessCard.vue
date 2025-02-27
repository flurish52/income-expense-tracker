<template>
    <div>
        <div class="flex w-full p-3 justify-between">
            <h1>Daily Business Totals</h1>
            <input type="date">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="card in cards" :key="card.id" class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900">{{ card.title }}</h3>
                <p class="text-gray-500 mt-2">Income: <span class="text-green-500 font-medium">{{ card.income }}</span></p>
                <p class="text-gray-500">Expenses: <span class="text-red-500 font-medium">{{ card.expenses }}</span></p>
                <hr class="my-1">
                <p class="font-bold text-blue-600 text-lg mt-2">Net Profit: {{ card.netProfit }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
let  cards = ref([
                { id: 1, title: 'Academy', income: '₦0.00', expenses: '₦0.00', netProfit: '₦0.00' },
                { id: 2, title: 'Energy Reserve', income: '₦0.00', expenses: '₦0.00', netProfit: '₦0.00' },
                { id: 3, title: 'MonieDirect', income: '₦0.00', expenses: '₦0.00', netProfit: '₦0.00' },
                { id: 4, title: 'MonieDirect', income: '₦0.00', expenses: '₦0.00', netProfit: '₦0.00' }
            ]);
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
