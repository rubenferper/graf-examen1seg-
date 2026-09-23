// Obtener la imagen y los botones
const image = document.getElementById('image');
const verySmallBtn = document.getElementById('verySmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const veryLargeBtn = document.getElementById('veryLargeBtn');

// Tamaño inicial de la imagen
image.style.width = '300px';
image.style.height = '300px';

// Funciones para cambiar el tamaño de la imagen
verySmallBtn.addEventListener('click', () => {
    image.style.width = '75px';
    image.style.height = '75px';
});

smallBtn.addEventListener('click', () => {
    image.style.width = '150px';
    image.style.height = '150px';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = '300px';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '450px';
    image.style.height = '450px';
});

veryLargeBtn.addEventListener('click', () => {
    image.style.width = '600px';
    image.style.height = '600px';
});