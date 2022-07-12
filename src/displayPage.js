export default function displayPage(){
    const container = document.querySelector('.container');
    const main = document.createElement('div');
    main.classList.add('main');
    container.appendChild(main);

    const locationInput = document.createElement('form');
    locationInput.classList.add('location-input');
    main.appendChild(locationInput);

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.name = 'city';
    cityInput.placeholder = 'City';
    cityInput.classList.add('city-input');
    locationInput.appendChild(cityInput);

    const locationSubmit = document.createElement('input');
    locationSubmit.type = 'submit';
    locationSubmit.value = 'Search';
    locationSubmit.classList.add('location-submit');
    locationInput.appendChild(locationSubmit);
}