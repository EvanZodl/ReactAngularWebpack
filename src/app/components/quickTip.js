import angular from 'angular'

export const quickTip = angular.module('component', []).directive('quickTip', function() {
  return {
    scope: {},
    template: '<div> Template </div>',
    controller: function() {
    },
  }
}).name;
