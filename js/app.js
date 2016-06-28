"use strict";
var weatherApp = angular.module('weatherApp', ["weatherInfoModule","weatherSummaryModule"]);

/* Works Just the same
weatherApp.controller("WeatherListController", function($scope) {

});*/

weatherApp.factory('weatherFactory', ['$http', function($http){
	return {
		fetchDetails : function(url, callback){
			console.log(url);
          $http.get(url).success(function(data){
            callback(data);
          }).error(function(data)
          {
          	callback(data);
          });
		}
	}
}]);

