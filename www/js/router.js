angular.module('authzero')

.config(function (AUTHZERO_CONFIG, $stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html',
		controller: 'HomeCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'components/login/login.html',
		controller: 'LoginCtrl'
	});

	authProvider.init({
		domain: AUTHZERO_CONFIG.DOMAIN,
		clientID: AUTHZERO_CONFIG.CLIENT_ID,
		loginState: 'login'
	});

	$urlRouterProvider.otherwise('/');

});