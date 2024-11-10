<template>
    <section class="text-textColor mt-20" id="services">
        <div class="px-4 xl:pl-16 text-center">
            <h2 class="text-4xl font-bold text-textColor mb-4">Services</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-cardColor shadow-lg border border-[#1f1641]">
                <div class="flex justify-center items-center mx-auto h-24 xl:h-28">
                    <img :src="service.icon" alt="service icon" class="icon-size max-w-full h-auto">
                </div>
                <div class="text-center ">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grayish pt-4 text-sm group-hover:text-textColor md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/external-solid-design-circle/1000/ffffff/external-Mobile-Development-digital-marketing-solid-design-circle.png',
        name: 'Mobile Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png',
        name: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
])
</script>

<style scoped>

.icon-size {
    width: 100px; 
    height: 100px; 
    object-fit: contain; /* Maintain aspect ratio */
}

</style>