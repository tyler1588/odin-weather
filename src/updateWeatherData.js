import parseWeatherData from "./parseWeatherData";

export default async function updateWeatherData(city){
    
    const weatherInfo = await parseWeatherData(city);

    const cityName = document.querySelector('.city-name');
    cityName.innerHTML = city;

    const currentTemp = document.querySelector('.current-temp');
    currentTemp.innerHTML = weatherInfo.currentTemp + ' °C';

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.innerHTML = 'Feels like ' + weatherInfo.feelsLike + ' °C';

    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = 'Humidity ' + weatherInfo.humidity + '%';

    const windSpeed = document.querySelector('.wind-speed');
    windSpeed.innerHTML = 'Wind ' + weatherInfo.windSpeed + ' km/h';

}