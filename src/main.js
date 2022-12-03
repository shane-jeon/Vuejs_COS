import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
// import { Splide } from "@splidejs/splide";
// import { URLHash } from "@splidejs/splide-extension-url-hash";

const app = createApp(App);
app.use(VueSplide);
app.mount("#app");
