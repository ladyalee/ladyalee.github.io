var apiWeatherString = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=93935a5a252e185f91c54e43c8554d32&units=imperial';

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


function dayName(day) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayName = weekday[day];
    return dayName;
}
var apiForecastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=93935a5a252e185f91c54e43c8554d32&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', apiForecastString, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function (){
    var tbody = document.querySelector("tbody");
    var forecastData = forecastRequest.response;
    var list = forecastData.list;
    var date = new Date();
    var day = date.getDay();


    for (var i=0; i<=list.length; i++) {
      // console.log(list[i].main.temp);
      if (list[i].dt_txt.includes("09:00:00")){
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");

          if (day== 7) {
              day = 0;
          }
          td1.textContent=dayName(day);
          day++;
          td2.textContent=list[i].weather[0].description;
          td3.textContent=list[i].main.temp_max + "\xB0f/" + list[i].main.temp_min +"\xB0f";
          td4.textContent=list[i].wind.speed + "mph";
          td5.textContent=list[i].main.humidity + "%";

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          tbody.appendChild(tr);
        //console.log(list[i].weather[0].description);
        console.log(list[i]);
      }
    }
console.log(forecastData.list);

//document.getElementById("temp1").innerHTML = forecastData.list.main.temp_max;
}