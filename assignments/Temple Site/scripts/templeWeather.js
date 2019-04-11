var dallasWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=75230,us&appid=93935a5a252e185f91c54e43c8554d32&units=imperial';
var dallasRequest = new XMLHttpRequest();

dallasRequest.open('GET', dallasWeather, true);
dallasRequest.responseType = 'json';
dallasRequest.send();

dallasRequest.onload = function (){
    var dallasData = dallasRequest.response;

console.log(dallasData);
document.getElementById("current-temp1").innerHTML = dallasData.main.temp;
}

var nashvilleWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=37069,us&appid=93935a5a252e185f91c54e43c8554d32&units=imperial';
var nashvilleRequest = new XMLHttpRequest();

nashvilleRequest.open('GET', nashvilleWeather, true);
nashvilleRequest.responseType = 'json';
nashvilleRequest.send();

nashvilleRequest.onload = function (){
    var nashvilleData = nashvilleRequest.response;

console.log(nashvilleData);
document.getElementById("current-temp2").innerHTML = nashvilleData.main.temp;
}

var mantiWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=84642,us&appid=93935a5a252e185f91c54e43c8554d32&units=imperial';
var mantiRequest = new XMLHttpRequest();

mantiRequest.open('GET', mantiWeather, true);
mantiRequest.responseType = 'json';
mantiRequest.send();

mantiRequest.onload = function (){
    var mantiData = mantiRequest.response;

console.log(mantiData);
document.getElementById("current-temp3").innerHTML = mantiData.main.temp;
}

var billingsWeather = 'https://api.openweathermap.org/data/2.5/weather?zip=59106,us&appid=93935a5a252e185f91c54e43c8554d32&units=imperial';
var billingsRequest = new XMLHttpRequest();

billingsRequest.open('GET', billingsWeather, true);
billingsRequest.responseType = 'json';
billingsRequest.send();

billingsRequest.onload = function (){
    var billingsData = billingsRequest.response;

document.getElementById("current-temp4").innerHTML = billingsData.main.temp;
}