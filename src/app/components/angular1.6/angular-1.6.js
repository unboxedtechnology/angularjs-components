
import angular from 'angular';
import config  from './angular-1.6-config';
import './angular-1.6.scss';

const MODULE_NAME 	 = 'angular-1.5';
const COMPONENT_NAME = 'angularOneDotFive';

angular.module(MODULE_NAME, [])
	.component(COMPONENT_NAME, config);

export default MODULE_NAME;
