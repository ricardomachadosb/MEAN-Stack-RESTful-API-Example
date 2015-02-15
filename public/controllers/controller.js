var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope',
  '$http',
  function($scope, $http){

    var refresh = function(){
      $http.get('/contactlist').success(function(response){
        $scope.contactlist = response;
        $scope.contact = "";
      });
    }

    refresh();

    $scope.addContact = function(){
      $http.post('/contactlist', $scope.contact).success(function(res){
         refresh();
      });
    };

    $scope.remove = function(id){
      $http.delete('/contactlist/' + id).success(function(res){
        refresh();
      });
    };

    $scope.edit = function(id){
      $http.get('/contactlist/' + id).success(function(res){
        $scope.contact=res;
      });
    };

    $scope.update = function(){
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(res){
        refresh();
      });
    };

    $scope.deselect = function(){
      $scope.contact = "";
    }
  }]
);

