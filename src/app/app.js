
import './app.scss';
import { MainModule } from './main/main';
import { ComponentsModule } from './components/components';

const APP_NAME = 'myapp';

angular.module(APP_NAME, [
	MainModule,
	ComponentsModule
]);

export default APP_NAME;
