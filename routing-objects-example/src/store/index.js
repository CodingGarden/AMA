/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: [{
      id: 42,
      name: 'Rebecca Purple',
      color: 'rebeccapurple',
    }, {
      id: 13,
      name: 'Corn Flower Blue',
      color: 'cornflowerblue',
    }, {
      id: 99,
      name: 'Red',
      color: 'red',
    }, {
      id: 15,
      name: 'Teal',
      color: 'teal',
    }, {
      id: 22,
      name: 'Fuchsia',
      color: 'fuchsia',
    }],
  },
  getters: {
    colorsById(state) {
      // const byId = {};
      // for (const color of colors) {
      //   if (Object.hasOwnProperty.call(colors, color)) {
      //     byId[color.id] = color;
      //   }
      // }
      // return byId;
      return state.colors.reduce((byId, color) => {
        byId.set(color.id, color);
        return byId;
      }, new Map());
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
