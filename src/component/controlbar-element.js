'use strict';

/**
 * @ngInject
 */

function MiControlbarElementController() {
}

var MiControlbarElement = {
    bindings: {
      item: '<'
    },
    controller: MiControlbarElementController,
    controllerAs: 'controlbarVm',
    template: [
      <!-- link with uiState -->
      '<a ng-if="controlbarVm.item.type==\'link\' && controlbarVm.item.uiState!==undefined" ' +
      'ui-state="controlbarVm.item.uiState" ' +
      'ui-state-params="controlbarVm.item.uiStateParams" ' +
      'ui-state-opts="controlbarVm.item.uiStateOpts" ' +
      'title="{{controlbarVm.item.title}}" ' +
      'ng-class="controlbarVm.item.class">',
      '<i ng-if="controlbarVm.item.icon!==undefined && controlbarVm.item.icon!==\'\'" ' +
      'class="fa fa-fw {{controlbarVm.item.icon}}"></i>',
      '<span class="title">{{controlbarVm.item.label}}</span>',
      '</a>',

      <!-- link with href -->
      '<a ng-if="controlbarVm.item.type==\'link\' && controlbarVm.item.href!==undefined" ' +
      'ng-href="{{controlbarVm.item.href}}" ' +
      'title="{{controlbarVm.item.title}}" ' +
      'target="{{controlbarVm.item.target!==undefined ? controlbarVm.item.target : \'_self\'}}" ' +
      'ng-class="controlbarVm.item.class">',
      '<i ng-if="controlbarVm.item.icon!==undefined && controlbarVm.item.icon!==\'\'" ' +
      'class="fa fa-fw {{controlbarVm.item.icon}}"></i>',
      '<span class="title">{{controlbarVm.item.label}}</span>',
      '</a>',

      <!-- link with click -->
      '<a ng-if="controlbarVm.item.type==\'link\' && controlbarVm.item.click!==undefined" ' +
      'ng-click="controlbarVm.item.click()" ' +
      'title="{{controlbarVm.item.title}}" ' +
      'ng-class="controlbarVm.item.class">',
      '<i ng-if="controlbarVm.item.icon!==undefined && controlbarVm.item.icon!==\'\'" ' +
      'class="fa fa-fw {{controlbarVm.item.icon}}"></i>',
      '<span class="title">{{controlbarVm.item.label}}</span>',
      '</a>',

      <!-- plain text -->
      '<span ng-if="controlbarVm.item.type==\'text\' || controlbarVm.item.type===undefined" ' +
      'class="title" ' +
      'title="{{controlbarVm.item.title}}">{{controlbarVm.item.label}}</span>',

      <!-- nav-tabs with uiState -->
      '<ul ng-if="controlbarVm.item.type==\'nav-tabs\'" class="nav nav-tabs">',
      '<li ng-if="controlbarVm.item.children.length > 0" ng-repeat="tab in controlbarVm.item.children" ' +
      'ng-class="{\'active\':(tab.uiState|isState)}">',
      '<a ng-if="tab.uiState!==undefined" ' +
      'ui-state="tab.uiState" ' +
      'ui-state-params="tab.uiStateParams" ' +
      'ui-state-opts="tab.uiStateOpts" ' +
      'title="{{tab.title}}" ng-class="tab.class">',
      '<i ng-if="tab.icon!==undefined && tab.icon!==\'\'" class="fa fa-fw {{tab.icon}}"></i>',
      '<span class="title">{{tab.label}}</span>',
      '</a>',
      '</li>',
      '</ul>'
    ].join('')
  }
  ;

module.exports = MiControlbarElement;