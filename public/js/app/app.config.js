'use strict';

(function () {

  angular.module("app").config(config);
  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: "app",
        abstract: true,
        component: "app"
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'new',
        parent: 'app',
        url: '/new',
        component: 'new'
      })
      .state({
        name: 'edit',
        parent: 'app',
        url: '/{postId}/edit',
        component: 'edit'
      })
    // .state({
    //   name: 'single',
    //   parent: 'app',
    //   url: '/{postId}',
    //   component: 'single'
    // })
  }
}());
