<template>
  <div :style="{ background: color.color }">
    <h1>Color Info</h1>
    <div>
      <h3>{{color.name}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['colorsById']),
    color() {
      const { id } = this.$route.params;
      const color = this.colorsById.get(Number(id));
      if (!color) {
        return {
          name: 'Not Found',
          color: '#ffffff',
        };
      }
      return color;
      // id = Number(id);
      // const currentColor = this.colors.find((color) => color.id === +id);
      // const currentColor = this.colors.find((color) => color.id === id);
      // const currentColor = this.colors.find((color) => color.id === parseInt(id));
      // console.log(currentColor);
      // return currentColor;
    },
  },
};
</script>

<style></style>
