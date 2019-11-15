<template>
  <div class="container-error">
    <div class="title">
      <h1 v-if="error.statusCode === 404">
        404
      </h1>
      <h1 v-else>An error occurred</h1>
    </div>
    <div class="link">
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
@import './css/error.scss';
</style>
