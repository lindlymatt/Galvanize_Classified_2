'use strict';

(function () {
  angular.module('app')
    .component('home', {
      templateUrl: '/js/home/home.template.html',
      controller: controller
    });

  controller.$inject = ['$state', '$stateParams', '$http', 'postsService'];

  function controller($state, $stateParams, $http, postsService) {
    const vm = this;

    vm.posts = [];
    vm.$onInit = function () {
      postsService.getPosts($http).then(success => {
        vm.posts = success.data;
      });
    }
  }
}());
