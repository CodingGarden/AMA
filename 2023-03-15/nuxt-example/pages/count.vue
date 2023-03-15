<template>
  <div class="container">
    There are {{ data?.items.length }} items in the DB.
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch('/api/items');
</script>