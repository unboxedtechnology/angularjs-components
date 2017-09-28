
import angular from 'angular';
import ctrl from './angular-1.6-controller';
import './angular-1.6.scss';

const MODULE_NAME 	 = 'angular-1.6';
const COMPONENT_NAME = 'angularOneDotSix';


let config = {
	template: require('./angular-1.6.html'),
	controller: ctrl,
	bindings: {}
};

angular.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, config);

export default MODULE_NAME;
