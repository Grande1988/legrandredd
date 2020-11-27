const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("currently").innerHTML = jsObject.weather[0].main;
    document.getElementById("ht").innerHTML = jsObject.main.temp;
    document.getElementById("hum").innerHTML = jsObject.main.humidity;
    document.getElementById("ws").innerHTML = jsObject.wind.speed;


    const tempnumber = parseFloat(document.getElementById("ht").textContent);
//console.log(tempnumber);

const speedNumber = parseFloat(document.getElementById("ws").textContent);
//console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//console.log(windchill);

if (tempnumber <= 50 && speedNumber > 3) {
    document.getElementById("wc").textContent = windchill;
}
  else {
      document.getElementById("wc").textContent = "N/A";
  }
   //console.log(document.getElementById("wc"));

  });

