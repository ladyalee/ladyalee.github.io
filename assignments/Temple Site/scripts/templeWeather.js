var dallasWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=75230,us&appid=93935a5a252e185f91c54e43c8554d32&units=imperial';
var dallasRequest = new XMLHttpRequest();

dallasRequest.open('GET', dallasWeather, true);
dallasRequest.responseType = 'json';
dallasRequest.send();

dallasRequest.onload = function (){
    var dallasData = dallasRequest.response;

console.log(dallasData);

}