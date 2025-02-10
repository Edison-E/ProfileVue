<script>
import contentComponent from './components/contentComponent.vue'
export default {
  name: 'App',
  components: {
    contentComponent
  },
  mounted() {
    document.body.classList.add('bg-black','bg-gradient', 'text-white');
  }
}
</script>
<template>
  <div>
    <contentComponent></contentComponent>
  </div>
</template>
