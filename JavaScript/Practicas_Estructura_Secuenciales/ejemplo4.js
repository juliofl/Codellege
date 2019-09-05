let btnCalcular = document.getElementById('btncalcular');
let btnCalcular2 = document.getElementById('btncalcular2');

EventListener();

function EventListener () {

    btnCalcular.addEventListener('click', obtenerArea);
    btnCalcular2.addEventListener('click', obtenerareasimplificada);
}

function obtenerareasimplificada() {
    console.time('obtenerareasimplificada');
    let radio = Number (document.getElementById('radiocirculo').value);
    let resultado = 0;
    //se invoca el objeto math y se utiliza su propiedad pi (el cual nos manda el valor de dicha constante) y su metodo pow (eleva un elemnto numero hacia la potencia que se le solicita);
    resultado = Math.PI * Math.pow(radio,2);
    let resultadoImprimir = document.getElementById('resultado');
    resultadoImprimir.innerHTML = resultado;
    console.timeEnd('obtenerareasimplificada');
}

function obtenerArea() {
    console.time('obeteneArea');

    //Se declara un elemento constante del cual funcionara para obtener el calculo de PI
    const Pi= 3.1416;

    let r = Number(document.getElementById('radiocirculo').value);

    let resultado = 0;

    resultado = Pi * (r * r);

    let resultadoImprimir = document.getElementById('resultado');

    resultadoImprimir.innerHTML = resultado;

    console.timeEnd('obeteneArea');




}