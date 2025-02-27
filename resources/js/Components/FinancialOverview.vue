<template>

    <div>
        <div class="flex w-full p-3 justify-between">
            <h1>Financial Overview</h1>
            <select name="" id="">
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="card in financials" :key="card.id"
                 class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900">{{ card.title }}</h3>
                <p class="text-gray-500 mt-2">{{ card.value }}</p>
                <p class="text-green-500 font-medium mt-1">{{ card.percentage }} vs last month</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FinancialOverviewCard',
    data() {
        return {
            financials: [
                {id: 1, title: 'Total Income', value: '₦2,900,000.00', percentage: '↑ 287%'},
                {id: 2, title: 'Total Expenses', value: '₦425,000.00', percentage: '↑ 100%'},
                {id: 3, title: 'Net Profit', value: '₦2,475,000.00', percentage: '↑ 230%'},
                {id: 4, title: 'Net Profit', value: '₦2,475,000.00', percentage: '↑ 230%'}
            ]
        }
    }
}
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
