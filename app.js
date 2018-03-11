'use strict';

var App = angular.module('routingDemoApp',['ui.router']);
			App.controller('MainCtrl', function($http){
				var vm=this;
				vm.data=false;
				vm.fetchdata=function(user){
				vm.loading=true;
				$http.get('https://api.github.com/users/'+user.name).then(function(res)
					{
						vm.data=true;
						vm.data=res;
						vm.name=res.data.name;
						vm.id=res.data.id;
						vm.login=res.data.login;
						vm.url=res.data.url;
						vm.pr=res.data.public_repos;
						vm.followers=res.data.followers;
						vm.following=res.data.following;
						vm.loading.false;
					}) 
					}
				}) 
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