const apiTodayURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=07d69392c2d3f3ab2bad848587618771"

fetch(apiTodayURL)
    .then((response) => response.json())
    .then((object) => {
        console.log(object);

    document.getElementById('currentWeather').textContent = object.weather[0].main;
    document.getElementById('tempHigh').textContent = object.main.temp_max;
    document.getElementById('humidity').textContent = object.main.humidity;
    document.getElementById('windSpeed').textContent = object.wind.speed;

    });

