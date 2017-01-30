'use strict';

(function () {

  angular.module('app')
    .service('postsService', function () {
      this.posts = [];
      this.singlePost = {};

      this.getPosts = function ($http) {
        return $http.get('/classifieds');
      }

      this.getPost = function ($http, id) {
        return $http.get(`/classifieds/${id}`);
      }

      this.addPost = function ($http, newPost) {
        newPost.id = this.posts.length + 1;
        return $http.post('/classifieds', newPost);
      }

      this.editPost = function ($http, editedPost) {
        return $http.patch(`/classifieds/${editedPost.id}`, editedPost);
      }

      this.deletePost = function ($http, id) {
        return $http.delete(`/classifieds/${id}`);
      }
    });
}());
