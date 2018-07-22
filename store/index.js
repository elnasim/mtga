import Vue from 'vue';
import Vuex from 'vuex';
import DATA from '~/static/DATA.json';

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    articles: DATA
  },
  mutations: {}
});

export default store;