<template>
  <div class="w-full" style="height: 250px;">
    <div id="myMap" ref="myMap" class="w-4/5 h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import ghContributions from '~/assets/gh-contributions-2020.json';

const { $eChart } = useNuxtApp()
const myMap = ref<HTMLElement>()
const highlightedData = ghContributions
    .slice();

onMounted(() => {
  const myChart = $eChart.init(myMap.value!);
  // 指定图表的配置项和数据
  const option = {
    tooltip: {},
    series: {
      type: 'scatter',
      coordinateSystem: 'calendar',
      symbol: 'roundRect',
      symbolSize: Math.min((myChart.getWidth()) / 30, 15),
      data: highlightedData,
      itemStyle: {},
      universalTransition: {
        enabled: true,
        seriesKey: 'calendar',
      },
    },
    textStyle: {
      fontFamily: "'Open Sans Condensed', sans-serif",
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1,
      inRange: {
        color: ['#85db61', '#f8948b'],
      },
      outOfRange: {
        color: 'rgba(0,0,0,0)',
      },
    },
    calendar: {
      range:  ['2023-04', '2023-09'],
      top: 'center',
      right: 10,
      left: 60,
      splitLine: {
        show: false
      },
      yearLabel: {
        fontFamily: "'Open Sans Condensed', sans-serif",
      },
      monthLabel: {
        color: '#959595',
      },
      dayLabel: {
        color: '#959595',
      },
      itemStyle: {
        color: 'rgba(180,56,56,0)',
        borderColor: 'rgba(114,114,114,0.1)',
      },
    },
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

</script>

<style>

</style>
