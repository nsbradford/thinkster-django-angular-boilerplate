/**
* Project
* @namespace thinkster.projects.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.projects.directives')
    .directive('project', project);

  /**
  * @namespace Project
  */
  function project() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.projects.directives.Project
    */
    var directive = {
      restrict: 'E',
      scope: {
        project: '='
      },
      templateUrl: '/static/templates/projects/project.html'
    };

    return directive;
  }
})();