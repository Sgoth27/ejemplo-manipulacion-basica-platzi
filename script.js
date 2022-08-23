const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//hay varias formas de escuchar eventos
//1) directamente desde la etiqueta en html usando onclick por ejemplo en botones o 
//onchange en inputs... onchange="console.log('cambio el input')"
//pero no es la mejor practica para ello creamos funciones en js

// btn.addEventListener('click', btnOnClick ); //ojo en el segundo argumento se llama a la funcion pero sin parecentesis


// function btnOnClick(){
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;

// }


//ahora vamos a hacer el ejercicio desde un formulario dado que por defecto el ultimo boton
//lo que hace html es enviar la info como submit 
form.addEventListener('submit', sumarInputValues ); //ojo en el segundo argumento se llama a la funcion pero sin parecentesis


function sumarInputValues(event){
    console.log({event});
    event.preventDefault();//se pasa como parametro el evento y se usa esta funcion por defecto para que el sistema no realice el submit por defecto
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;

}

//otra forma es cambiarle en html a la etiqueta del boton su tipo.. ponerle type="button"
