'use strict';
/**
 * @ngInject
 */
module.exports = angular.module('mi.WbcPack.controlbar', [])
  // .controller('MiWbcControlbarController', require('./controller'))
  .directive('miWbcControlbar', require('./directive'))
;