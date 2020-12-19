const url = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';
fetch(url)
.then((response) => response.json())
.then((cozumel) => {
  console.log(cozumel);
  
document.getElementById('current-temp').textContent = Math.round(cozumel.main.temp);
document.getElementById('hi').textContent = Math.round(cozumel.main.temp_max);
document.getElementById('humidity').textContent = cozumel.main.humidity;
document.getElementById('windspeed').textContent = Math.round(cozumel.wind.speed);
document.getElementById('conditions').textContent = cozumel.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(cozumel.main.feels_like);

//Get today's icon
const imgsrc = 'https://openweathermap.org/img/w/' + cozumel.weather[0].icon + '.png';
    const des = cozumel.weather[0].description;
    document.getElementById('source').setAttribute = imgsrc;
    document.getElementById('icon').setAttribute('src', imgsrc);
    document.getElementById('icon').setAttribute('alt', des);


});






//Fetch JSON weather data from openweathermap
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&units=imperial&APPID=abe726d4fa97f7d629527a984b3b6ae0';

fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

  const fiveDayForecast = forecast.list.filter(x => x.dt_txt.includes('12:00:00'));
  console.log(fiveDayForecast);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = 0;
  fiveDayForecast.forEach(cast => {
    let d = new Date(cast.dt_txt);
    document.getElementById('current-temp' + (day + 1)).textContent = Math.round(cast.main.temp);
    document.getElementById('day' + (day + 1)).textContent = weekDays[d.getDay()] + "'s";
    document.getElementById('hi' + (day + 1)).textContent = Math.round(cast.main.temp_max);
    document.getElementById('lo' + (day + 1)).textContent = Math.round(cast.main.temp_min);
    document.getElementById('feelsLike' + (day + 1)).textContent = Math.round(cast.main.feels_like);
    document.getElementById('conditions' + (day + 1)).textContent = cast.weather[0].main;
    document.getElementById('humidity' + (day + 1)).textContent = cast.main.humidity;
    document.getElementById('windspeed' + (day + 1)).textContent = Math.round(cast.wind.speed);
    //Get icon
    const imagesrc = 'https://openweathermap.org/img/w/' + cast.weather[0].icon + '.png';
    const desc = cast.weather[0].description;
    document.getElementById('imagesrc' + (day + 1)).setAttribute = imagesrc;
    document.getElementById('icon' + (day + 1)).setAttribute('src', imagesrc);
    document.getElementById('icon' + (day + 1)).setAttribute('alt', desc);

    day++;
    
  });

  });
