/************** CURRENT WEATHER DATA *******************/
//ADD the key and change units to imperial
const apiKey = "76906579f4efc58a128720f93bf9efd1";
const prestonID = "5604473";
const sodaID = "5607916"; 
const fishID = "5585010";
var cityId;

var city = document.getElementById("cityName").innerText;
if (city == "Preston"){
  cityId = prestonID;
} else if (city =="Soda Springs"){
    cityId = sodaID;
  } else if (city == "Fish Haven"){
      cityId = fishID;
    }

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Once it comes back, display it to the console.
    console.log(jsObject);
    
    document.getElementById("currentCondition").innerHTML=jsObject.weather[0].main;
    document.getElementById("currentHigh").innerHTML=jsObject.main.temp;
    document.getElementById("humidity").innerHTML=jsObject.main.humidity;
    document.getElementById("wind").innerHTML=jsObject.wind.speed;

    let tempF = jsObject.main.temp; //Temperature variable for the windchill
    let speed = jsObject.wind.speed; //Windspeed variable for the windchill

    // Windchill calculation and display:
    if (tempF <= 50 && speed > 3.0){
    let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 *tempF * Math.pow(speed, 0.16);
    let feeling= Math.round(f * 100) / 100;
    document.getElementById("windChill").innerText = feeling;
    }else{
    document.getElementById("windChill").innerText = "N/A";
    }     
 }); //end of "then" fat arrow function

