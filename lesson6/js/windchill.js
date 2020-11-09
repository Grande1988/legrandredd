/*Input: A Wind Speed and a Temperature
        *Processing: A function will take de input and use it to calculate
        *the Wind Chill with the provided formula.
        *Output: The Wind Chill Temperature.
        */
       var tempF= parseFloat(document.getElementById("currentHigh").textContent);
       var speed= parseFloat(document.getElementById("wind").textContent);
       // console.log(tempF);
       // console.log(speed);
   
       if (tempF <= 50 && speed > 3.0){
           let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 *tempF * Math.pow(speed, 0.16);
           let feeling= Math.round(f * 100) / 100;
           document.getElementById("windChill").innerText = feeling;
       }else{
           document.getElementById("windChill").innerText = "N/A";
       }     