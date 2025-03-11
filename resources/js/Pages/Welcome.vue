<template>
    <AuthenticatedLayout>
        <!-- Overlay for Add Transaction Modal -->
        <div
            @click="addTransaction"
            v-show="isVisible"
            class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

        <!-- Add Transaction Modal -->
        <div
            v-show="isVisible"
            class="fixed w-full max-w-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-50">
            <AddTransactionModel
                :business="businessToAddTransaction"
                :typeOftransaction="typeOftransaction"
                :categories="props.categories"
                @closDialogue="addTransaction"
            />
        </div>

        <!-- Total Balance Card -->
        <section class="my-6 w-full">
            <div class="bg-white shadow-md rounded-2xl p-6 w-full border border-gray-200">
                <h3 class="text-2xl font-semibold text-gray-900">Total Balance</h3>
                <p class="text-blue-600 mt-2 font-bold text-4xl">{{ balance }}</p>
            </div>
        </section>

        <!-- Financial Sections -->
        <section class="my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <FinancialOverview/>
        </section>
        <section class="my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <DailyBusinessCard/>
        </section>
        <section class="my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <BusinessMonthlySumarry :businesses="businesses"/>
        </section>
        <section class="my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <FinancialReports :businesses="businesses" @addTransaction="addTransaction"/>
        </section>
        <section class="my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <AllTransactions :transactions="transactions"/>
        </section>
    </AuthenticatedLayout>
</template>
<script setup>
import FinancialOverview from "@/Components/FinancialOverview.vue";
import DailyBusinessCard from "@/Components/DailyBusinessCard.vue";
import BusinessMonthlySumarry from "@/Components/BusinessMonthlySumarry.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import FinancialReports from "@/Components/FinancialReports.vue";
import AllTransactions from "@/Components/AllTransactions.vue";
import AddTransactionModel from "@/Components/AddTransactionModel.vue"
import axios from "axios";
import {onMounted, ref} from "vue";

let props = defineProps({
    businesses: Array,
    categories: Array,
    transactions: Array,
})
let isVisible = ref(false)
let businessToAddTransaction = ref('');
let typeOftransaction = ref('')

let balance = ref(0.00);
let addTransaction = (selectedBusiness, transaction) => {
    businessToAddTransaction.value = selectedBusiness
    typeOftransaction.value = transaction
    isVisible.value = !isVisible.value

}
    let totalBalance = () => {
        axios.get('/business-total-balance')
            .then(response =>{
                if (response.data){
                    balance.value = response.data
                    console.log(response.data)
                }
            })
    }

onMounted(() => {
    totalBalance()
})

</script>
