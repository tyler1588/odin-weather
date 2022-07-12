import parseWeatherData from "./parseWeatherData";

export default async function displayWeatherData(city){
    const weatherInfo = await parseWeatherData(city);
    const container = document.querySelector('.container');
    const weather = document.createElement('div');
    container.appendChild(weather);

    const currentTemp = document.createElement('h1');
    weather.appendChild(currentTemp);
    currentTemp.innerHTML = weatherInfo.currentTemp;

}