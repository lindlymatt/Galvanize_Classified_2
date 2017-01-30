'use strict';

(function () {
  angular.module('app')
    .component('new', {
      templateUrl: '/js/new/new.template.html',
      controller: controller
    });

  controller.$inject = ['$state', '$stateParams', '$http', 'postsService'];

  function controller($state, $stateParams, $http, postsService) {
    const vm = this;

    vm.post = {};

    vm.createPost = function () {
      postsService.addPost($http, vm.post).then(result => {
        $state.go('home');
      });
    }
  }
}());
