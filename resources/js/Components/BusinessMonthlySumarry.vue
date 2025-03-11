<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="business in businesses" :key="business.id" class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
            <h3 class="text-2xl font-bold text-gray-900">{{ business.name }}</h3>

            <p class="text-gray-500 mt-4">Income for February 2021</p>

            <p class="text-green-500 text-lg font-semibold">{{business.total_income}}</p>

            <p class="text-gray-500 mt-4">Expenses for February 2021</p>
            <p class="text-red-500 text-lg font-semibold">{{ business.total_expense }}</p>
            <p class="text-gray-500 mt-4">{{ business.total_net_profit }} vs previous month</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    businesses: Array,
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
