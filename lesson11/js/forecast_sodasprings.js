const day = new Date();

const todayDayNumber = day.getDay();

let forecastDayNumber = todayDayNumber;

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";

fetch(apiURL2)
	.then((response) => response.json())
	.then((weatherInfo) => {

		let mylist = weatherInfo.list;

		let forecastDayNumber = todayDayNumber;
	
				
		let townName = document.getElementById("townName").textContent = weatherInfo.city.name + ": Five Days Forecast";

		for (i = 0; i < mylist.length; i++) {

			let time = mylist[i].dt_txt;
			if (time.includes('18:00:00')) {
				
				forecastDayNumber += 1;
				if (forecastDayNumber === 7) {
					forecastDayNumber = 0;
				}
				
				let theDayName = document.createElement("span");
				theDayName.textContent = weekday[forecastDayNumber];

				let theTemp = document.createElement("p");
				theTemp.textContent = Math.round(weatherInfo.list[i].main.temp) + "\xB0 F";

				let iconcode = weatherInfo.list[i].weather[0].icon;
				let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
				let theIcon = document.createElement("img");
				
				theIcon.src = iconPath;

				let theDay = document.createElement("div");
				theDay.appendChild(theDayName);
				theDay.appendChild(theTemp);
				theDay.appendChild(theIcon);

				document.getElementById('weatherforecast').appendChild(theDay);
			
			} // end if
		} //end for

	}); //end of "then" fat arrow function
