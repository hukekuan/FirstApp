/**
 * Created by hukekuan on 17-8-9.
 */
import echarts from 'echarts'
import api from '../../config/api'

// initial state
const state = {
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  initChart: function (charDocument) {
    let myChart = echarts.init(document.getElementById('main'));
    let option = {
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    myChart.setOption(option);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
