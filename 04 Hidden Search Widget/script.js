const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active'); //switchea entre poner y quitar la clase "active" con cada click
    input.focus(); // para que el cursor se ponga automáticamente en el campo de búsqueda al dar click
}

)