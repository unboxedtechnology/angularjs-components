
import angular from 'angular';
import './angular-1.5.scss';

const MODULE_NAME 	 = 'angular-1.5';
const COMPONENT_NAME = 'angularOneDotFive';

let AngularOneDotFiveComponentConfig = {
	template: require('./angular-1.5.html'),
	controller: AngularOneDotFiveCtrl,
	bindings: {}
};

class AngularOneDotFiveCtrl {
	constructor() {
	}
}

angular.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, AngularOneDotFiveComponentConfig);

export default MODULE_NAME;
  