var requestURL = "json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var closures = request.response;

console.log(closures);
return;

document.getElementById("closures")  
 


}

