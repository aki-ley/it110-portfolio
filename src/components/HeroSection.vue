<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="w-full px-6 sm:px-10 md:px-14 lg:px-10 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-8">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-5 text-white font-bold text-5xl md:text-6xl lg:text-7xl">
                            Hi! I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Akima 
                            </span> :)
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-10 text-center lg:text-left mx-auto max-w-xl text-lg">
                         I design and code beautifully simple things.
                    </p>
                    <div class="flex items-center gap-4 pt-10 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="px-8 md:px-9 py-4 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span>
                            <span class="relative flex items-center justify-center text-white">Hire Me</span>
                        </button>
                        <button class="border border-primary px-8 md:px-9 py-4 rounded-full relative group w-full sm:w-max flex justify-center bg-bgColor">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="download-icon" width="20" height="24" viewBox="0 0 18 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                        <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1 17V18C1 18.7956 1.31607 19.5587 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 12 18V17" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="./resume.pdf" download="resume.pdf" class="pi-2 text-primary text-lg">Download Resume</a>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[30rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div class="absolute inset-0 flex items-center justify-center z-10 p-3">
                            <img src="@/assets/scout.png" alt="image" width="500" height="500" loading="lazy"
                            class="w-full h-full rounded-full object-contain"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>