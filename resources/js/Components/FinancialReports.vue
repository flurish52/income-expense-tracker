<template>
    <section class="my-3 border-b-2 p-3 rounded-md w-full">
        <div class="w-full">
            <div class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
                <div class="flex flex-col">
                <input
                    v-model="transactionType.expense"
                    readonly
                    @click="addTransaction(selectedBusiness, transactionType.expense)"
                    class="cursor-pointer rounded-md text-gray-500 mt-2 font-bold text-white  py-2 w-full bg-blue-500 text-center border-0 focus:outline-none">
                    <div
                    class="flex flex-wrap bg-gray-200 py-1 w-fit my-2 rounded-md">
                        <input
                            v-for="business in businesses"
                            type="button"
                            :value="business.name"
                            @click="selectBusiness(business)"
                            :class="['w-32 p-1 mx-1  cursor-pointer rounded-md ',
                            business.active? ' bg-white text-gray-800': 'bg-gray-300 text-gray-500 border-2' ]">
                    </div>
                <input
                    v-model="transactionType.income"
                    readonly
                    @click="addTransaction(selectedBusiness, transactionType.income)"
                    class="cursor-pointer rounded-md text-gray-500 mt-2 font-bold text-white  py-2 w-full bg-blue-500 text-center border-0 focus:outline-none">

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from "vue";
let props = defineProps({
    businesses:Array
})

let selectedBusiness = ref('')
let transactionType = ref({
    income: 'Income',
    expense: 'Expense',
})
let type = ref('')
let emits =defineEmits(['addTransaction'])

let selectBusiness = (business)=>{
    props.businesses.forEach(card =>{
        card.active = false
    })
    business.active = true
    selectedBusiness.value = business
}

let addTransaction = (selectedBusiness, transaction)=>{
    if (selectedBusiness === '' || selectedBusiness === undefined){
        alert('Please select a business')
        return
    }
    emits('addTransaction', selectedBusiness, transaction)
}

</script>


<style scoped>

</style>
