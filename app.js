
// Esto no es un texto es un objeto. entiendo que tiene varias caracteristicas
// Le estoy asignando un titulo al objeto trayendo el metodo que permite asignarle un valor en es
// en este caso un string

let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentos = 1;

condicionesInciales(); 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
        // El usuario no acerto el numero secreto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El elemento es mayor')
        }
        intentos++
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    // indicar mensaje de inicio
    condicionesInciales();
    // generar el numero aleatorio
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    // inicializar el numero de intentos
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo))+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function condicionesInciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

/* EJERCICIO #1 Sección 4
let IMC = 0;
function calculoMasaCorporal(peso, altura){
    return IMC = peso / (altura ** 2);
}
*/


/* EJERCICIO #2 Sección 4
function valorFactorial (numero){
    if(numero < 0){
        return "no se calcula";
    } else {
        if (numero == 0){
            return 1;
        } else {
            if (numero > 0){
                return numero * valorFactorial(numero-1);
            }
        }
    }
}

console.log(valorFactorial(10));


// DESAFIO Sección 4 

let listaGenerica=[];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
    console.log(lenguagesDeProgramacion)
    lenguagesDeProgramacion.push("Java","Ruby","GoLang")
    console.log(lenguagesDeProgramacion)
    console.log(lenguagesDeProgramacion.reverse())


function promedioListaNum(lista){
    if (lista.length === 0) {
        return 0; // Retorna 0 si la lista está vacía
    }
    
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    
    const promedio = suma / lista.length;
    return promedio;
}
// Arreglo de prueba
const numeros = [10, 20, 30, 40, 50];

// Llamada a la función y muestra del resultado
const resultado = promedioListaNum(numeros);
console.log("El promedio es:", resultado);

function mostrarMaxMin(lista) {
    if (lista.length === 0) {
        console.log("La lista está vacía");
        return;
    }

    let maximo = lista[0];
    let minimo = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
        if (lista[i] < minimo) {
            minimo = lista[i];
        }
    }

    console.log("El número más grande es:", maximo);
    console.log("El número más pequeño es:", minimo);
}

// Ejemplo de uso
mostrarMaxMin(numeros);
*/