//valores definidos en condiciones iniciales
let numeroSecreto;
let intentos;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

//muestra en la consola
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('#valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('#reiniciar').removeAttribute('disabled');
    }   else {
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p','El numero es menor');
        }
        else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los elementos posibles')
    }
    else{

    if (listaNumerosSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //mostrar mensajes iniciales
    //generar el numero secreto
    // reiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
