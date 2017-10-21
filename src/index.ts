import Vue, { ComponentOptions } from "vue";
import * as components from './components';

/** import global style definitions */
import './scss/main.scss';

/** import default theme */
import './scss/themes/default/theme.scss';

function install() {
	Object.keys(components).forEach(key => {
		let comp: ComponentOptions<Vue> = (<any>components)[key];
		Vue.component(key, comp);
	});
}

export default {
	install
};
