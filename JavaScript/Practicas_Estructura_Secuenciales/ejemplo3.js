


let btnCalcular = document.getElementById ('btnCalcular');

//se invoca funcion "eventlistener"
eventlistener();

// se crea la funcion eventlistener para encapsular los objetos que llevaran el metodo de "eventlistener"
function eventlistener () {
    btnCalcular.addEventListener('click', obtenerarea);
}



function obtenerarea () {

    //se obtiene el valor de los input´s y se convierte a su tipo de dato a number y se le asigna el valor a la variable correspondiente 
    let base= Number (document.getElementById('Base').value);
    let Altura= Number (document.getElementById('Altura').value);
    

    let resultado = 0;

    resultado = (Base * Altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado + "cm2";


}