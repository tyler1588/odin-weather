import weather from "./createWeatherObject";
import getWeatherData from "./getWeatherData";

export default async function parseWeatherData(city){
        const data = await getWeatherData(city);
        const weatherObject = new weather(data.main.temp, data.main.feels_like, data.main.humidity, data.wind.speed);
        return weatherObject;
};
