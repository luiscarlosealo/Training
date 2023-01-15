const progress = document.getElementById('progress'); 
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //hay que usar "querySelectorAll" porque son varios círculos y esto guarda un arreglo

let currentActive = 1; //va a ser un índice para saber cual círculo está activo.

next.addEventListener('click',() => { //tan pronto haya un click en el botón next, se ejecuta la función
    currentActive++; //incrementa "currentActive" con cada click
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
    //console.log(currentActive);
})

prev.addEventListener('click',() => { //tan pronto haya un click en el botón prev, se ejecuta la función
    currentActive--; //incrementa "currentActive" con cada click
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
    //console.log(currentActive);
})


function update () { //para activar cada círculo
    circles.forEach((circle, idx) => { //recorrer el arreglo "circles" para recuperar cada "circle" e "index"
        if(idx < currentActive) { //recordar que los index comienzan en cero, por eso el <
           circle.classList.add('active'); 
        } else {
            circle.classList.remove('active');
        }
    })
    //BARRA DE PROGRESO
    const actives = document.querySelectorAll('.active'); //seleccionar todos los que estan activos

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%' //accede al width de la clase progress, quien controla el tamaño de la barra azul. Aquí se divide el numero de circulos activos - el total de circulos y se multiplica por 100 para tenerlos en porcentaje, pero dado que la división no va a corresponder con la posición de los círculos, se le resta 1 a cada item antes de la multiplicación. Al final se le agrega como string el signo % debido a que el parámetro "width" lo necesita con dicho signo, sino, no funciona.
    
    //AVTIVAR Y DESACTIVAR LOS BOTONES PREV Y NEXT
    if (currentActive ===1) { //si estoy en el primer cículo debe estar desactivado PREV
        prev.disabled = true;
    } else if (currentActive === circles.length) { // si estoy en el último, debe estar desactivado NEXT
        next.disabled = true;
    } else { //si no estoy en los extremos ambos botones deben estar activos
        prev.disabled = false;
        next.disabled = false;
    }
}