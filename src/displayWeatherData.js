import parseWeatherData from "./parseWeatherData";

export default async function displayWeatherData(city){
    
    const main = document.querySelector('.main');
    
    const weather = document.createElement('div');
    weather.classList.add('weather-display');
    main.appendChild(weather);

    const cityName = document.createElement('h1');
    cityName.classList.add('city-name');
    cityName.innerHTML = city;
    weather.appendChild(cityName);

    const weatherInfo = await parseWeatherData(city);

    const currentTemp = document.createElement('h1');
    currentTemp.classList.add('current-temp');
    currentTemp.innerHTML = weatherInfo.currentTemp + ' °C';
    weather.appendChild(currentTemp);

    const feelsLike = document.createElement('h2');
    feelsLike.classList.add('feels-like');
    feelsLike.innerHTML = 'Feels like ' + weatherInfo.feelsLike + ' °C';
    weather.appendChild(feelsLike);

    const humidity = document.createElement('h2');
    humidity.classList.add('humidity');
    humidity.innerHTML = 'Humidity ' + weatherInfo.humidity + '%';
    weather.appendChild(humidity);

    const windSpeed = document.createElement('h2');
    windSpeed.classList.add('wind-speed');
    windSpeed.innerHTML = 'Wind ' + weatherInfo.windSpeed + ' km/h';
    weather.appendChild(windSpeed);
}