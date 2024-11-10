<template>
    <section class="text-textColor mt-20" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-12 rounded-l-full bg-primary blur-2xl"></span>
                <span class="w-16 h-12 rounded-r-full bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 py-8 px-4 xl:gap-16 xl:px-16 lg:gap-8 md:gap-4">
            <div class="mt-4 md:mt-8 w-full text-left flex flex-col z-10 h-full">
                <h2 class="text-4xl font-bold text-textColor text-center mb-4">My Skills</h2>
                <div class="mt-4" v-for="skill in Skills" :key="skill.id">
                    <div class="flex items-end justify-between">
                        <h4 class="font-semibold uppercase text-textColor">
                            {{ skill.name }}
                        </h4>
                        <h3 class="text-2xl font-bold text-textColor">
                            {{ skill.width }}
                        </h3>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-primary" :style="`width: ${skill.width}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">Experience</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in Experience" :key="element.id"
                        class="flex items-center rounded-xl p-5 bg-cardColor shadow-lg border border-[#1f1641]">
                        <div class="w-1/3 flex justify-center text-center">
                            <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="work">
                        </div>
                        <div class="w-2/3 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.role }}
                            </h3>
                            <p class="text-textColor">{{ element.company }}</p>
                            <p class="text-textColor">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
    {
        id: 1,
        name: 'HTML & CSS',
        width: '85%'
    },
    {
        id: 2,
        name: 'JavaScript',
        width: '65%'
    },
    {
        id: 3,
        name: 'Python',
        width: '70%'
    },
    {
        id: 4,
        name: 'C',
        width: '90%'
    },
])

const Experience = ref([
    {
        id: 1,
        role: 'Web Developer',
        company: 'Freelance',
        date: 'January 2024 - present'
    },
    {
        id: 2,
        role: 'Junior Web Developer',
        company: 'Milgram Corporation',
        date: 'May 2023 - January 2024'
    },
])

</script>