// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.filters', 'app.directives'])
.run(function($ionicPlatform, $ionicHistory) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'ContentController'
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'views/search.html',
      }
    }
  })
  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      }
    }
  })
  .state('app.mangaDetails', {
    url: '/mangaDetails',
    views: {
      'menuContent': {
        templateUrl: 'views/mangaDetails.html',
        controller: 'MangaDetailsController'
      }
    }
  })
  .state('app.chapterViewer', {
    url: '/chapterViewer',
    views: {
      'menuContent': {
        templateUrl: 'views/chapterViewer.html',
        controller : 'ChapterController'
      }
    }
  });
  // if no state is specified, go to this one
  $urlRouterProvider.otherwise('/app/browse');
});