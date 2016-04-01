'use strict';
var tplName = 'mi/template/messaging-view.html';
angular.module(tplName, [])
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put(tplName,
      '<div class="mi-messaging">' +
      '<div class="messaging-header">' +
      '<h3>{{msgCtrl.title}}</h3>' +
      '</div>' +
      '<div class="messaging-message" ng-repeat="message in msgCtrl.messages" ng-class="{\'self-authored\': (msgCtrl.username == message.username)}">' +
      '<p>{{message.content}}</p>' +
      '<p>{{message.username}}</p>' +
      '</div>' +
      '<div class="messaging-footer">' +
      '<form ng-submit="msgCtrl.submitCall()">' +
      '<input type="text" class="messaging-input-field" placeholder="{{msgCtrl.inputPlaceholderText}}" ng-model="msgCtrl.message"/>' +
      '<input type="submit" class="messaging-submit-button" value="{{msgCtrl.submitButtonText}}"/>' +
      '</form>' +
      '</div>' +
      '</div>'
    );
  }])
;
