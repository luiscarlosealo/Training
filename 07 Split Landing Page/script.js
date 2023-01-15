const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add ('hover-left')); //para AGREGAR la clase hover-left cuando el mouse entre al split
left.addEventListener('mouseleave', () => container.classList.remove ('hover-left')); //para QUITAR la clase hover-left cuando el mouse salga del split
right.addEventListener('mouseenter', () => container.classList.add ('hover-right')); 
right.addEventListener('mouseleave', () => container.classList.remove ('hover-right')); 