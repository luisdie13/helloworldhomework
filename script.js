function changeHeader() {
    const header = document.getElementById('header');
    header.textContent = 'Hello, DOM!';
    header.style.color = 'blue';
}

function changeBack() {
    const header = document.getElementById('header');
    header.textContent = 'Hello, World!';
    header.style.color = '#333'; // Reset to default color
}

function combineBoth() {
    const header = document.getElementById('header');
    header.textContent = 'Hello World! Hello DOM!';
    header.style.color = 'red';
}