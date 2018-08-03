(function (){

  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyfirstController', function($scope){
    $scope.name = "Luciano";
    $scope.sayHello = function(){
      return "Hello Cousera!";
    }
  });

})();
