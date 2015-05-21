(function(){
  'use strict';

  angular.module('demo', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.name = "Matt";
    $scope.instructors = [
      {name: "steve", allergies: "milk"},
      {name: "zoe", allergies: "peanuts"},
      {name: "zoe", allergies: "pollen"}
    ];
  }])
})();