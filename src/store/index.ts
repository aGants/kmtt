import Vue from 'vue';
import Vuex from 'vuex'
import config from '../config/config.json'
import setting from '../config/setting.json'
import SettingModel from '../interfaces/Setting'
import { SectionModel } from '../interfaces/Menu'
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: [] as Array<SectionModel>,
    setting: setting as Array<SettingModel>
  },
  mutations: {
    setConfig: (state, config: Array<any>) => {
      state.config = config;
    },
    setSetting: (state, setting: Array<any>) => {
      state.setting = setting;
    }
  },
  actions: {
    async getConfig({ commit } : any) {
    //   return axios(('URL'), {
    //     method: "GET"
    //   })
    //     .then((config) => {
    //       commit('setConfig', config);
    //       return config
    //     })
    // }
    commit('setConfig', config);
    return config
    },
    async getSetting({ commit } : any) {
      commit('setSetting', setting);
    return config
    }
  },
  getters: {
    Config: state => state.config,
    Setting: state => state.setting,
  }
})
