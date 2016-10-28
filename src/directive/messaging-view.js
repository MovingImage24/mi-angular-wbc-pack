'use strict';

/**
 * @ngInject
 */

require('ng-lodash');

module.exports = angular
  .module('mi.WbcPack.MessagingView', ['mi-angular-wbc-pack/template/messaging-view.html', 'ngLodash'])

  // controller ////////////////////////////////////////////////////////////////////////////////////////////////////////
  .controller('MiMessagingViewController', ['$scope', '$timeout', function ($scope, $timeout) {
    var vm = this;

    vm.messages = $scope.messages;
    vm.username = $scope.username;
    vm.inputPlaceholderText = $scope.inputPlaceholderText;
    vm.submitButtonText = $scope.submitButtonText;
    vm.title = $scope.title;
    vm.message = '';

    vm.submitCall = submitCall;

    function submitCall() {
      $scope.submitCallback()(vm.message, vm.username);
      vm.message = '';
      scrollToBottom();
    }

    $scope.$watch('msgCtrl.messages', function () {
      scrollToBottom();
      if (angular.isDefined($scope.$messagingInput) && angular.isElement($scope.$messagingInput)) {
        $timeout(function () {
          $scope.$messagingInput.focus();
        }, 200);
      }
    });
    $scope.$watch('msgCtrl.messages.length', function () {
      if (!$scope.historyLoading) {
        scrollToBottom();
      }
    });

    function scrollToBottom() {
      $timeout(function () {
        $scope.$msgContainer[0].scrollTop = $scope.$msgContainer[0].scrollHeight;
      }, 200, false);
    }

  }])

  // directive /////////////////////////////////////////////////////////////////////////////////////////////////////////
  .directive('miWbcMessagingView', ['$timeout', 'lodash', function ($timeout, _) {
    return {
      restrict: 'E',
      replace: true,
      controller: 'MiMessagingViewController',
      controllerAs: 'msgCtrl',
      templateUrl: function (element, attrs) {
        return attrs.templateUrl || 'mi-angular-wbc-pack/template/messaging-view.html';
      },
      scope: {
        messages: '=',
        username: '=',
        title: '@',
        inputPlaceholderText: '@',
        submitButtonText: '@',
        theme: '@',
        submitCallback: '&'
      },
      link: function (scope, element) {
        // header
        if (!scope.title) {
          scope.title = 'Messaging';
        }
        // input
        if (!scope.inputPlaceholderText) {
          scope.inputPlaceholderText = '... your message ...';
        }
        if (!scope.submitButtonText) {
          scope.submitButtonText = 'Send';
        }

        scope.$msgContainer = angular.element(element[0].querySelector('.messaging-body'));
        scope.$messagingInput = element[0].querySelector('.messaging-input-field');

        var elWindow = scope.$msgContainer[0];
        scope.$msgContainer.bind('scroll', _.throttle(function () {
          var scrollHeight = elWindow.scrollHeight;
          if (elWindow.scrollTop <= 10) {
            scope.historyLoading = true;
            scope.$apply(scope.infiniteScroll);
            $timeout(function () {
              scope.historyLoading = false;
              if (scrollHeight !== elWindow.scrollHeight) {
                scope.$msgContainer[0].scrollTop = 360;
              }
            }, 150);
          }
        }, 300));
      }
    };
  }])
;
