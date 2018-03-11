'use strict';

var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider
      .otherwise('/');
	$stateProvider
		.state('profile', {
			url: "/profile",
			templateUrl: "profile.html"
		})
		.state('repositories', {
			url: "/repositories",
			views: {
				"" 	:    { templateUrl: "repositories.html" },
			}
		})
	}]);
App.config(["$locationProvider", function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);
