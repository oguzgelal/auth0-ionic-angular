angular.module('authzero')

.controller('HomeCtrl', function($scope, $state, auth, store){
	
	$scope.login = function(){
		$state.go("login");
	};
	
	$scope.logout = function(){
		auth.signout();
		store.remove('profile');
		store.remove('token');
		store.remove('accessToken');
		store.remove('refreshToken');
	};

	$scope.profile = function(){ return store.get('profile'); }

});
