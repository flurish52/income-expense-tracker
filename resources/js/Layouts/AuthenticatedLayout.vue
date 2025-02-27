<template>
    <div class="flex">

    <div class="w-64 h-screen bg-white shadow-md flex flex-col p-4 fixed">
        <h2 class="text-lg font-semibold mb-6">Business Manager</h2>
        <nav class="flex flex-col gap-3">
            <Link to="/dashboard" class="sidebar-link">Dashboard</Link>
            <Link to="/manage-businesses" class="sidebar-link">Manage Businesses</Link>
            <Link to="/add-business" class="sidebar-link">Add Business</Link>
            <button class="text-red-500 mt-auto">Sign Out</button>
        </nav>
    </div>

    <div class="w-full p-6 md:ml-64">

        <slot></slot>
    </div>

</div>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
</script>

<style scoped>
.sidebar-link {
    @apply text-gray-700 hover:text-blue-600 transition-all;
}
</style>
