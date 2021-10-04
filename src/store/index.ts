import Vue from 'vue';
import Vuex from 'vuex';
import data from '../config/data.json'
import setting from '../config/setting.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data,
    setting: setting
  },
  mutations: {},
  actions: {},
  getters: {
    getData: state => state.data,
    getSetting: state => state.setting,
  }
})
