<template>
    <section class="text-textColor mt-20">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-textColor">Latest Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="uppercase hover:text-primary"
                        v-for="category in ['all', 'web development', 'mobile app']"
                        :key="category"
                        @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <li class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-16 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"       
                data-aos="fade-up">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[20rem] rounded-t-xl relative group" 
                        :style="{backgroundImage: 'url('+project.image+')', backgroundSize: 'cover'}">
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                            <a :class="{'opacity-50 pointer-events-none': !project.webURL}" 
                               class="h-14 w-14 mr-2 border-2 relative rounded-full border-grayish hover:border-textColor group/link"
                               :href="project.gitURL" 
                               v-if="project.gitURL">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-grayish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-textColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                    </path>
                                </svg>
                            </a>
                            <a :class="{'opacity-50 pointer-events-none': !project.gitURL}" 
                               class="h-14 w-14 border-2 relative rounded-full border-grayish hover:border-white group/link"
                               :href="project.webURL" 
                               v-if="project.webURL">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-grayish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-textColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                                    </path>
                                </svg>
                            </a>
                            <button v-if="!project.gitURL" class="h-14 w-14 mr-2 border-2 relative rounded-full border-grayish opacity-50 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-grayish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-textColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                    </path>
                                </svg>
                            </button>
                            <button v-if="!project.webURL" class="h-14 w-14 border-2 relative rounded-full border-grayish opacity-50 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    aria-hidden="true" data-slot="icon"
                                    class="h-10 w-10 text-grayish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-textColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="text-textColor rounded-b-xl mt-0 bg-cardColor shadow-lg py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-lg">
                            {{ project.title }}
                        </h3>
                        <p class="text-grayish">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </li>
        </div> 
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/todo-app.png',
        title: 'To Do App',
        description: 'An application that can help with remembering tasks.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'mobile app',
        image: 'src/assets/weather-app.png',
        title: 'Weather App',
        description: 'An application for checking the weather in multiple locations at the same time.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: 'https://github.com/aki-ley/weather-app',
        webURL: 'https://weather-app-mu-ashy-65.vercel.app/'
    },
    {
        id: 3,
        category: 'web development',
        image: 'src/assets/2048-clone.png',
        title: '2048 Clone',
        description: 'A clone of the game 2028.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: 'https://github.com/aki-ley/2048-clone',
        webURL: 'https://github.com/aki-ley/2048-clone'
    },
    {
        id: 4,
        category: 'mobile app',
        image: 'src/assets/mobile.png',
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae provident cum ratione quisquam nulla cupiditate alias harum consequuntur dolor.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 5,
        category: 'web development',
        image: 'src/assets/project.jpg',
        title: 'Project 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae provident cum ratione quisquam nulla cupiditate alias harum consequuntur dolor.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 6,
        category: 'mobile app',
        image: 'src/assets/mobile.png',
        title: 'Project 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae provident cum ratione quisquam nulla cupiditate alias harum consequuntur dolor.',
        technologies: ['Vue JS 3', 'Vuetify'],
        gitURL: '',
        webURL: ''
    }
])

const selectedCategory = ref('all');
const filteredProjects = computed(()=> {
    if(selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

</script>