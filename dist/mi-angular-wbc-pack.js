/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @ngInject
	 */
	module.exports = angular
	  .module('mi.WbcPack', [])

	  .component('miWbcControlbarElement', __webpack_require__(1))
	;

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDhmNzAzYzkyMWRiMTA3OWQ5MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY29udHJvbGJhci1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBLDBCQUF5Qix3QkFBd0I7QUFDakQsOEJBQTZCLHlCQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLHdCQUF3QjtBQUMxQyxpQkFBZ0IseUJBQXlCO0FBQ3pDLGtCQUFpQiw2RUFBNkU7QUFDOUY7QUFDQTtBQUNBLDBCQUF5Qix3QkFBd0I7QUFDakQsOEJBQTZCLHlCQUF5QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQSwwQkFBeUIsd0JBQXdCO0FBQ2pELDhCQUE2Qix5QkFBeUI7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHlCQUF5QixJQUFJLHlCQUF5Qjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixXQUFXO0FBQzNCLDZFQUE0RSxVQUFVO0FBQ3RGLDhCQUE2QixXQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQyIsImZpbGUiOiJtaS1hbmd1bGFyLXdiYy1wYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0OGY3MDNjOTIxZGIxMDc5ZDkxN1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyXG4gIC5tb2R1bGUoJ21pLldiY1BhY2snLCBbXSlcblxuICAuY29tcG9uZW50KCdtaVdiY0NvbnRyb2xiYXJFbGVtZW50JywgcmVxdWlyZSgnLi9jb21wb25lbnQvY29udHJvbGJhci1lbGVtZW50JykpXG47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuXG5mdW5jdGlvbiBNaUNvbnRyb2xiYXJFbGVtZW50Q29udHJvbGxlcigpIHtcbn1cblxudmFyIE1pQ29udHJvbGJhckVsZW1lbnQgPSB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgIGl0ZW06ICc8J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTWlDb250cm9sYmFyRWxlbWVudENvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnY29udHJvbGJhclZtJyxcbiAgICB0ZW1wbGF0ZTogW1xuICAgICAgPCEtLSBsaW5rIHdpdGggdWlTdGF0ZSAtLT5cbiAgICAgICc8YSBuZy1pZj1cImNvbnRyb2xiYXJWbS5pdGVtLnR5cGU9PVxcJ2xpbmtcXCcgJiYgY29udHJvbGJhclZtLml0ZW0udWlTdGF0ZSE9PXVuZGVmaW5lZFwiICcgK1xuICAgICAgJ3VpLXN0YXRlPVwiY29udHJvbGJhclZtLml0ZW0udWlTdGF0ZVwiICcgK1xuICAgICAgJ3VpLXN0YXRlLXBhcmFtcz1cImNvbnRyb2xiYXJWbS5pdGVtLnVpU3RhdGVQYXJhbXNcIiAnICtcbiAgICAgICd1aS1zdGF0ZS1vcHRzPVwiY29udHJvbGJhclZtLml0ZW0udWlTdGF0ZU9wdHNcIiAnICtcbiAgICAgICd0aXRsZT1cInt7Y29udHJvbGJhclZtLml0ZW0udGl0bGV9fVwiICcgK1xuICAgICAgJ25nLWNsYXNzPVwiY29udHJvbGJhclZtLml0ZW0uY2xhc3NcIj4nLFxuICAgICAgJzxpIG5nLWlmPVwiY29udHJvbGJhclZtLml0ZW0uaWNvbiE9PXVuZGVmaW5lZCAmJiBjb250cm9sYmFyVm0uaXRlbS5pY29uIT09XFwnXFwnXCIgJyArXG4gICAgICAnY2xhc3M9XCJmYSBmYS1mdyB7e2NvbnRyb2xiYXJWbS5pdGVtLmljb259fVwiPjwvaT4nLFxuICAgICAgJzxzcGFuIGNsYXNzPVwidGl0bGVcIj57e2NvbnRyb2xiYXJWbS5pdGVtLmxhYmVsfX08L3NwYW4+JyxcbiAgICAgICc8L2E+JyxcblxuICAgICAgPCEtLSBsaW5rIHdpdGggaHJlZiAtLT5cbiAgICAgICc8YSBuZy1pZj1cImNvbnRyb2xiYXJWbS5pdGVtLnR5cGU9PVxcJ2xpbmtcXCcgJiYgY29udHJvbGJhclZtLml0ZW0uaHJlZiE9PXVuZGVmaW5lZFwiICcgK1xuICAgICAgJ25nLWhyZWY9XCJ7e2NvbnRyb2xiYXJWbS5pdGVtLmhyZWZ9fVwiICcgK1xuICAgICAgJ3RpdGxlPVwie3tjb250cm9sYmFyVm0uaXRlbS50aXRsZX19XCIgJyArXG4gICAgICAndGFyZ2V0PVwie3tjb250cm9sYmFyVm0uaXRlbS50YXJnZXQhPT11bmRlZmluZWQgPyBjb250cm9sYmFyVm0uaXRlbS50YXJnZXQgOiBcXCdfc2VsZlxcJ319XCIgJyArXG4gICAgICAnbmctY2xhc3M9XCJjb250cm9sYmFyVm0uaXRlbS5jbGFzc1wiPicsXG4gICAgICAnPGkgbmctaWY9XCJjb250cm9sYmFyVm0uaXRlbS5pY29uIT09dW5kZWZpbmVkICYmIGNvbnRyb2xiYXJWbS5pdGVtLmljb24hPT1cXCdcXCdcIiAnICtcbiAgICAgICdjbGFzcz1cImZhIGZhLWZ3IHt7Y29udHJvbGJhclZtLml0ZW0uaWNvbn19XCI+PC9pPicsXG4gICAgICAnPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPnt7Y29udHJvbGJhclZtLml0ZW0ubGFiZWx9fTwvc3Bhbj4nLFxuICAgICAgJzwvYT4nLFxuXG4gICAgICA8IS0tIGxpbmsgd2l0aCBjbGljayAtLT5cbiAgICAgICc8YSBuZy1pZj1cImNvbnRyb2xiYXJWbS5pdGVtLnR5cGU9PVxcJ2xpbmtcXCcgJiYgY29udHJvbGJhclZtLml0ZW0uY2xpY2shPT11bmRlZmluZWRcIiAnICtcbiAgICAgICduZy1jbGljaz1cImNvbnRyb2xiYXJWbS5pdGVtLmNsaWNrKClcIiAnICtcbiAgICAgICd0aXRsZT1cInt7Y29udHJvbGJhclZtLml0ZW0udGl0bGV9fVwiICcgK1xuICAgICAgJ25nLWNsYXNzPVwiY29udHJvbGJhclZtLml0ZW0uY2xhc3NcIj4nLFxuICAgICAgJzxpIG5nLWlmPVwiY29udHJvbGJhclZtLml0ZW0uaWNvbiE9PXVuZGVmaW5lZCAmJiBjb250cm9sYmFyVm0uaXRlbS5pY29uIT09XFwnXFwnXCIgJyArXG4gICAgICAnY2xhc3M9XCJmYSBmYS1mdyB7e2NvbnRyb2xiYXJWbS5pdGVtLmljb259fVwiPjwvaT4nLFxuICAgICAgJzxzcGFuIGNsYXNzPVwidGl0bGVcIj57e2NvbnRyb2xiYXJWbS5pdGVtLmxhYmVsfX08L3NwYW4+JyxcbiAgICAgICc8L2E+JyxcblxuICAgICAgPCEtLSBwbGFpbiB0ZXh0IC0tPlxuICAgICAgJzxzcGFuIG5nLWlmPVwiY29udHJvbGJhclZtLml0ZW0udHlwZT09XFwndGV4dFxcJyB8fCBjb250cm9sYmFyVm0uaXRlbS50eXBlPT09dW5kZWZpbmVkXCIgJyArXG4gICAgICAnY2xhc3M9XCJ0aXRsZVwiICcgK1xuICAgICAgJ3RpdGxlPVwie3tjb250cm9sYmFyVm0uaXRlbS50aXRsZX19XCI+e3tjb250cm9sYmFyVm0uaXRlbS5sYWJlbH19PC9zcGFuPicsXG5cbiAgICAgIDwhLS0gbmF2LXRhYnMgd2l0aCB1aVN0YXRlIC0tPlxuICAgICAgJzx1bCBuZy1pZj1cImNvbnRyb2xiYXJWbS5pdGVtLnR5cGU9PVxcJ25hdi10YWJzXFwnXCIgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj4nLFxuICAgICAgJzxsaSBuZy1pZj1cImNvbnRyb2xiYXJWbS5pdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDBcIiBuZy1yZXBlYXQ9XCJ0YWIgaW4gY29udHJvbGJhclZtLml0ZW0uY2hpbGRyZW5cIiAnICtcbiAgICAgICduZy1jbGFzcz1cIntcXCdhY3RpdmVcXCc6KHRhYi51aVN0YXRlfGlzU3RhdGUpfVwiPicsXG4gICAgICAnPGEgbmctaWY9XCJ0YWIudWlTdGF0ZSE9PXVuZGVmaW5lZFwiICcgK1xuICAgICAgJ3VpLXN0YXRlPVwidGFiLnVpU3RhdGVcIiAnICtcbiAgICAgICd1aS1zdGF0ZS1wYXJhbXM9XCJ0YWIudWlTdGF0ZVBhcmFtc1wiICcgK1xuICAgICAgJ3VpLXN0YXRlLW9wdHM9XCJ0YWIudWlTdGF0ZU9wdHNcIiAnICtcbiAgICAgICd0aXRsZT1cInt7dGFiLnRpdGxlfX1cIiBuZy1jbGFzcz1cInRhYi5jbGFzc1wiPicsXG4gICAgICAnPGkgbmctaWY9XCJ0YWIuaWNvbiE9PXVuZGVmaW5lZCAmJiB0YWIuaWNvbiE9PVxcJ1xcJ1wiIGNsYXNzPVwiZmEgZmEtZncge3t0YWIuaWNvbn19XCI+PC9pPicsXG4gICAgICAnPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPnt7dGFiLmxhYmVsfX08L3NwYW4+JyxcbiAgICAgICc8L2E+JyxcbiAgICAgICc8L2xpPicsXG4gICAgICAnPC91bD4nXG4gICAgXS5qb2luKCcnKVxuICB9XG4gIDtcblxubW9kdWxlLmV4cG9ydHMgPSBNaUNvbnRyb2xiYXJFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50L2NvbnRyb2xiYXItZWxlbWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=