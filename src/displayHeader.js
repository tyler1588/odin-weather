export default function displayHeader(){
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    const locationInput = document.createElement('form');
    locationInput.classList.add('location-input');
    header.appendChild(locationInput);

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.name = 'city';
    locationInput.appendChild(cityInput);

    const locationSubmit = document.createElement('input');
    locationSubmit.type = 'submit';
    locationSubmit.value = 'Submit';
    locationInput.appendChild(locationSubmit);
}