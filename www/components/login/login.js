angular.module('authzero')

.controller('LoginCtrl', function($scope, $state, auth, store){
	
	$scope.doLogin = function(){
		auth.signin({
			closable: false,
			container: 'lock-container',
			authParams: {
				scope: 'openid offline_access',
				device: 'Mobile device'
			}
		},
		function(profile, token, accessToken, state, refreshToken){
			store.set('profile', profile);
			store.set('token', token);
			store.set('accessToken', accessToken);
			store.set('refreshToken', refreshToken);
			$state.go("home");
		},
		function(){ console.log('Auth0 Error'); });
	}

	$scope.$on('$ionicView.enter', function() {
		$scope.doLogin();
	})

});
