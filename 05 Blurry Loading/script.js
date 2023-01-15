const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0; //variable para contar el tiempo
let int = setInterval(blurring, 30); //"setInterval" ejecuta una función en un tiempo determinado, aquí, 30, significa 30 milisegundos, por lo que blurring se ejecuta una vez  cada 30 milisegundos;

function blurring() {
    load++;
    if (load > 99){ //para deneter el contador en 100
        clearInterval(int); // detiene la función interna "setInterval". Hay que pasar en el paréntesis el nombre de la variable (int) que es a la que se le asigna "setInterval" arriba.
    }
    //console.log(load);
    loadText.innerText = `${load}%`;//accede al campo de texto del objeto texto y le asigna el valor de load
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //llamado de la función para mapear el rango de load que va de 0-100 al rango que acepta la opacidad 1 a 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //para el efecto de blur, se le pasa como template literal. Se usa aquí tambien la función de mapeo Scale de abajo, esta vez para mapear load al rango de 30 a 0. Queremos que el blur arranque en 30.
}
//Arrow funtion para mapear un número de un intervalo a otro. recibe el número (num), el rango inicial (in_min, in_max) y el rango final mapeado (out_min, out_max).
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}