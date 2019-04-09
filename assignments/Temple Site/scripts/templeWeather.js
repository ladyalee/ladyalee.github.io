var currentWeather = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=93935a5a252e185f91c54e43c8554d32&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', currentWeather, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function (){
    var weatherData = weatherRequest.response;

console.log(weatherData);

document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}