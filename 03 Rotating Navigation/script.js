const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav')); //cuando ocurra el click en el botón open, agregar la clase show-nav a la clase container.

close.addEventListener('click', () => container.classList.remove('show-nav')); //cuando ocurra el click en el botón open, agregar la clase show-nav a la clase container.