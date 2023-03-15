<template>
  <div class="container">
    <ul>
      <li v-for="item in data?.items">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch('/api/items');
</script>