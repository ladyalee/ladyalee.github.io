var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);        
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;

for (var i = 0; i < townData.towns.length; i++) {

    if (i=== 0 || i === 2 || i === 3 || i=== 6 ) {
        continue;
    }
      var article = document.createElement('article');
      
      var h1 = document.createElement('h1');
      h1.textContent = townData.towns[i].name;
      
      var h2 = document.createElement('h2')
      h2.textContent = townData.towns[i].motto; 

      var h3 = document.createElement('h3')
      h3.textContent = "Year Founded: " + townData.towns[i].yearFounded; 
      
      var population = document.createElement('h3')
      population.textContent = "Population: " + townData.towns[i].currentPopulation; 
      
      var rainfall = document.createElement('h3')
      rainfall.textContent = "Rainfall: " + townData.towns[i].averageRainfall;
    

     var img = document.createElement("img");
     if (townData.towns[i].name === "Preston") {
        img.setAttribute("src","images/Preston.jpg");
     } else if (townData.towns[i].name === "Soda Springs") {
         img.setAttribute("src", "images/Sodasprings.jpg");
     } else if (townData.towns[i].name === "Fish Haven") {
        img.setAttribute("src", "images/FishHaven.jpg");
     }

      article.appendChild(h1);
      article.appendChild(h2);
      article.appendChild(h3);
      article.appendChild(population);
      article.appendChild(rainfall);
      article.appendChild(img);
      
      document.getElementById("townInfo").appendChild(article);
  }
}

//document.getElementById("townName1").innerHTML = townData.towns[0].name;
//document.getElementById("townMotto1").innerHTML = townData.towns[0].motto;
