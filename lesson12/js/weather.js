const Currentday = new Date();

const today = Currentday.getDay();

let forecastDayNumber = today;

const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';


const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&units=imperial&APPID=41d280b70e29802945dee986f145da33'

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

    let iconcode = weatherInfo.current.weather[0].icon;

    let iconPath = '//openweathermap.org/img/w/' + iconcode + '.png';

    let theIcon = document.createElement('img');

    theIcon.src = iconPath;

    document.getElementById('weather').innerHTML = weatherInfo.current.weather[0].description;

    document.getElementById('humidity').innerHTML = Math.round(weatherInfo.current.humidity);

    document.getElementById('temp').innerHTML = Math.round(weatherInfo.current.temp);

    document.getElementById('feels').innerHTML = Math.round(weatherInfo.current.feels_like);

    let theWeather = document.createElement('div');
    theWeather.appendChild(theIcon);

    document.getElementById('icon').appendChild(theWeather);

    console.log(weatherInfo.daily[forecastDayNumber]);

    console.log(weatherInfo)

    // |---------------- 3-Day Forecast ------------------|

    for (i = 0; i < 3; i++) {

      forecastDayNumber += 1
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }

      let theDayName = document.createElement('h2');
      theDayName.textContent = weekday[forecastDayNumber];

      console.log(theDayName);

      let theTemp = document.createElement('p');
      theTemp.textContent = Math.round(weatherInfo.daily[i].temp.day) + '\xB0 F';

      let theHum = document.createElement('p');
      theHum.textContent = 'Humidity: ' + weatherInfo.daily[i].humidity + '%';

      let iconcode = weatherInfo.daily[i].weather[0].icon;

      let iconPath = '//openweathermap.org/img/w/' + iconcode + '.png';
  
      let theIcon = document.createElement('img');
  
      theIcon.src = iconPath;

      let theDay = document.createElement('span');
      theDay.appendChild(theDayName);
      theDay.appendChild(theTemp);
      theDay.appendChild(theIcon);

      document.getElementById('forecast').appendChild(theDay);
    }

  });