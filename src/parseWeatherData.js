import weather from "./createWeatherObject";
import getWeatherData from "./getWeatherData";

export default async function parseWeatherData(city){
        const data = await getWeatherData(city);
        const weatherObject = new weather(data.main.temp)
        return weatherObject;
};
