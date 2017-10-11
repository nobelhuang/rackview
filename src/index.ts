import Vue, { ComponentOptions } from "vue";
import * as components from './components';

function install() {
	Object.keys(components).forEach(key => {
		let comp: ComponentOptions<Vue> = (<any>components)[key];
		Vue.component(key, comp);
	});
}

export default {
	install
};
