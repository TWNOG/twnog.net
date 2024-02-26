<template>
  <div class="h-[50vh] bg-cover bg-center flex flex-col justify-end" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="flex md:flex-row flex-col md:space-x-36 space-y-4 md:space-y-0 mb-16 items-center md:justify-center">
      <router-link to="/call-for-speakers" class="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-3xl text-white border-4 border-amber-300">徵求演講</router-link>
      <button @click="goToEventRegistration" class="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-3xl text-white border-4 border-amber-300">活動報名</button>
      <button @click="goToSponsorUs" class="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-3xl text-white border-4 border-amber-300">我要贊助</button>
    </div>
  </div>
  
  <div class="px-5 md:px-10 md:py-2 mb-10">
    <div class="flex items-center space-x-3 py-8">
      <div class="border-l-4 border-amber-500 h-6 md:h-8"></div>
      <h1 class="text-2xl md:text-3xl text-amber-500 font-bold">關於 TWNOG</h1>
      <div class="border-r-4 border-amber-500 h-6 md:h-8"></div>
    </div>

    <p class="text-base text-gray-700 px-10 mb-4 md:mb-10">
      TWNOG (Taiwan Network Operators' Group) 是個組織開放而且自由的團體。我們利用 TWNOG 平台推動台灣網路業務發展及提升技術實力。
      <br><br>
      網路開發者一個團隊相互，開放與自由的環境，隨著目前網路環境的蓬勃發展和技術之相關問題日益嚴峻，如何讓網路技術持續進步，將有助於提升網路品質及效益。
      <br><br>
      TWNOG 促進台灣網路業者技術進步，培育優質網路的相關專業技術人才，強化網路效率及穩定度。
      <br><br>
      TWNOG 致力於網路社群推廣技術交流與合作。網路團隊人員之技術能量，強化網路維運人員綜合應變的實力，並與國際其他 NOG 建立合作關係。
    </p>

    <div class="flex items-center space-x-3 py-8">
      <div class="border-l-4 border-amber-500 h-6 md:h-8"></div>
      <h1 class="text-2xl md:text-3xl text-amber-500 font-bold">最新資訊</h1>
      <div class="border-r-4 border-amber-500 h-6 md:h-8"></div>
    </div>

    <div class="relative bg-sky-100 xl:ml-32 xl:mr-32 2xl:ml-80 2xl:mr-80 rounded-xl flex justify-center items-start md:min-h-[0px] min-h-[550px]">
      <!-- 左箭頭 -->
      <button @click="prevInfo" class="bg-slate-50 hover:bg-blue-500 hover:text-white p-4 absolute left-0 transform -translate-y-1/2 top-1/2 focus:outline-none z-20 rounded-md">
        &#8592;
      </button>

      <!-- 目前資訊 -->
      <div class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 lg:space-x-8 max-w-3xl md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <img :src="info[currentIndex].image" alt="資訊图片" class="mt-5 mb-5 w-80 h-56 md:w-80 md:h-80 lg:w-96 lg:h-90 object-cover">
        <div class="flex flex-col px-20 md:px-4 lg:px-12 xl:px-0">
          <h2 class="text-2xl text-sky-800 mb-10">{{ info[currentIndex].title }}</h2>
          <p >{{ info[currentIndex].description }}</p>
        </div>
      </div>

      <!-- 右箭頭 -->
      <button @click="nextInfo" class="bg-slate-50 hover:bg-blue-500 hover:text-white p-4 absolute right-0 transform -translate-y-1/2 top-1/2 focus:outline-none z-20 rounded-md">
        &#8594;
      </button>
    </div>
  </div>
</template>
  
<script>
import homepageImage from '@/assets/homepage.jpeg';
import news1 from '@/assets/news1.jpeg';
import news2 from '@/assets/news2.jpeg';
import news3 from '@/assets/news3.jpeg';

export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImage: homepageImage,

      currentIndex: 0, // 當前的資訊索引
      info: [
        {
          title: '資訊標題1資訊標題1資訊標題1資訊標題1',
          description: '資訊内容1...資訊内容1...資訊内容1...資訊内容1...資訊内容1...資訊内容1...資訊内容1...資訊内容1...資訊内容1...',
          image: news1,
        },
        {
          title: '資訊標題2資訊標題2資訊標題2資訊標題2',
          description: '資訊内容2...資訊内容2...資訊内容2...資訊内容2...資訊内容2...資訊内容2...',
          image: news2,
        },
        {
          title: '資訊標題3',
          description: '資訊内容3...',
          image: news3,
        },
      ],
    };
  },
  methods: {
    prevInfo() {
      this.currentIndex = (this.currentIndex + this.info.length - 1) % this.info.length;
    },
    nextInfo() {
      this.currentIndex = (this.currentIndex + 1) % this.info.length;
    },
    goToEventRegistration() {
      window.location.href = 'https://twnog.kktix.cc/events/2024twnog5';
    },
    goToSponsorUs() {
      window.location.href = '我要贊助頁面的URL';
    },
  },
};
</script>