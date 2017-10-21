import "core-js/es6";
import "core-js/es7";

import Vue from "vue";

/** have to import the base UI library manually */
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import RackView from "@src/index";
Vue.use(RackView);

import '@example-assets/scss/main.scss';

import router from "./router";
import App from "./app.vue";

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App },
});
