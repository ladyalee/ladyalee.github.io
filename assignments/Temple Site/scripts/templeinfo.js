var requestURL = "json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var templeInfo = request.response;

var closuresUL1 = document.createElement("ul");
var closuresLI1;

for (var i = 0; i < templeInfo[0].closures.length; i++) {
    closuresLI1 = document.createElement("li");
    closuresLI1.innerHTML = templeInfo[0].closures[i].start + " to " + templeInfo[0].closures[i].end;
    closuresUL1.appendChild(closuresLI1);
}
document.getElementById("templeClosures1").appendChild(closuresUL1);

var closuresUL2 = document.createElement("ul");
var closuresLI2;

  for (var i = 0; i < templeInfo[1].closures.length; i++) {
      closuresLI2 = document.createElement("li");
      closuresLI2.innerHTML = templeInfo[1].closures[i].start + " to " + templeInfo[1].closures[i].end;
      closuresUL2.appendChild(closuresLI2);
  }
  document.getElementById("templeClosures2").appendChild(closuresUL2);
 
  var closuresUL3 = document.createElement("ul");
  var closuresLI3;
  
  for (var i = 0; i < templeInfo[2].closures.length; i++) {
      closuresLI3 = document.createElement("li");
      closuresLI3.innerHTML = templeInfo[2].closures[i].start + " to " + templeInfo[2].closures[i].end;
      closuresUL3.appendChild(closuresLI3);
  }
  document.getElementById("templeClosures3").appendChild(closuresUL3);

var closuresUL4 = document.createElement("ul");
var closuresLI4;

for (var i = 0; i < templeInfo[3].closures.length; i++) {
    closuresLI4 = document.createElement("li");
    closuresLI4.innerHTML = templeInfo[3].closures[i].start + " to " + templeInfo[3].closures[i].end;
    closuresUL4.appendChild(closuresLI4);
}
document.getElementById("templeClosures4").appendChild(closuresUL4);
}
