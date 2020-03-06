import angular from 'angular'
import './styles.less'
import settingsModule from './settings/hub';

const ngp = angular.module('ngp', [settingsModule])

ngp.controller('appController', [
  '$scope',

  function($scope) {
    $scope.title = 'Hello Angular'
  },
])
