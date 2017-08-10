/**
* Posts
* @namespace thinkster.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('posts', posts);

  /**
  * @namespace Posts
  */
  function posts() {
    /**
    * @name directive
    * @desc the directive to be returned
    * @memberOf thinkster.posts.directives.Posts
    */
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restrict: 'E',
      scrope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive;
  }
})();
