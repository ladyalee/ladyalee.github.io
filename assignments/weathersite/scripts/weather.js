var apiWeatherString = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=93935a5a252e185f91c54e43c8554d32&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiWeatherString, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function (){
    var weatherData = weatherRequest.response;

//console.log(weatherData);

document.getElementById("temp").innerHTML = weatherData.main.temp;
document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;
document.getElementById("windChill").innerHTML = weatherData.wind.deg;
}

var apiForecastString = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=93935a5a252e185f91c54e43c8554d32&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiForecastString, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function (){
    var forecastData = forecastRequest.response;

console.log("hello");

//document.getElementById("temp1").innerHTML = forecastData.list.main.temp_max;
}