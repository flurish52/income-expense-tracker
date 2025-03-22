<template>
    <div class="flex flex-col md:flex-row">
        <!-- Add Category Button -->
        <button @click="toggleCategoryModel()"
                class="fixed top-4 right-6 z-40 bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition hover:bg-blue-800 hover:scale-105">
            + Add New Category
        </button>

        <!-- Sidebar Toggle Button (Mobile) -->
        <button @click="toggleSidebar"
                :class="{'translate-x-56': sidebarVisible, 'translate-x-0': !sidebarVisible}"
                class="md:hidden border-2 fixed top-4 left-6 z-50 bg-gray-100 text-black p-2 rounded-md transition-transform duration-300">
            ☰
        </button>
        <!-- Overlay -->
        <div v-show="isVisible" @click="toggleCategoryModel" class="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

        <!-- Sidebar -->
        <div :class="{'-translate-x-full': !sidebarVisible, 'translate-x-0': sidebarVisible}"
             class="w-64 h-screen md:h-auto bg-white shadow-lg flex flex-col p-6 fixed md:relative z-40 transition-transform md:translate-x-0">
            <h2 class="text-xl font-bold mb-6 text-gray-800">Business Manager</h2>
            <nav class="flex flex-col gap-4">
                <Link href="/" class="sidebar-link">Dashboard</Link>
                <Link href="/manage-businesses" class="sidebar-link">Manage Businesses</Link>
                <Link href="/new-business" class="sidebar-link">Add Business</Link>
                <button
                    @click="logOut"
                    class="text-red-600 font-medium mt-auto hover:underline">Sign Out</button>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="relative w-full p-6">
            <CategoryModel :categories="categories" v-show="isVisible" @submit="submit" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
import CategoryModel from "@/Components/CategoryModel.vue";
import {ref} from "vue";
import axios from "axios";

let isVisible = ref(false)
let categories = ref();
let sidebarVisible = ref(false);

const fetchCategories = () => {
    axios.get('/all-categories')
        .then(response => {
            categories.value = response.data
        })
}
const toggleCategoryModel = () => {
    fetchCategories()
    isVisible.value = !isVisible.value
}

const logOut = () => {
axios.post('logout')
}
const toggleSidebar = () => {
    sidebarVisible.value = !sidebarVisible.value;
}

const submit = (name) => {
    axios.post('add-new-category', {name})
        .then(response => {
            if (response.status === 200) {
                alert('Category created successfully!');
                name = ''
                fetchCategories()
            }
        })
        .catch(errors => {
            alert('Failed to create Category. Please check your inputs.');
            console.log(errors);
        })
}
</script>

<style scoped>
.sidebar-link {
    @apply text-gray-700 hover:text-blue-600 transition-all;
}

@media (max-width: 768px) {
    .sidebar-link {
        @apply text-lg;
    }
}
</style>
