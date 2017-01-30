'use strict';

(function () {
  angular.module('app')
    .component('home', {
      templateUrl: '/js/home/home.template.html',
      controller: controller
    });

  controller.$inject = ['$state', '$scope', '$stateParams', '$http', 'postsService'];

  function controller($state, $scope, $stateParams, $http, postsService) {
    const vm = this;

    vm.posts = [];
    vm.$onInit = function () {
      postsService.getPosts($http).then(success => {
        vm.posts = success.data;
      });
    }

    vm.deletePost = function (index) {
      postsService.deletePost($http, index).then(success => {
        postsService.getPosts($http).then(success => {
          vm.posts = success.data;
        });
      });
    }
  }
}());
