export default async function getWeatherData(inputCity) {
    try {
        const city = inputCity;
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4a86a64c7f786f595f79edc6709de561&units=metric', {mode: 'cors'});
        return (response.json());
    }
    catch (error){
        return (error)
    }
    
};