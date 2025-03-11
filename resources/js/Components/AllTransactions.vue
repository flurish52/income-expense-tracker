<template>
    <div class="overflow-x-auto">
        <table class="w-full border border-gray-300">
            <thead class="bg-gray-200">
            <tr>
                <th class="p-2 border">Date</th>
                <th class="p-2 border">Type</th>
                <th class="p-2 border">Business Unit</th>
                <th class="p-2 border">Category</th>
                <th class="p-2 border">Description</th>
                <th class="p-2 border">Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(transaction, index) in transactions" :key="index" class="text-center">
                <td class="p-2 border-b">{{ transaction.date_of_transaction }}</td>
                <td class="p-2 border-b"
                    :class="{'text-red-500': transaction.type === 'Expense', 'text-green-500': transaction.type === 'Income'}">
                    {{ transaction.type }}
                </td>
                <td class="p-2 border-b font-bold">{{ transaction.business.name }}</td>
                <td class="p-2 border-b">{{ transaction.category.name }}</td>
                <td class="p-2 border-b">{{ transaction.description || '-' }}</td>
                <td class="p-2 border-b">₦{{ transaction.amount.toLocaleString() }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    transactions: Array,
})
</script>
