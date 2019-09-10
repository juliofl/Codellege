let btnCalcular = document.getElementById('btnCalcular');

let Calificacion1 = document.getElementById('Cal1');
let Calificacion2 = document.getElementById('Cal2');
let Calificacion3 = document.getElementById('Cal3');

function EventListener() {
    btnCalcular.addEventListener('click',Promedio);
}

function Promedio (){
    let resultado = Number(Calificacion1.value)+Number(Calificacion2.value)+ Number(Calificacion3.value);
   
   // esta operaqcion es similar a escribir "resultado = resultado/3"
    resultado /= 3;
    if(resultado>9 && res<=10){
        imprimirResultado.innerHTML =`<p>La Califiacion $(res) es aprobatoria</p>`
    }else if(res>6 && res<9){
        imprimirResultado.innerHTML =`<p>La Califiacion $(res) es regular</p>`
        }
        else if(res<6){
            imprimirResultado.innerHTML =`<p>La Califiacion $(res) es reprobatoria</p>`
            }
            else{
                imprimirResultado.innerHTML = `<p>La Califiacion $(res) es incorrecta</p>`
                

    }
}


