import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Hello from "@example-app/hello/hello.vue";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});

