<template>
  <div id="app" class="container white_b">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
    created() {
      this.$router.push('index')
    },
    methods: {

    }
  };
</script>

<style>

</style>
