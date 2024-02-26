<template>
    <div class="px-5 md:px-10 md:py-2">
        <div class="flex items-center space-x-3 py-8">
            <div class="border-l-4 border-amber-500 md: h-6 md:h-8"></div>
                <h1 class="text-2xl md:text-3xl text-amber-500 font-bold">志工團隊</h1>
            <div class="border-r-4 border-amber-500 md: h-6 md:h-8"></div>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">核心團隊</h2>
            <div class="flex justify-start items-center flex-wrap gap-x-10 md:gap-x-16">
                <!-- 第一個人 -->
                <div class="flex flex-col items-center mb-3 md:mb-0">
                    <div class="rounded-full w-20 h-20 flex items-center justify-center">
                        <img src="../assets/volunteers/cat.jpeg" alt="cat" class="rounded-full w-full h-full object-cover">
                    </div>
                    <span class="mt-2">Cat</span>
                </div>

                <!-- 第二個人 -->
                <div class="flex flex-col items-center mb-3 md:mb-0">
                    <div class="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
                        <img src="../assets/volunteers/hamster.jpeg" alt="hamster" class="rounded-full w-full h-full object-cover">
                    </div>
                    <span class="mt-2">Hamster</span>
                </div>
                <div class="flex flex-col items-center mb-3 md:mb-0">
                    <div class="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
                        <img src="../assets/volunteers/dog.jpeg" alt="Dog" class="rounded-full w-full h-full object-cover">
                    </div>
                    <span class="mt-2">Dog</span>
                </div>
                <div class="flex flex-col items-center mb-3 md:mb-0">
                    <div class="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center">
                        <img src="../assets/volunteers/pig.jpeg" alt="Pig" class="rounded-full w-full h-full object-cover">
                    </div>
                    <span class="mt-2">Pig</span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">行政組</h2>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">贊助及票務組</h2>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">工作坊</h2>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">Program Commitee</h2>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold mb-6">設計組</h2>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'Volunteers',
    
};
</script>