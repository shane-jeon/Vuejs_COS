<template>
  <div>
    <h1>SplideSlide with Vue js</h1>
    <h1>{{ data }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "SplideHeader",
  props: {
    data: String,
    msg: String,
  },
};
</script>
