'use strict';

/**
 * @ngInject
 */

require('ng-lodash');

module.exports = angular
  .module('mi.WbcPack.MessagingView', ['mi-angular-wbc-pack/template/messaging-view.html', 'ngLodash'])

  // controller ////////////////////////////////////////////////////////////////////////////////////////////////////////
  .controller('MiMessagingViewController', ['$scope', '$timeout', '$interval', function ($scope, $timeout, $interval) {
    var vm = this;

    vm.messages = $scope.messages;
    vm.username = $scope.username;
    vm.gdprIsactive = $scope.gdprIsactive;
    vm.gdprData = $scope.gdprData;
    vm.inputPlaceholderText = $scope.inputPlaceholderText;
    vm.submitButtonText = $scope.submitButtonText;
    vm.title = $scope.title;
    vm.message = '';
    vm.gdprAgreement = false;
    vm.theme = angular.fromJson($scope.theme);
    vm.sendDisabled = false;
    vm.sendDisabledTimer = 10;
    vm.submitCall = submitCall;

    function toggleDisabled() {
      vm.sendDisabled = true;
      var int = $interval(function() {
        vm.sendDisabledTimer--;

        if (vm.sendDisabledTimer === 0) {
          $interval.cancel(int);
          vm.sendDisabledTimer = 10;
          vm.sendDisabled = false;
        }
      }, 1000);
    }

    function submitCall() {
      $scope.submitCallback()(vm.message, vm.username, vm.gdprAgreement);
      vm.message = '';
      scrollToBottom();
      toggleDisabled();
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
        gdprIsactive: '=',
        gdprData: '=',
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
