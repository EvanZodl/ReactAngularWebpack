import angular from 'angular'
import { quickTip } from './quickTip/quickTip';

export const componentsModule = angular.module('mainApp.componentsModule', [quickTip]).name;
