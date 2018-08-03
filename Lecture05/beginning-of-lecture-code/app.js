(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Luciano";
  $scope.sayHello = function(){
    return "Hello Cousera!";
  };
});

})();
