'use strict';

/**
 * @ngInject
 */
module.exports = angular
  .module('mi.WbcPack', [
    require('./directive/messaging-view').name
  ])
  .component('miWbcControlbarElement', require('./component/controlbar-element'))
;
