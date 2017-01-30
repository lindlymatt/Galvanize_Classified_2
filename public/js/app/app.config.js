'use strict';

(function () {
  angular
    .module("app")
    .config(config)

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state({
        name: "navbar",
        abstract: true,
        component: "app"
      }),
      .state({
        name: "footer",
        abstract: true,
        component: "app"
      })
  }
}());
