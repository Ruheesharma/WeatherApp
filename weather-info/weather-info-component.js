angular.module("weatherInfoModule").component("weatherInfo",{
       templateUrl : 'weather-info/weather-info-template.html',
       /*weatherApp.controller('WeatherInfoController', ['$scope','$rootScope','WeatherFactory', function($scope,$rootScope,weatherFactory) {*/
      controller: function WeatherInfoController($scope,$rootScope,weatherFactory) {
	 $scope.weatherItems= [];
	 $scope.addCity = function(city) {
		var cityToBeAdded  = $scope.newCity;
		console.log(cityToBeAdded);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityToBeAdded +'&APPID=5a0af17737ef3a31b1852dc5c9ab00dd';	
		console.log("URL :" + url);

		weatherFactory.fetchDetails(url,function(response){
		console.log(response);
		var weatherItem={
		"city": response.name,
		"temp" : response.main.temp,
		"temp_max" : response.temp_max,
		"temp_min" : response.temp_min,
		"humidity" : response.humidity,
		"description" : response.weather[0].description,
		"status" : response.weather[0].main
		};
		$scope.weatherItems.push(weatherItem);
		$scope.newCity = " ";
	 });/*function(errorData) {
				console.log("Error Occured");
		});*/

};
$scope.showDetail = function(weatherItem) {
		$rootScope.$broadcast('city_detail', weatherItem);
	};

}
});