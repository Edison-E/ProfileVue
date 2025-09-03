<script>
import contentComponent from './components/contentComponent.vue'

export default {
  name: 'App',
  components: {
    contentComponent
  },

  data() {
    return {
      showContent: false
    }
  },
  mounted() {
    document.body.classList.add('text-white');
  },
  methods: {
    showContentMouse() {
      this.showContent = true;
    },
    showDedicatoria() {
      alert("Esta va por ti abuelo....")
    }
  }
}
</script>

<template>
  <div class="index" ref="topSection">
    <div class="typing-wrapper">
      <h1><span class="text-warning">E</span>dison <span class="text-warning">E</span>nrique</h1>
      <h1 class="typing-effect">Web Developer</h1>
    </div>
    <img class="glow-image" src="./assets/image/post.png" @mouseover="showContentMouse" @click="showDedicatoria">
  </div>

  <div class="container-app" v-show="showContent">
    <contentComponent></contentComponent>
  </div>
</template>

<style>
* {
  cursor: url('./assets/image/gam1502.cur'), auto;
  font-family: "Quicksand", sans-serif;
}

body {
  background: linear-gradient(135deg, #000000, #000000);
}

.index {
  margin-top: 10%;
  margin-bottom: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-app {
  margin-top: 50px;
}

.glow-image {
  filter: drop-shadow(0 0 10px #ffffff);
  transition: filter 0.3s ease;
  width: 20%;
  height: 20%;
}

.glow-image:hover {
  filter: drop-shadow(0 0 20px #ffffff);
}

.typing-effect {
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid white;
  width: 0;
  animation: typing 4s steps(30, end) forwards, blink 0.7s step-end infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
