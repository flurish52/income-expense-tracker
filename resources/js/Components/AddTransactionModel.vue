<template>
    <div class="bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-6 text-gray-900">Add {{ typeOftransaction }}</h2>

        <form @submit.prevent="submit" class="space-y-4">
            <!-- Business Selection -->
            <div class="text-xs text-center py-3 flex flex-col items-center justify-center">
                <label for="amount" class="block text-gray-700 font-medium">Adding transaction to:</label>
                <div class=" rounded-lg text-gray-800 bg-gray-100 w-fit px-3">{{ business.name }}</div>
            </div>

            <!-- Category Selection -->
            <div>
                <label for="category_id" class="block text-gray-700 font-medium mb-1">Select Category</label>
                <select v-model="form.category_id" id="category_id" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value="" disabled selected>Select a Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <!-- Description -->
            <div>
                <label for="description" class="block text-gray-700 font-medium mb-1">Description</label>
                <textarea v-model="form.description" id="description" required
                          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
            </div>

            <!-- Amount -->
            <div>
                <label for="amount" class="block text-gray-700 font-medium mb-1">Amount</label>
                <input type="number" v-model="form.amount" id="amount" required
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>


            <!-- Submit Button -->
            <button type="submit"
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold">
                Save {{ typeOftransaction }}
            </button>
        </form>
    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useForm } from "@inertiajs/vue3";
import axios from "axios";


let props =  defineProps({
    categories: Array,
    business: Array,
    typeOftransaction: String
})
// Form Data
const form = useForm({
    business_id: "",
    type: "",
    category_id: "",
    description: "",
    amount: "",
});


let emit = defineEmits(['closDialogue'])
// Form Submission
const submit = () => {
    form.business_id = props.business.id
    form.type = props.typeOftransaction
    form.post("add-new-transaction", {
        onSuccess: () => {
            form.reset();
            emit('closDialogue')
            alert("Transaction saved successfully!");
        },
    });
};

</script>
