'use strict';

/**
 * @ngInject
 */
module.exports = angular
  .module('mi.WbcPack', [
    require('./template').name,
    require('./directive/messaging-view').name
  ])
  .component('miWbcControlbarElement', require('./component/controlbar-element'))
;
