<template>
  <div class="p-12 xl:p-1 2xl:p-18 xl:flex xl:justify-center">
    <div class="xl:w-3/4 xl:flex flex-col justify-center items-center">
      <n-grid cols="4" item-responsive responsive="screen" class="md:mb-8">
        <n-grid-item span=" 4 m:4 l:4" class="hidden md:block">
          <n-carousel
              effect="card"
              prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
              next-slide-style="transform: translateX(50%) translateZ(-800px);"
              style="height: 240px"
              :show-dots="false"
              autoplay
          >
            <n-carousel-item :style="{ width: '60%' }">
              <img
                  class="carousel-img"
                  src="/20230227082427856z4P.png"
              >
            </n-carousel-item>

            <n-carousel-item :style="{ width: '60%' }">
              <img
                  class="carousel-img"
                  src="/20230220151141651dp5.jpg"
              >
            </n-carousel-item>

            <n-carousel-item :style="{ width: '60%' }">
              <img
                  class="carousel-img"
                  src="/20230301150420343vE3.png"
              >
            </n-carousel-item>
          </n-carousel>
        </n-grid-item>
      </n-grid>

      <n-grid cols="4" item-responsive responsive="screen">
        <n-grid-item span="4 m:4 l:4">
          <div class="flex flex-col justify-center pr-5">
            <h1 class="text-blue-600 dark:text-blue-500 text-2xl md:text-3xl xl:text-4xl font-bold font-sans p-1 mb-2">人工智能与大数据技术研发中心</h1>
            <h2 class="text-blue-500 dark:text-blue-300 text-lg md:text-2xl xl:text-2xl font-bold font-sans  p-1 mb-1">浙江科技学院信息技术产业研究院</h2>
            <p class="text-lg font-light text-gray-900 dark:text-white tracking-wide leading-9 p-1 mb-3" >人工智能与大数据技术研发中心（以下简称: 研发中心）隶属于浙江科技学院信息技术产业研究院，以新一代人工智能与大数据创新团队建设为核心，推进大跨度的学科交叉融合，推进大范围的技术与产业、学校及企业融合。
              研发中心旨在推动大数据共性核心技术、智能安防与机器视觉新技术、行业大数据应用技术（包括 <n-tag class="m-1" v-for="field in fields" size="large" type="success">
                {{field.text}}</n-tag>等行业领域）的产业化。
            </p>
          </div>
        </n-grid-item>

        <n-grid-item span="4 m:4 l:4">
          <h2 class="text-blue-500 dark:text-blue-300 text-lg md:text-2xl xl:text-2xl font-bold font-sans p-1 mb-1">实验室成员概要</h2>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide leading-5 p-1">现有成员 <span class="font-bold">25</span> 人，其中正高级职称 <span class="font-bold">6</span> 人，副高级职称 <span class="font-bold">9</span> 人，博士 <span class="font-bold">22</span> 人，有海外背景的成员 <span class=font-bold>8</span> 人，有企业背景的成员 <span class="font-bold">10</span> 人。</p>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide leading-5 p-1">成员包括国家“千人计划”、浙江省“千人计划”、浙江省钱江学者，浙江省151各层次人才，中青年学科带头人等  <span class="font-bold">10</span>  余人。</p>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide leading-5 p-1 mb-3">实验室研究生团队 <span class="font-bold">56</span>  人。</p>
        </n-grid-item>

        <n-grid-item span="4 m:4 l:4">
          <h2 class="text-blue-500 dark:text-blue-300 text-lg md:text-2xl xl:text-2xl font-bold font-sans  p-1 mb-1">专家</h2>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide  p-1"><span class="font-bold">雷景生</span>教授，博士生导师，现任浙江科技学院信息与电子工程学院院长</p>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide  p-1"><span class="font-bold">黄正能</span>，美国华盛顿大学（西雅图）电子工程系教授， IEEE院士</p>
          <p class="font-light text-lg text-gray-900 dark:text-white tracking-wide  p-1  mb-3"><span class="font-bold">吴逵</span>，加拿大维多利亚大学计算机系教授</p>
        </n-grid-item>

        <n-grid-item span="4 m:4 l:4">
          <div class="flex flex-col justify-center">
            <h2 class="text-blue-500 dark:text-blue-300 text-lg  md:text-2xl xl:text-2xl font-bold font-sans  p-1 mb-1">学术成果概要</h2>
            <div>
              <div class="hidden sm:block">
                <!--<li class="p-2 text-base text-gray-900 dark:text-white" v-for="product in products2">{{product.text}}</li>-->
                <n-tag class="m-1" v-for="product in products2" size="large" style="font-weight: bold" type="info">
                  {{product.text}}</n-tag>
              </div>
              <div>
                <!--<li class=" p-2 text-base text-gray-900 dark:text-white" v-for="product in products1">{{product.text}}</li>-->
                <n-tag class="m-1" v-for="product in products1" size="large" style="font-weight: bold" type="info">
                  {{product.text}}</n-tag>
              </div>
            </div>
            <div class="sm:hidden block">
              <span>......</span>
            </div>
          </div>
        </n-grid-item>
      </n-grid>

      <n-divider class="p-7"></n-divider>

      <n-grid cols="4" item-responsive responsive="screen"  class="mb-8">
        <n-grid-item span="4 m:2 l:2">
          <div class="flex flex-col justify-center pr-5">
            <n-divider title-placement="center">
              <h1 class="text-gray-900 dark:text-white flex-none text-2xl md:text-2xl xl:text-2xl font-bold font-sans">有朋自远方来，不亦乐乎</h1>
            </n-divider>
            <ol>
              <li class="font-light text-2xl md:text-2xl xl:text-2xl font-sans text-gray-900 dark:text-white">“ 留言板规则 ”
                <ol>
                  <li class="p-4 font-light">请合理发言，不当言论将被拉黑，并使用相应手段查询其IP。</li>
                  <li class="p-4 font-light">将想问在写在留言板中，会及时有相应人员回复。</li>
                  <li class="p-4 font-light">支持MarkDown语法和Emoji表情。</li>
                  <li class="p-4 font-light">遵守规则后，请畅所欲言吧！</li>
                  <p class="p-4 font-light">&#127794;&#127800;&#127795;&#127799;&#127796;&#127803;&#127804;&#127793;</p>
                </ol>
              </li>
            </ol>
          </div>
        </n-grid-item>
        <n-grid-item span="4 m:2 l:2">
          <MessageMes></MessageMes>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup>
