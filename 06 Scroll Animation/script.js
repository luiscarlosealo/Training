const boxes = document.querySelectorAll('.box'); //selecciona todos los elementos de la clase "box" y los pone en el array boxes.
window.addEventListener('scroll', checkBoxes); //cuando se detecte el evento "scroll", ejecutar la función "checkBoxes".

checkBoxes(); //ejecutar la función para que las  primeras tarjetas sean visibles antes de hacer scroll. 

function checkBoxes(){
    const triggerBottom = window.innerHeight /5 *4; //función para determinar dinámicamente el alto actual de la ventana. La división por 5 y multiplicación por 4 es para que el valor de alto de la pantalla quede más pequeño y veamos mejor la tarjeta que entra, si se quitan estos cáculos, el movimiento se activará en todo el borde inferior de la pantalla tan pronto la parte de arriba de la tarjeta llegue ahí.

    boxes.forEach (box => {
        const boxTop = box.getBoundingClientRect().top; //getBoundingClientRect() devuelve la posición donde un elemento está en el viewport, para este caso, queremos saber donde está la parte de arriba de la tarjeta, ya que ese lado es el primero que entra en pantalla cuando hacemos scroll hacia abajo.
        
        if (boxTop < triggerBottom) { //si la parte de arriba de la tarjeta (boxTop), es menor que el alto de la pantalla calculado previamente (triggerBottom) 
            box.classList.add('show'); //poner la clase show
        }else{
            box.classList.remove('show');
        }
    }

    )
}