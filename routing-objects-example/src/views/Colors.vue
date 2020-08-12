<template>
  <div>
    <h1>Colors</h1>
    <ul>
      <li v-for="color in colors" :key="color.id">
        <router-link
          :to="{
            name: 'SingleColor',
            params: {
              id: color.id,
            },
          }"
          >{{ color.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['colors']),
  },
};
</script>

<style></style>
