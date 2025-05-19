<script>
import contentComponent from './components/contentComponent.vue'
export default {
  name: 'App',
  components: {
    contentComponent
  },
  mounted() {
    document.body.classList.add('text-white');
  }
}
</script>

<template>
  <div class="container-app">
    <contentComponent></contentComponent>
  </div>
</template>

<style>
* {
  cursor: url('./assets/image/gam1502.cur'), auto;
  font-family: "Quicksand", sans-serif;
}

body {
  background: linear-gradient(to bottom, rgb(0, 0, 6), rgb(1, 1, 16));
}

.container-app {
  margin-top: 50px;
}
</style>
