//TO GET CURRENT WEATHER
//const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=f231a64fe0bf673894728e2e53615a71";
//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
//	currently weather
	document.getElementById("currentWeather").innerHTML = weatherInfo.weather[0].main;
//	temperature
	document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp_max.toFixed(1) + " ºF";
//	humidity
	document.getElementById("humidity").innerHTML = weatherInfo.main.humidity + "%";
//	wind speed
	document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed.toFixed(1) + " mph";
//	wind chill
	var t = parseFloat(document.getElementById("currentTemp").innerHTML);
     var s = parseFloat(document.getElementById("windSpeed").innerHTML);
     var wchill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 +  0.4275 * t * s ** 0.16;
        if (t < 51 && s > 3) {
            document.getElementById("windChill").innerHTML = wchill.toFixed(1) + " ºF";
        }
        else {
            document.getElementById("windChill").innerHTML = "N/A";
        }
	
 }); //end of "then" fat arrow function


 //TO GET FUTURE WEATHER - 5 DAYS 





 