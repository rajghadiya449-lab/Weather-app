function getWea() {
    const apiKey = 'd6773388bc3649e0892c6a8f157921f7';
    const city = document.getElementById('city').value;
    
    const apiUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&location=${city}`;
    
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data1 => {
        
        displaysun(data1);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function getWeather() {
    const apiKey = '27ef638115d844deaec51117231412';
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
    function displaysun(data1){
        const sunset = data1.sunset;
        const sunrise = data1.sunrise;
         
         const sun = sunset.split(":");
         const h = sun[0];
         const sunr = sunrise.split(":");
         var ho = sunr[0];
         var hours = new Date().getHours()
       
        
     
         if(hours <= h && hours >= ho){
            console.log("sun");
            ma.style.backgroundColor = "rgb(0, 255, 204)";
            ma.style.color = "black";
            ma.style.filter = "drop-shadow(16px 7px 8px #fffb03)";
        }else{
            console.log("moon");
            ma.style.backgroundColor = "gray";
            ma.style.color = "white";
            ma.style.filter = "drop-shadow(16px 7px 8px #fffb03)";
        }
        return h;
    }


function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    const loc = document.getElementById('loc');
    const tim = document.getElementById('time');
    const weat = document.getElementById('weat');
    const temp = document.getElementById('temp');
    const wi = document.getElementById('wind');
    const imag = document.getElementById('image');
    const ma = document.getElementById('ma')
    
    
    if (data.error) {
        weatherInfoDiv.innerHTML = `Error: ${data.error.message}`;
    } else {
        const weatherDescription = data.current.condition.text;
        const icon = data.current.condition.icon;
        const temperature = data.current.temp_c;
		const windspeed = data.current.wind_kph;
		const city = data.location.name;
		const region = data.location.region;
		const country = data.location.country;
		const time = data.location.localtime;
        

        imag.innerHTML = `<img class=img1 src="${icon}" >`;
        loc.innerText = `${city}, ${region}, ${country}`;
        tim.innerText = time;
        weat.innerText = weatherDescription;
        temp.innerText = `${temperature} °C`;
        wi.innerText = `Wind : ${windspeed}kmh`;


        const date = new Date(time);
        const hours = date.getHours();
        return hours;
      

        // console.log(hours);
     
        // var h = displaysun.h;
        // console.log(h);   
    }

	

}
// async function display() {
//     try {
//         await getWea();
//         await getWeather();
//         console.log("Both functions executed successfully");
        

//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }
// const getwea = getWea();
//         const getweather = getWeather();

//         var hours = getwea.hours;
//         var h = getweather.h;
//         console.log(hours);
//         console.log(h);
//   27ef638115d844deaec51117231412 