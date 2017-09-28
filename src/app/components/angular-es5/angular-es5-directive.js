(function (ng) {
	'use strict';

	ng.module ('angular-es5')
		.directive ('angularEsFive', AngularEsFiveDirective);

	AngularEsFiveDirective.$inject = ['$log'];

	function AngularEsFiveDirective($log) {

		var config = {
			link: _link,
			restrict: 'EA',
			template: _template(),
			controller: 'AngularEsFiveDirectiveCtrl',
			controllerAs: 'es5ctrl',
			scope: {}
			};
		
		return config;

		function _link(scope, element, attrs) {
		}

		function _template() {
			return '<div class="component"> \
				This is an example of \'components\' in AngularJS when they were still written as \'directives\'. \
				This example uses the older ES5 syntax and can be found in /src/app/components/angular-es5. \
				</div>';
		}
	}

})(angular);
