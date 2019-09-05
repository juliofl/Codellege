let btnComparar = document.getElementById('btnComparar');

eventListener();

function eventListener(){
    btnComparar.addEventListener('click',CompararDatos);
}

function CompararDatos(){
    let Numero1 = Number(document.getElementById('Numero1').value);
    let Numero2 = Number(document.getElementById('Numero2').value);
    let Numero3 = Number(document.getElementById('Numero3').value);

    let imprimirResultado = document.getElementById('Resultado');

    if (Numero1 > Numero2) {
        if (Numero1 > Numero3) {
            imprimirResultado.innerHTML =`<h4 class="alert-heading text-info"> El numero ${Numero1} es el numero mayor </h4>`
        } else {
            imprimirResultado.innerHTML =`<h4 class="alert-heading text-info"> El numero ${Numero3} es el numero mayor </h4>`
        }

    
  }else {
      if (Numero2 > Numero3) {
        imprimirResultado.innerHTML =`<h4 class="alert-heading text-info"> El numero ${Numero2} es el numero mayor </h4>`
      
  }
    else{
    imprimirResultado.innerHTML =`<h4 class="alert-heading text-info"> El numero ${Numero3} es el numero mayor </h4>`
    }
    }
}