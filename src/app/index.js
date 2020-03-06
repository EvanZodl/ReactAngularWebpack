import angular from 'angular'
import './styles.less'
import { componentsModule } from './components/index'

const mainApp = angular.module('mainApp', [componentsModule])

mainApp.controller('appController', [
  '$scope',

  function($scope) {
    $scope.title = 'Hello Angular'
  },
])
