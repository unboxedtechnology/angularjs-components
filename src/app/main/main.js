
import angular from 'angular';
import './main.scss';

const MODULE_NAME 	 = 'app';
const COMPONENT_NAME = 'main';

let MainComponentConfig = {
	template: require('./main.html'),
	controller: MainComponentCtrl,
	controllerAs: 'mainCtrl', // default is $ctrl
	bindings: {}
};

class MainComponentCtrl {
	constructor() {
	}
}

angular.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, MainComponentConfig);

export default MODULE_NAME;
  