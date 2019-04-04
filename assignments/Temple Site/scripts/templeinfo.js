var requestURL = "json/temples.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;

for (var i = 0; i < templeName.closures.length; i++) {

    if (i=== 0 || i === 2 || i === 3 || i=== 6 ) {
        continue;
    }
     
  }
}

