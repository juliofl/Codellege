//Esta linea crea una variable la cual se encarga de obtener por medio del objeto document el elemento button con el id "btnCalcular"

let btnCalcular=document.getElementById('btnCalcular');

//por medio del método "addEventListener" se le asigno el evento clic al elemento button y al momento de ejecutar dicho evento se ejecutara 1 funcion suma
btnCalcular.addEventListener('click',multiplicacion);

//Funcion: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna accion en el codigo
function multiplicacion() {
    //se obtendra los valores de los inputs por medio del metodo "velue"
    let Costo = document.getElementById('Costo').value;
    let M2 = document.getElementById('M2').value;

        //se reasigna el valor de la variable numero2 convirtiendolo de string a Numero
    Costo = Number(Costo);
    M2 = Number(M2);

    //se declara variable "resultado" y se inicializa con valor '0'.
    let resultado = 0;

    //despues de obtener los datos de los elemntos input se realiza el proceso de suma 
    resultado = Costo * M2;



    //se asigno a la variable "imprimirResultado" elemento con el id "resultado"
    let imprimirResultado= document.getElementById('resultado');

    //por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir en el elemento 
    imprimirResultado.innerHTML = resultado;
}


