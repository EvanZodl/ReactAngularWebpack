import angular from 'angular';
import settingsProfileModule from './profile/hub';

const settingsModule = angular.module('ngp.settings', [settingsProfileModule]).name;

export default settingsModule;