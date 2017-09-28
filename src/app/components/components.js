
import angular   from 'angular';
// our components
import angular1  from './angular-es5/angular-es5';
import angular14 from './angular1.4/angular-1.4';
import angular15 from './angular1.5/angular-1.5';
import angular16 from './angular1.6/angular-1.6';

export const ComponentsModule = angular
	.module('app.components', [
		angular1,
		angular14,
		angular15,
		angular16
	])
	.name;
