import { Module, Mutation, MutationTree, Action, ActionTree } from 'vuex';

export interface Todo {
  done: boolean;
  content: string;
}

export interface TodoState {
  items: Todo[];
}

export interface TodoMutations extends MutationTree<TodoState> {
  addTodo: (state: TodoState, todo: Todo) => void;
}

export interface TodoActions extends ActionTree<TodoState, RootStore> {
  addTodo: Action<TodoState, RootStore>;
}

export interface RootStore {
  todo: Module<TodoState, RootStore> & TodoState;
}
