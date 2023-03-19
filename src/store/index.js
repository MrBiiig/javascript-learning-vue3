import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

/* 
上面的代码定义了一个状态 `count`，一个 mutation `increment`，一个 action `increment` 和一个 getter `doubleCount`。
*/
