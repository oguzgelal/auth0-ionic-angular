angular.module('authzero', [
  'ionic',
  'auth0',
  'angular-storage',
  'angular-jwt'
  ])

.run(function($rootScope, $ionicPlatform, auth, store, jwtHelper, $location) {
  $ionicPlatform.ready(function(){
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar){
      StatusBar.styleDefault();
    }
  });

  auth.hookEvents();

  //This event gets triggered on URL change
  var refreshingToken = null;

  $rootScope.$on('$locationChangeStart', function(){
    var token = store.get('token');
    var refreshToken = store.get('refreshToken');
    
    if (token){
      if (!jwtHelper.isTokenExpired(token)){
        if (!auth.isAuthenticated){
          auth.authenticate(store.get('profile'), token);
        }
      }
      else {
        if (refreshToken){
          if (refreshingToken === null){
            refreshingToken = auth.refreshIdToken(refreshToken).then(function(idToken){
              store.set('token', idToken);
              auth.authenticate(store.get('profile'), idToken);
            }).finally(function(){ refreshingToken = null; });
          }
          return refreshingToken;
        }
        else{ $location.path('/login'); }
      }
    }
  });

});
