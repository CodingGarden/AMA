import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    documents: [{
      id: 1,
      title: 'The First Document',
      content: 'wowowowowo',
      relatedDocuments: [2, 3],
    }, {
      id: 2,
      title: 'The Second Document',
      content: 'alsdkfjalsdkfj',
      relatedDocuments: [1, 3],
    }, {
      id: 3,
      title: 'The Third Document',
      content: 'alsdkfjalsdkfjalsdkfjalsdkfjalksdjflkdsj',
      relatedDocuments: [1, 2],
    }],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
