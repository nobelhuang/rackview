import "core-js/es6";
import "core-js/es7";

import Vue from "vue";
import router from "./router";

import App from "./app.vue";

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App },
});
