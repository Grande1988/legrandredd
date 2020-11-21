const mydate = new Date();
const y = mydate.getDay();
let forcastdaynumber = y;



const myweekday = new Array(7);
myweekday[0] = 'Sunday';
myweekday[1] = 'Monday';
myweekday[2] = 'Tuesday';
myweekday[3] = 'Wednesday';
myweekday[4] = 'Thursday';
myweekday[5] = 'Friday';
myweekday[6] = 'Saturday';



const api = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

  fetch(api)
  .then((response) => response.json())
  .then((weatherobj) => {
     console.log(weatherobj);

     let mylist = weatherobj.list;
     

     for (let i = 0; i < mylist.length; i++) {

        let time = mylist[i].dt_txt;
        
        if (time.includes('18:00:00')) {
            forcastdaynumber += 1;
            if (forcastdaynumber == 7){
                forcastdaynumber = 0;
            }
            
            let forecastdiv = document.createElement('div');
            let h4 = document.createElement('h4');
            let iconimg = document.createElement('img');
            let weathericon = weatherobj.list[i].weather[0].icon;
            let weathericonpath = 'https://openweathermap.org/img/w/' + weathericon + '.png';
            let fivetemp = document.createElement('p');
            
        
            
        

            h4.textContent = myweekday[forcastdaynumber];
            iconimg.src = weathericonpath;
            fivetemp.textContent = weatherobj.list[i].main.temp + '\xB0';
            


            forecastdiv.appendChild(h4);
            forecastdiv.appendChild(iconimg);
            forecastdiv.appendChild(fivetemp);

            document.querySelector('section.fivedayforecast').appendChild(forecastdiv);

        }
        
     }
         
         
     
    
  });