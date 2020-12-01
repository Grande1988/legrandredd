const apiTodayURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cec0709cb1fd453037d20ba93d946a93"

fetch(apiTodayURL)
    .then((response) => response.json())
    .then((object) => {
        console.log(object);

    document.getElementById('currentWeather').textContent = object.weather[0].main;
    document.getElementById('tempHigh').textContent = object.main.temp_max;
    document.getElementById('humidity').textContent = object.main.humidity;
    document.getElementById('windSpeed').textContent = object.wind.speed;

    });

