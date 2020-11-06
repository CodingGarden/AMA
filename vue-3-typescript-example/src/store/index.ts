import { createStore } from 'vuex';

import todo from './todo';

export const store = createStore({
  modules: {
    todo,
  },
});

export const useStore = () => {
  return store;
};
