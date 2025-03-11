<template>
    <AuthenticatedLayout>
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-semibold text-teal-900 mb-6">Manage Your Businesses</h1>

            <div v-if="businesses.length === 0" class="text-center text-gray-500">
                <p>No businesses available.</p>
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(business, index) in businesses"
                    :key="business.id"
                    class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                    <h2 class="text-2xl font-semibold text-teal-900 mb-3">{{ business.name }}</h2>
                    <p class="text-sm text-gray-600 mb-2">{{ business.type }}</p>
                    <p class="text-sm text-gray-500">{{ business.description }}</p>

                    <div class="mt-4 text-sm text-gray-400">
                        <p>Established: {{ business.est_date }}</p>
                        <p>{{ business.address }}, {{ business.state }}, {{ business.country }}</p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineProps({
    businesses: Array,
});
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
