import updateWeatherData from "./updateWeatherData";

export default function handleUserInput(){
    const locationInput = document.querySelector('.location-input');
    locationInput.addEventListener('submit', async function(event){
        event.preventDefault();
        const formData = event.target;
        const city = formData.elements['city'].value;
        await updateWeatherData(city);
    })
}