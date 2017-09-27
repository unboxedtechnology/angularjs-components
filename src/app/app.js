
import './app.scss';
import main from './main/main';
import angular14 from './components/angular1.4/angular-1.4';
import angular15 from './components/angular1.5/angular-1.5';
import angular16 from './components/angular1.6/angular-1.6';

const APP_NAME = 'myapp';

angular.module(APP_NAME, [
	main,
	angular14,
	angular15,
	angular16
]);

export default APP_NAME;
