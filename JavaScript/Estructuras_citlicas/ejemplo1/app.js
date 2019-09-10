


SumaCantidades();

function SumaCantidades(){
  
  let y = 0;
  for(let x = 0; x<=10; x++){
    //Estructura ciclica la cual se compone de un (variable inicializada, condicion logica, incrementador), la cual nos ayuda a la ejecucion repetitiva de un bloque de codigo
    y += x

    //Se crea el elemento li por medio del metodo createElements y se asigna a la variable newli
    let newli = document.createElement('li');
    //Se asigna el atributo id y class a la variable newli
    newli.setAttribute("id", `listaN${x}`);
    newli.setAttribute("class", "list-group-item");
    //se inserta un hijo por medio del metodo createtextnode
    let newContent = document.createTextNode(y);
    //
    newli.appendChild(newContent);

    let listaDesordenada = document.getElementById('listaNumerica');

    listaDesordenada,appendChild(newli);



  }
} 