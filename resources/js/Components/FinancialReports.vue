<template>
    <section class="my-3 border-b-2 p-3 rounded-md w-full">
        <div class="w-full">
            <div class="bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200">
                <h3 class="text-xl font-bold text-black">Total balance</h3>

                <div class="flex flex-col">
                <button
                    class="rounded-md text-gray-500 mt-2 font-bold text-white  py-2 w-full bg-blue-500">Add Expense
                </button>

                    <div
                    class="flex bg-gray-200 py-1 w-fit my-2 rounded-md">
                        <input
                            v-for="card in cards"
                            type="button"
                            :value="card.title"
                            @click="activateButton(card)"
                            :class="['w-32 p-1 mx-1  cursor-pointer rounded-md ',
                            card.active? ' bg-white text-gray-800': 'bg-gray-300 text-gray-500 border-2' ]">
                    </div>
                <button
                    class="rounded-md text-gray-500 mt-2 font-bold text-white  py-2 w-full bg-blue-500">Add income
                </button>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from "vue";
let  cards = ref([
    { id: 1, title: 'Academy', active: true},
    { id: 2, title: 'Energy Reserve', active: false},
    { id: 3, title: 'MonieDirect', active: false},
    { id: 4, title: 'MonieDirect', active: false}
]);


let activateButton =(button)=>{
    cards.value.forEach(card =>{
        card.active = false
    })

    button.active = true
}

</script>


<style scoped>

</style>
