<template>
    <div class="px-5 md:px-10 md:py-2">
        <div class="flex items-center space-x-3 py-8">
            <div class="border-l-4 border-amber-500 md: h-6 md:h-8"></div>
                <h1 class="text-2xl md:text-3xl text-amber-500 font-bold">徵求演講</h1>
            <div class="border-r-4 border-amber-500 md: h-6 md:h-8"></div>
        </div>
        <p class="text-base text-gray-700 px-10 mb-4 md:mb-10">
            台灣網路維運社群將於 2024 年 04 月 26 日舉辦第五屆台灣網路維運論壇，現公開徵求能提供符合論壇主題之技術相關之演講。
        </p>
        <div class="flex items-center justify-start md:space-x-36 mb-8 ml-10">
            <button @click="goToCallForSpeakers" class="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-3xl text-white border-4 border-amber-300">徵求演講</button>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold pl-4 mb-6">講者福利</h2>
            <p class="text-base text-gray-700 px-4 md:px-8">
                投稿錄取的講者，將同時獲得額外<strong>兩張活動邀請票</strong>。
                ( 不含網路自我介紹 )
            </p>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold pl-4 mb-6">論壇相關時程</h2>
            <p class="text-base text-gray-700 px-4 md:px-8">
                ▪️ 徵求演講開始 8 Jan 2024 (Mon)
                <span class="block my-2"></span>
                ▪️ 暫定議程公告 28 Feb 2024 (Wed)
                <span class="block my-2"></span>
                ▪️ 徵求演講截止 29 Feb 2024 (Thur)
                <span class="block my-2"></span>
                ▪️ 演講提案討論與同意 4-10 March 2024
                <span class="block my-2"></span>
                ▪️ 議程確認公告 11 March 2024 (Mon)
                <span class="block my-2"></span>
                ▪️ 提供最終簡報 12 April 2024 (Fri)
                <span class="block my-2"></span>
                ▪️ 論壇活動日 26 April 2024 (Fri)
            </p>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="px-8 md:px-16 py-8 md:py-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold pl-4 mb-6">論壇主題</h2>
            <p class="text-base text-gray-700 px-4 md:px-8">
                演講主題需與網路維運技術相關，以下為建議優先提案主題，但不限於以下主題：
                <br><br>
                <span class="block pb-2">▪️ 網路安全和攻擊防護</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 網路安全攻擊與防禦等相關議題 (Network security/attack/defense topics: NSP-SEC, DDoS trend, Anti-Spam, Botnet detection)</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 域名/ 域名系統安全 DNS / DNSSEC</span>
                <span class="block pb-2">▪️ 網路基礎架構及軟體定義網路</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 交換中心與互連 IXPs and Peering</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ IPv4 / IPv6 路由與維運 (IPv4/IPv6 Routing and operations)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ IPv6 於各行業的應用與佈建 (IPv6 used in different industries, v6 deployment & transition)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 網路骨幹維運 (Internet backbone operations)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 接取與傳輸網路技術相關議題 (Access and Transport Technologies, including Cable/DSL, 3G/LTE/5G, FTTH, Wireless, Metro Ethernet, Fiber Optics, MPLS)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 軟體定義網路與網路功能虛擬化 (SDN & NFV)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 資源公鑰基礎建設與路由起源授權 (RPKI & ROA)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 衛星網路 (Satellite Networks)</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 可負擔的網路 (Affordable Network)</span>
                <span class="block pb-2">▪️ 資料中心 (Data Center)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 能源利用</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 維運管理</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 資料中心認證</span>
                <span class="block pb-2">▪️ 無線與行動通訊</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 5G/6G 相關議題 (5G/6G related topics)</span>
                <span class="block pb-2">▪️ 網路維運與管理</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 網路服務與國際電信相關 (ISP and Carrier services)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 人工智慧與網路維運 (AI used in Network Operations)</span>
                <span class="block pl-4 md:pl-6 pb-1.5">▫️ 網路維運最佳實務 (Best Practice in Network Operations)</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 網路速度量測技術 (Network Performance Measurement)</span>
                <span class="block pb-2">▪️ 雲端與內容傳遞網路 (CDN)</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 雲端運算與內容遞送 (Cloud Computing and CDN: Multicast, Voice, Video, Telepresence, Gaming)</span>
                <span class="block pb-2">▪️ 新興技術與其他</span>
                <span class="block pl-4 md:pl-6 pb-2">▫️ 大數據, 人工智慧, 物聯網及工業4.0 (Big Data, AI, IoT and Industry 4.0)</span>
                <span class="block pb-2">▪️ 其他網路相關議題</span>
            </p>
        </div>
    </div>
    <div class="bg-white">
        <div class="px-8 md:px-16 py-8 md:py-10 mb-10">
            <h2 class="text-xl md:text-2xl text-amber-400 font-bold pl-4 mb-6">注意事項</h2>
            <p class="text-base text-gray-700 px-4 md:px-8">
                TWNOG 投稿系統由 APNIC 提供，請務必於提案時完整填寫相關資料並上傳簡報。若簡報尚未完成可以先上傳草稿，草稿內容最少須列出簡報大綱及摘要內容。
                <br><br>
                簡報限以 PDF 或 PPT Slide 形式，並請注意最終定稿之簡報須於 2024 年 04 月 12 日前上傳至，TWNOG 之多方利害關係人小組 MSG 將仔細閱讀並討論所有提案，TWNOG 保留接受與否及議程安排之權力。
                <br><br>
                若有任何問題請發信至: <a href="mailto:paper@twnog.net" class="text-sky-600 underline">paper@twnog.net</a>，期待您的提案！
            </p>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CallForSpeakers',
    methods: {
    goToCallForSpeakers() {
      window.location.href = 'https://submission.apnic.net/user/login.php?event=189';
    },
  },
};
</script>