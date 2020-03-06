import angular from 'angular'
import htmlTemplate from './avatar.tpl.html'

export const avatar = angular.module('componentsModule', []).directive('avatar', function() {
  return {
    scope: {
      name: '@'
    },
    template: htmlTemplate,
    controller: function() {
    },
  }
}).name;
