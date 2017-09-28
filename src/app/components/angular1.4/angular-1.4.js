
import angular from 'angular';
import './angular-1.4.scss';

const MODULE_NAME = 'angular-1.4';

let AngularOneDotFourDirective = () => {
	return {
		template: require('./angular-1.4.html'),
		controller: 'AngularOneDotFourDirectiveCtrl',
		controllerAs: 'vm',
		scope: {}
	}
};

class AngularOneDotFourDirectiveCtrl {
	constructor() {
	}
}

angular.module(MODULE_NAME, [])
	.directive('angularOneDotFour', AngularOneDotFourDirective)
	.controller('AngularOneDotFourDirectiveCtrl', AngularOneDotFourDirectiveCtrl);

export default MODULE_NAME;
