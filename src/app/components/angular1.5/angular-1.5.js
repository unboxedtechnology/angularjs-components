
import angular from 'angular';
import './angular-1.5.scss';

const MODULE_NAME 	 = 'angular-1.5';
const COMPONENT_NAME = 'angularOneDotFive';

class AngularOneDotFiveCtrl {
	constructor() {
	}
}

let config = {
	template: require('./angular-1.5.html'),
	controller: AngularOneDotFiveCtrl,
	//controllerAs: 'ctrl15',
	bindings: {}
};

angular.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, config);

export default MODULE_NAME;
  