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
    /**
     * Данные: конфиг
     * @type {Array<SectionModel>}
     */
    config: [] as Array<SectionModel>,
    /**
     * Данные: настройки меню
     * @type {Array<SettingModel>}
     */
    setting: setting as Array<SettingModel>
  },
  mutations: {
    /**
     * Записываем полученные данные в стейт
     * @param {Object} config
     */
    setConfig: (state, config: Array<any>) => {
      state.config = config;
    },
    /**
     * Записываем полученные данные в стейт
     * @param {Object} setting
     */
    setSetting: (state, setting: Array<any>) => {
      state.setting = setting;
    }
  },
  actions: {
    /**
     * Асинхронно получаем данные конфига
     * @return {Object}
    */
    async getConfig({ commit } : any) {
    /**
     * Получаем конфиг с бэка
     */

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

    /**
     * Асинхронно получаем настройки
     * * @return {Object}
     */
    async getSetting({ commit } : any) {
      commit('setSetting', setting);
      return config
    }
  },
  getters: {
    /**
     * Возвращаем данные 
     * @return Array<SectionModel>
     */
    Config: state => state.config,
    /**
     * Возвращаем данные 
     * @return Array<SettingModel>
     */
    Setting: state => state.setting,
  }
})
