const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var city = document.getElementById("cityName").innerText;
var section = document.getElementsByClassName("events");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const selTowns = []
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs"
        || towns[i].name == "Fish Haven" ){
        selTowns.push(towns[i]);
        }
    }

    for(i = 0; i < selTowns.length; i++) {
        if(selTowns[i].name == city){
            selTowns[i].events.forEach(showEvents);
            
            function showEvents(item){
                var event = document.createElement("p");
                event.textContent = item;
                // event.appendChild(item);
                document.querySelector("section.events").appendChild(event);
            }
        }
    }
    
  })
