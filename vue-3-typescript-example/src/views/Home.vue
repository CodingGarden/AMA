<template>
  <div class="home">
    <form @submit.prevent="addTodo">
      <label>New Todo</label>
      <input id="newTodo" v-model="newTodo" name="newTodo" />
      <button>Add Todo</button>
    </form>
    <div v-for="item in items">
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const newTodo = ref('');

    const items = computed(() => store.state.todo.items);

    const addTodo = () => {
      store.dispatch('todo/addTodo', {
        done: false,
        content: newTodo.value,
      });
      newTodo.value = '';
    };

    return {
      newTodo,
      items,
      addTodo,
    };
  },
});
</script>
