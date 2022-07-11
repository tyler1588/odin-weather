document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const title = document.createElement('p');
    title.innerHTML = "Hello webpack";
    container.appendChild(title);
}, false);