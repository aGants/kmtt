import Vue from 'vue';
import Vuex from 'vuex';
import data from '../config/data.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: data
  },
  mutations: {},
  actions: {},
  getters: {
    getData: state => state.data
  }
})
