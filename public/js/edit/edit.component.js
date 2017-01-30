'use strict';

(function () {
  angular.module('app')
    .component('edit', {
      templateUrl: '/js/edit/edit.template.html',
      controller: controller
    });

  controller.$inject = ['$state', '$stateParams', '$http', 'postsService'];

  function controller($state, $stateParams, $http, postsService) {
    const vm = this;

    vm.post = {};
    vm.$onInit = function () {
      const postId = $stateParams.postId;
      postsService.getPost($http, postId).then(result => {
        vm.post = result.data;
      });
    }

    vm.editPost = function () {
      vm.post.id = $stateParams.postId;
      postsService.editPost($http, vm.post).then(result => {
        $state.go('home');
      });
    }
  }
}());
