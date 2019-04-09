var requestURL = "json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var templeInfo = request.response;

var closuresUL = document.createElement("ul");
var closuresLI;

for (var i = 0; i < templeInfo[0].closures.length; i++) {
    closuresLI = document.createElement("li");
    closuresLI.innerHTML = templeInfo[0].closures[i].start + " to " + templeInfo[0].closures[i].end;
    closuresUL.appendChild(closuresLI);
}

document.getElementById("templeClosures1").appendChild(closuresUL);
}

var requestURL = "json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var templeInfo = request.response;

var closuresUL = document.createElement("ul");
var closuresLI;

for (var i = 0; i < templeInfo[1].closures.length; i++) {
    closuresLI = document.createElement("li");
    closuresLI.innerHTML = templeInfo[1].closures[i].start + " to " + templeInfo[1].closures[i].end;
    closuresUL.appendChild(closuresLI);
}

document.getElementById("templeClosures2").appendChild(closuresUL);
}
