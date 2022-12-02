<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img alt="COS logos" src="./assets/COS.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- Splide.vue is declared -->
  <SplideHeader data="SplideHeader" msg="Take Home Assessment" />
  <SplideSlides />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// Splide is defined
import SplideHeader from "./components/SplideHeader.vue";
import SplideSlides from "./components/SplideSlides.vue";

export default {
  name: "App",
  components: {
    // HelloWorld

    // Defined Splide component is now used here
    SplideHeader,
    SplideSlides,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
