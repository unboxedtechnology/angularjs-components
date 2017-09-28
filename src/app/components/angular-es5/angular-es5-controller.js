(function(ng){
	'use strict';

	ng.module('angular-es5')
		.controller('AngularEsFiveDirectiveCtrl', AngularEsFiveDirectiveCtrl)

	AngularEsFiveDirectiveCtrl.$inject = ['$log'];

	function AngularEsFiveDirectiveCtrl($log) {
		var vm = this;

		_initialize();

		function _initialize() {
		}

	}

})(angular);
