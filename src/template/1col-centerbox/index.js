'use strict';
var tplName = 'mi-angular-wbc-pack/template/1col-centerbox.html';
module.exports = angular.module(tplName, [])
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put(tplName,
      '<aside class="cs-1 col-main-full">' +
      '<div class="box-outer">' +
      '<div class="box-inner">' +
      '<div class="box-content">' +
      '<div class="row">' +
      '<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">' +
      '<div class="fill" ui-view="content"></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</aside>'
    );
  }])
;
