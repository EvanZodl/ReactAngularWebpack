import angular from 'angular'
import './styles.less'
import componentsModule from './components'
import { quickTip } from './components/quickTip';

const mainApp = angular.module('mainApp', [componentsModule, quickTip])

mainApp.controller('appController', [
  '$scope',

  function($scope) {
    $scope.title = 'Hello Angular'
  },
])
