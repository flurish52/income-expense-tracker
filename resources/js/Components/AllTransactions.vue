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
                <td class="p-2 border-b">{{ transaction.date }}</td>
                <td class="p-2 border-b" :class="{'text-red-500': transaction.type === 'expense', 'text-green-500': transaction.type === 'income'}">
                    {{ transaction.type }}
                </td>
                <td class="p-2 border-b font-bold">{{ transaction.business }}</td>
                <td class="p-2 border-b">{{ transaction.category }}</td>
                <td class="p-2 border-b">{{ transaction.description || '-' }}</td>
                <td class="p-2 border-b">₦{{ transaction.amount.toLocaleString() }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transactions: [
                { date: "Feb 23, 2025", type: "expense", business: "MonieDirect", category: "Insurance", description: "-", amount: 65000 },
                { date: "Feb 23, 2025", type: "expense", business: "Energy Reserve", category: "Salaries", description: "-", amount: 120000 },
                { date: "Feb 23, 2025", type: "expense", business: "Academy", category: "Maintenance", description: "-", amount: 35000 },
                { date: "Feb 23, 2025", type: "income", business: "Stechmax Store", category: "Service Fees", description: "-", amount: 200000 },
            ]
        };
    }
};
</script>
