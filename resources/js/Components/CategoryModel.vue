<template>
    <div class="absolute top-6 left-1/2 flex flex-col items-center justify-center bg-white shadow-2xl rounded-lg p-8 border border-gray-200 z-10 w-1/2 -translate-x-1/2">
        <!-- Title -->
        <h2 class="text-2xl font-bold text-gray-800 mb-6">All Categories</h2>

        <!-- Form -->
        <form @submit.prevent="submit" class="w-full flex flex-col gap-4">
            <input
                type="text"
                v-model="name"
                placeholder="Enter category name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition"
            >

            <button
                type="submit"
                class="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
                Submit
            </button>
        </form>

        <!-- Category List -->
        <div class="mt-8 w-full">
            <h3 class="text-xl font-semibold text-gray-700 mb-3">Existing Categories</h3>
            <ul class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <li
                    v-for="(category, index) in categories"
                    :key="index"
                    class="p-2 text-gray-700 border-b last:border-b-0 flex justify-between items-center hover:bg-gray-100 transition"
                >
                    <span class="font-medium">{{ category.name }}</span>

                    <div class="space-x-2">
                        <!-- Edit Button (Green) -->
                        <button
                            @click="editCategory(category.id)"
                            class="bg-green-500 text-white px-1 py-px rounded-md shadow hover:bg-green-600 transition">
                            Edit
                        </button>

                        <!-- Delete Button (Red) -->
                        <button
                            @click="deleteCategory(category.id)"
                            class="bg-red-500 text-white px-1 py-px rounded-md shadow hover:bg-red-600 transition">
                            Delete
                        </button>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>


<script setup>

import {useForm} from "@inertiajs/vue3";
import {ref} from "vue";


let name = ref('')
defineProps({
    categories: Array,
})
let emit = defineEmits(['submit']);

let submit = () => {
    emit('submit', name.value);
};



</script>
