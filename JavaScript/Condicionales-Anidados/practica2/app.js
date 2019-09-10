let inputNumber = document.getElementById('Numero');

EventListener();

function EventListener(){
    inputNumber.addEventListener('keypress', calcularCifras);
    inputNumber.addEventListener('blur',calcularCifras);
}

function calcularCifras(){
     
}

function calcularCifras () {
if(event.key == "Enter"){
    let imprimir = document.getElementById('resultado');
    if(Number(inputNumber.value) <=999)
    }
}
