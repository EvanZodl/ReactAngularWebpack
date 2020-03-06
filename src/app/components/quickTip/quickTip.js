import angular from 'angular'
import htmlTemplate from './quickTip.tpl.html'

export const quickTip = angular.module('componentsModule', []).directive('quickTip', function() {
  return {
    scope: {
      message: '@'
    },
    template: htmlTemplate,
    controller: function() {
    },
  }
}).name;
