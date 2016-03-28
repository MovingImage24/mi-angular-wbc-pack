'use strict';
/**
 * @ngInject
 */
module.exports = function () {
  return {
    restrict: 'EA', //E = element, A = attribute, C = class, M = comment
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      itemsHead: '=controlbarItemsHead',  // ToDo umbennen
      itemsLeft: '=controlbarItemsLeft',  // ToDo umbennen
      itemsRight: '=controlbarItemsRight'  // ToDo umbennen
    },
    templateUrl: './views/mi-directive/controlbar.html',  // ToDo anders!!
    replace: true
  };
};