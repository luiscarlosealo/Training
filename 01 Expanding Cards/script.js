const panels = document.querySelectorAll('.panel') //selecciona todos los elementos con la clase panel y los pone en "panels" (arreglo)

panels.forEach((panel) => { //para recorrer cada elemento de "panels" y ponerle un event listener
    panel.addEventListener('click', () => { //leer el click y ejecutar una arrow función
        removeActiveClasses() //función para remover todas las clases "active" primero, para que al dar click sólo se expanda la actual y se comprima el resto
        panel.classList.add('active')
    }

    )
}
)

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}