<template>
    <section class="text-textColor mt-20" id="contact">
        <h2 class="text-4xl font-bold text-textColor text-left mb-1 px-4 xl:pl-16">Let's get in touch!</h2>
        <div class="md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 xl:px-16 lg:gap-8" data-aos="fade-up">
            <div>
                <p class="text-grayish bg-bgColor">
                    Interested in working with me? Any inquiries? Suggestions? Contact me below. 
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #005377; width: 50px; height: 50px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; backdrop-filter: blur(9px);"
                        >
                            <img src="..\assets\icons\email.png" alt="email" class="mt-1 w-6 h-6">
                        </div>
                        <div class="ml-5 text-textColor bg-bgColor">
                            <h4>Email</h4>
                            <p>akimaleyson@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #005377; width: 50px; height: 50px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; backdrop-filter: blur(9px);"
                        >
                            <img src="..\assets\icons\phone.png" alt="phone" class="mt-1 w-6 h-6">
                        </div>
                        <div class="ml-5 text-textColor bg-bgColor">
                            <h4>Phone</h4>
                            <p>+63966649****</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #005377; width: 50px; height: 50px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; backdrop-filter: blur(9px);"
                        >
                            <img src="..\assets\icons\linkedin.png" alt="linkedin" class="mt-1 w-6 h-6">
                        </div>
                        <div class="ml-5 text-textColor bg-bgColor">
                            <h4>LinkedIn</h4>
                            <p>linkedin.com/akimaleyson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-8" style="background: #005377; width: 100%; height: 100%; border-radius: 20px; overflow: hidden; backdrop-filter: blur(9px);"
            >
                <form class="flex flex-col p-2" data-aos="fade-up">
                    <div class="mb-6">
                        <label for="email" class="text-textColor block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" class="bg-bgColor placeholder:[#9CA2A9] text-textColorDark text-sm rounded-lg block w-full p-2.5"
                            placeholder="Email" name="email">
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="text-textColor block mb-2 text-sm font-medium">Subject</label>
                        <input type="subject" id="subject" class="bg-bgColor placeholder:[#9CA2A9] text-textColorDark text-sm rounded-lg block w-full p-2.5"
                            placeholder="Subject" name="subject">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="text-textColor block mb-2 text-sm font-medium">Message</label>
                        <textarea id="message" class="bg-bgColor placeholder:[#9CA2A9] text-textColorDark text-sm rounded-lg block w-full p-2.5"
                            placeholder="Message" name="message"></textarea>
                    </div>
                    <button class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-textColor bg-primary border-2 border-transparent">
                        Send!
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>