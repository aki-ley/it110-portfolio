<template>
  <!--<div class="bg-bgColor min-h-screen">-->
  <div>
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <ProjectsSection />
    <ContactSection />
    
    <Footer />
    <BackToTop />
    
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue'

  //import Components Asynchronously

  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
  const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
  const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
  const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
  const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
  const ProjectsSection = defineAsyncComponent(() => import('@/components/ProjectsSection.vue'));
  const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
  const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
  const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));

</script>

<style>

  @import
    url(https://fonts.googleapis.com/css?family=VT323);

  body {
    font-family: "VT323";
    background-image: url('@/assets/bg-image.png');
    background-color: #052F5F;
    font-size: 110%;
  }

</style>