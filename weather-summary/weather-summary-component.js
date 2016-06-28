angular.module("weatherSummaryModule").component("weatherSummary",{
       templateUrl : 'weather-summary/weather-summary-template.html',
       /* weatherApp.controller('WeatherSummaryController', ['$scope', function($scope) {*/
        controller : function WeatherSummaryController($scope) {
	$scope.$on('city_detail', function(event, data) {
		console.log(data);
		$scope.weatherSummary = data;
	});
}
});