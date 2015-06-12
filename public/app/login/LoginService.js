(function(){
  'use strict';

var app = angular.module('fashionphile');

app.service('LoginService', function($q, $http){
  this.login = function(user){
    var dfd = $q.defer()
      $http({
        method: 'POST',
        url: '/api/users/auth',
        data: user
      })
      .then(function(res){
        dfd.resolve(res);
      }); 
    return dfd.promise; 
  }

});

})();//end