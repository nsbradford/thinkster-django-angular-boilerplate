/**
* NewPostController
* @namespace thinkster.posts.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.posts.controllers')
    .controller('NewPostController', NewPostController);

  NewPostController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Posts'];

  /**
  * @namespace NewPostController
  */
  function NewPostController($rootScope, $scope, Authentication, Snackbar, Posts) {
    var vm = this;

    vm.submit = submit;

    /**
    * TODO: This is a trick to the post creation appear instant, by repopulating the list
    * with the new post immediately. However, in some cases the request to the server
    * might actually fail, leading to an error, or a user thinking a post was created
    * when it really wasn't. It also makes the code a little more complex and harder
    * to understand. For these reasons, this should be removed in final production.
    * @name submit
    * @desc Create a new Post
    * @memberOf thinkster.posts.controllers.NewPostController
    */
    function submit() {
      $rootScope.$broadcast('post.created', {
        content: vm.content,
        author: {
          username: Authentication.getAuthenticatedAccount().username
        }
      });

      $scope.closeThisDialog();// ngDialog: closes the post-creation dialog
      Posts.create(vm.content).then(createPostSuccessFn, createPostErrorFn);


      /**
      * @name createPostSuccessFn
      * @desc Show snackbar with success message
      */
      function createPostSuccessFn(data, status, headers, config) {
        Snackbar.show('Success! Post created.');
      }


      /**
      * @name createPostErrorFn
      * @desc Propogate error event and show snackbar with error message
      */
      function createPostErrorFn(data, status, headers, config) {
        $rootScope.$broadcast('post.created.error');
        Snackbar.error(data.error);
      }
    }
  }
})();