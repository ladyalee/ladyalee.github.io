var temp = 32;
var windSpeed = 14;
var windChill = 35.74 + 0.6215 * temp - 
    35.75 * Math.pow(windSpeed, 0.16) + 
    0.4275 * temp * Math.pow(windSpeed, 0.16);

    document.getElementById("temp").innerHTML = temp + '&deg;';
    document.getElementById("windSpeed").innerHTML = windSpeed + "mph";
    document.getElementById("windChill").innerHTML = windChill.toFixed(0) + '&deg;';