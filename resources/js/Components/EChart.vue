<template>

    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
let props = defineProps({
 transactions: Array
})
const chartRef = ref(null);


const uniqueDates = [...new Set(props.transactions.map(tx => tx.date_of_transaction))].sort();
const incomeData = uniqueDates.map(date =>
    props.transactions.filter(tx => tx.date_of_transaction === date && tx.type === "Income")
        .reduce((sum, tx) => sum + parseFloat(tx.amount), 0)
);
const expenseData = uniqueDates.map(date =>
    props.transactions.filter(tx => tx.date_of_transaction === date && tx.type === "Expense")
        .reduce((sum, tx) => sum + parseFloat(tx.amount), 0)
);
const formattedDates = uniqueDates.map(date =>
    new Date(date).toLocaleString('default', { month: 'long', day: 'numeric' })
);

onMounted(() => {
    const chart = echarts.init(chartRef.value);
    chart.setOption({
        title: { text: "Income vs Expense" },
        tooltip: { trigger: "axis" },
        legend: { data: ["Income", "Expense"] },
        xAxis: { type: "category", data: formattedDates },
        yAxis: { type: "value" },
        series: [
            { name: "Income", type: "line", data: incomeData, color: "green" },
            { name: "Expense", type: "line", data: expenseData, color: "red" }
        ]
    });

    window.addEventListener('resize', () => chart.resize());
});




</script>
