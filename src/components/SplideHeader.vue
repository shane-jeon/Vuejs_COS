<template>
  <div>
    <h1>SplideSlide with Vue js</h1>
    <h1 v-if="show">{{ data }}</h1>
    <h1 v-else>{{ msg }}</h1>
    <!-- <button v-on:click="hello">click event example</button> -->
    <button v-on:click="display">toggle</button>
  </div>
</template>

<script>
export default {
  name: "SplideHeader",
  props: {
    data: String,
    msg: String,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    display() {
      // to toggle
      this.show = !this.show;
    },
    hello() {
      alert("Hello function is called");
    },
  },
};
</script>
