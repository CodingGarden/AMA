import {
  RootStore,
  Todo,
  TodoActions,
  TodoMutations,
  TodoState,
} from '@/interfaces/store';
import { ActionContext, Module } from 'vuex';

const state: TodoState = {
  items: [
    {
      done: false,
      content: 'Hello World',
    },
  ],
};

const mutations: TodoMutations = {
  addTodo(state, todo: Todo) {
    state.items.push(todo);
  },
};

type AugmentedActionContext = {
  commit<K extends keyof TodoMutations>(
    key: K,
    payload: Parameters<TodoMutations[K]>[1],
  ): ReturnType<TodoMutations[K]>;
} & Omit<ActionContext<TodoState, RootStore>, 'commit'>;

const actions: TodoActions = {
  addTodo(context: AugmentedActionContext, todo: Todo) {
    context.commit('addTodo', todo);
  },
};

const module: Module<TodoState, RootStore> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default module;
