const labels = document.querySelectorAll('.form-control label'); //guarda el label "Email" en un array

labels.forEach (label => { //hace un loop al array 
    label.innerHTML = label.innerText
        .split('') //crea un array donde cada letra de "Email" queda en una posición del array 
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//agrega a cada posición (letra) el <span> que además contiene un delay para que cada letra se retrase 50ms con respecto a la anterior, lo que hace que el efecto final se anime letra por letra. 
        .join('') //junta todo de nuevo en un string
})