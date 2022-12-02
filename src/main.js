import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const app = createApp(App);
app.use(VueSplide);
app.mount("#app");
// createApp(App).mount('#app')
