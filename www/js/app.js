// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('piece', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "modules/menu/partial.html",
    controller: 'MenuController'
  })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "modules/home/partial.html",
          controller: 'HomeController'
        }
      }
    })
    .state('app.setting', {
      url: "/setting",
      views: {
        'menuContent': {
          templateUrl: "modules/setting/partial.html",
          controller: 'SettingController'
        }
      }
    })
    .state('app.store', {
      url: "/store",
      views: {
        'menuContent': {
          templateUrl: "modules/store/partial.html",
          controller: 'StoreController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});