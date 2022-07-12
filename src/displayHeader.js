export default function displayHeader(){
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    const title = document.createElement('h1');
    title.innerHTML = 'Weather API';
    title.classList.add('title');
    header.append(title);
}