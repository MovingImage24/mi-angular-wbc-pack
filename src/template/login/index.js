'use strict';
var tplName = 'mi-angular-wbc-pack/template/login.html';
module.exports = angular.module(tplName, [])
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put(tplName,
      '<form class="form" id="formLogin" name="formLogin" novalidate>' +
      '<h3 translate="security.form.login.header"></h3>' +
      '<p translate="security.form.login.msg"></p>' +
      '<div class="form-group" ng-class="{\'has-error\':formLogin.email.$invalid && !formLogin.email.$pristine }">' +
      '<input type="email" name="email" class="form-control" placeholder="{{\'security.form.email.placeholder\'|translate}}" ng-model="loginVm.loginData.email" autofocus required>' +
      '</div>' +
      '<div class="form-group" ng-class="{\'has-error\':formLogin.password.$invalid && !formLogin.password.$pristine }">' +
      '<input type="password" name="password" class="form-control" placeholder="{{\'security.form.password.placeholder\'|translate}}" ng-model="loginVm.loginData.password" required>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-xs-12">' +
      '<button ng-click="loginVm.login()" ng-disabled="formLogin.$invalid" translate="security.form.btn.login.label" class="btn btn-block btn-primary"></button>' +
      '</div>' +
      '</div>' +
      '</form>'
    );
  }])
;
