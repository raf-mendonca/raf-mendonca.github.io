import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("footer-content", {
  bind(el, binding) {
    let today = new Date();
    today = today.getFullYear();
    let footerTxt = `Copyright © ${today} Quebec Inc. - ${binding.value} - All Rights Reserved`;
    el.textContent = footerTxt;
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
