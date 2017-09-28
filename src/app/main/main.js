
import angular from 'angular';
import './main.scss';

const MODULE_NAME 	 = 'app';
const COMPONENT_NAME = 'main';

class MainComponentCtrl {
	constructor() {
	}
}

let MainComponentConfig = {
	template: require('./main.html'),
	controller: MainComponentCtrl,
	controllerAs: 'mainCtrl', // default is $ctrl
	bindings: {}
};

export const MainModule = angular
	.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, MainComponentConfig)
	.name;
