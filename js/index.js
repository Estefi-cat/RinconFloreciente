const APIKEY = 'd1ae942c86f2a56a4ccaae45b5c7f994';

const fetchdata = position =>{
    const {latitude, longitude} = position.coords;
    fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}')
        .then(response => response.json())
        .then(data=>setWeatherData(data))
    
    console.log(position);
}

const setWeatherData = data => {
    console.log(data);
    const weatherData={
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: 'data',
    } 
    Object.keys(weatherData).forEach(key=>{
        document.getElementById(key).textContent=weatherData[key];
    });
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchdata);
}
