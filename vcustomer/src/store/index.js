import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    click:0
  },
  mutations: {
    count(state){
      state.click = state.click + 1;
    },
    resetCount(state){
      state.click = 0;
    }
  },
  actions: {
    // readChat(context, char){
    //   context.commit('readChar',char);
    // }
  }
});

export default store;