let id = 0;
let index = 0;

const fields = ref([
  { id: id++, text: '电网' },
  { id: id++, text: '教育' },
  { id: id++, text: '海洋' },
  { id: id++, text: '生物医学' }
])

const products1 = ref([
  {index:index++,text:'大数据安全存储关键技术与产业化'},
  {index:index++,text:'基于北斗的渔业与航海大数据服务平台'},
  {index:index++,text:'作业现场安全生产智能管控平台'},
  {index:index++,text:'教育跟踪摄像机系列'},

])
const products2 = ref([
  {index:index++,text:'基于深度学习的大客户负荷预测技术研究与应用'},
  {index:index++,text:'分布式环境下可视化大数据分析平台'},
  {index:index++,text:'面向智慧教育的多源跨界大数据融合技术'},
  {index:index++,text:'高校学情监控与大数据分析平台'},
  {index:index++,text:'基于标签技术的电网信息项目管理系统'},
  {index:index++,text:'安吉精铸消防预警管理系统研究与开发'},
  {index:index++,text:'智慧养老健康大数据平台'},
  {index:index++,text:'智能移动水质监测器及平台'},
  {index:index++,text:'变电站内电气设备及运动物体的识别和定位方法研究'},

])




</script>

<style>
.carousel-img {
  width: 90%;
  height: 100%;
  object-fit: cover;
}

</style>


