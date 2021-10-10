import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vue from "vue";
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);
// import { VuelidatePlugin } from "@vuelidate/core";

createApp(App)
  // .use(Vuelidate)
  // .use(VuelidatePlugin)
  .use(store)
  .use(router)
  .mount("#app");
