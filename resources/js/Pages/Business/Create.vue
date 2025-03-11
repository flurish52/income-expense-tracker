<template>
    <AuthenticatedLayout>
        <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Create a New Business</h2>
            <form @submit.prevent="submit" class="space-y-4">
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label for="name" class="block text-gray-700 font-medium">Business Name</label>
                        <input type="text" v-model="form.name" id="name" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                    <div>
                        <label for="manager_id" class="block text-gray-700 font-medium">Manager</label>
                        <select v-model="form.manager" id="manager_id" required
                                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                            <option value="" selected disabled>Select manager</option>
                            <option
                                v-for="user in props.users"
                                    :key="user.id"
                                    :value="user.id">{{ user.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="type" class="block text-gray-700 font-medium">Type</label>
                        <input type="text" v-model="form.type" id="type" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                    <div>
                        <label for="description" class="block text-gray-700 font-medium">Description</label>
                        <textarea v-model="form.description" id="description" rows="4"
                                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
                    </div>
                    <div>
                        <label for="est_date" class="block text-gray-700 font-medium">Established Date</label>
                        <input type="date" v-model="form.est_date" id="est_date" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                    <div>
                        <label for="address" class="block text-gray-700 font-medium">Address</label>
                        <input type="text" v-model="form.address" id="address" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                    <div>
                        <label for="country" class="block text-gray-700 font-medium">Country</label>
                        <input type="text" v-model="form.country" id="country" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                    <div>
                        <label for="state" class="block text-gray-700 font-medium">State</label>
                        <input type="text" v-model="form.state" id="state" required
                               class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    </div>
                </div>
                <button type="submit"
                        class="w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300">
                    Create Business
                </button>
            </form>
        </div>
    </AuthenticatedLayout>

</template>

<script setup>

import { useForm } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

let props = defineProps({
    users: Object
})
const form = useForm({
    name: '',
    manager: '',
    type: '',
    description: '',
    est_date: '',
    address: '',
    country: '',
    state: ''
});

const submit = () => {
    form.post('/new-business', {
        onSuccess: () => {
            alert('Business created successfully!');
            form.reset()
        },
        onError: (errors) => {
            alert('Failed to create business. Please check your inputs.');
            console.log(errors); // Log errors for debugging
        }
    });
};

</script>

