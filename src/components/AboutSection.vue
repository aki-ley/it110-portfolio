<template>
    <section class="text-textColor mt-20" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 xl:px-16 lg:gap-8 md:gap-4">
            <div data-aos="fade-up">
                <h2 class="text-4xl font-bold text-textColor text-center mb-8">Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center h-40 w-full rounded-xl bg-cardColor shadow-lg border border-[#1f1641]">
                        <div class="w-1/3 flex justify-center text-center">
                            <img src="https://img.icons8.com/?size=100&id=11173&format=png&color=ffffff" alt="graduation-cap">
                        </div>
                        <div class="w-2/3">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg-text-xl">
                                {{ element.school }}
                            </h3>
                            <p class="text-textColor">{{ element.program }}</p>
                            <p class="text-textColor">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-textColor md:text-center text-left mb-4">More About Me
                    <!--<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">about</span>-->
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8 md:mt-4">My name is Akima Leyson, a programmer based in the Philippines. I specialize in front-end development and design. In my free time, I illustrate characters.
                </p>
                <div class="grid grid-cols-3 gap-4 h-30 max-w-2xl pt-8 mx-10">
                    <div class="text-center rounded-xl bg-cardColor shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-textColor font-bold text-xl sm:text-2xl lg:text-3xl">30+</h3>
                        <p class="text-sm sm:text-base text-textColorDark">Happy clients</p>
                    </div>
                    <div class="text-center rounded-xl bg-cardColor shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-textColor font-bold text-xl sm:text-2xl lg:text-3xl">50+</h3>
                        <p class="text-sm sm:text-base text-textColorDark">Projects</p>
                    </div>
                    <div class="text-center rounded-xl bg-cardColor shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-textColor font-bold text-xl sm:text-2xl lg:text-3xl">3+</h3>
                        <p class="text-sm sm:text-base text-textColorDark">Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const education = ref ([
    {
        id: 1,
        school: 'Caraga State University',
        program: 'Information Technology',
        year: '2022-2026'
    },
    {
        id: 2,
        school: 'Caraga State University',
        program: 'Information Technology',
        year: '2022-2026'
    }
])
</script>