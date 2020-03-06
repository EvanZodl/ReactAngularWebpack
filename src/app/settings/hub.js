import angular from 'angular';
import { settingsProfileModule } from './profile/hub';

export const settingsModule = angular.module('ngp.settings', [settingsProfileModule]).name;
