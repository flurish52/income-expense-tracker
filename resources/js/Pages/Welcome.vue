<template>
    <AuthenticatedLayout>

        <section class="my-3 border-b-2 p-3 rounded-md w-full">
            <div class="w-full">
                <div class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
                    <h3 class="text-xl font-bold text-black">Total balance</h3>
                    <p class="text-gray-500 mt-2 font-bold text-3xl">80,000,000</p>
                </div>
            </div>
        </section>




        <section class="my-3 border-b-2 p-3 rounded-md">
            <FinancialOverview />
        </section>
        <section class="my-3 border-b-2 p-3 rounded-md">
        <DailyBusinessCard />
        </section>
        <section class="my-3 border-b-2 p-3 rounded-md">
        <BusinessMonthlySumarry />
        </section>

        <section class="my-3 border-b-2 p-3 rounded-md">
        <FinancialReports />
        </section>

        <section class="my-3 border-b-2 p-3 rounded-md">
        <AllTransactions />
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
</script>
