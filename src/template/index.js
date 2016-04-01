'use strict';

/**
 * @ngInject
 */
module.exports = angular
  .module('mi.WbcPack.tpls', [
    require('./messaging-view').name,
    require('./1col-centerbox').name,
    require('./login').name
  ])
;
