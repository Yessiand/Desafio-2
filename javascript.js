/*REGISTRO PARA EL TEST*/
function registro() {
    let opciones = Number(prompt(`Si desea registrarse ingrese 1 
    \nSi ya se encuentra registrado ingrese 2 
    \nSi desea no registrarse y seguir como invitado ingrese 3`));

    switch(opciones) {
        case 1 : ingreso(); break;

        case 2: logeo(); break;

        case 3: alert("Continue para comenzar el test"); break;

        default : alert("Opcion no valida"); break;
    }
}
registro();

function ingreso(user, clave, repclave, email) {
    alert("Por favor cree su Cuenta de Usuario");

    user = prompt("Ingrese su nombre de usuario");
    clave = prompt("Ingrese su clave");
    repclave = prompt("Repita la clave");
    while(repclave != clave){
        alert("Las claves no coinciden");
        alert("Vuelva a escribir la clave");
        repclave = prompt("Vuelve a ingresar la clave");
    }    
    email = prompt("Ingrese su email");
    alert(`Puedes continuar para comenzar el test, ${user} `);
}

function logeo(user, clave) {
    alert("Iniciar sesion")

    user = prompt("Ingrese su nombre de usuario");
    clave = prompt("Ingrese clave");

    alert(`Bienvenido ${user} a psique`);
}

//CONTADOR DE TIEMPO, DEBO CONTINUAR TRABAJANDO EN EL//
function paddedFormat(num) {
    if ( num<10  ) {
        return "0" + num;
    }else {
        return num;
    }
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let seg = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        seg = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(seg)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function () {
    let time_minutos = 20; 
    let time_segundos = 60; 

    let duration = time_minutos * 60 + time_segundos;
    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutos)}:${paddedFormat(time_segundos)}`;

    startCountDown(--duration, element);
};

//SIMULADOR INTERACTIVO DE PREGUNTAS//
class Pregunta {
    constructor(enunciado, opciones, acierto, respuestaCorrecta, mensaje) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.acierto = acierto;
        this.respuestaCorrecta = respuestaCorrecta;
        this.mensaje = mensaje;
    }
    validarRespuestaDentroDeOpciones(respuesta) {
        return this.opciones.indexOf(respuesta.toUpperCase());
    } 

    validarRespuesta(respuesta) {
        return respuesta.toUpperCase() == this.respuestaCorrecta;
    }
}

//PREGUNTA NUMERO 1//
const opcionesPreguntaUno = ["TRIANGULACION", "SISTEMA FAMILIAR", "CONFLICTO FAMILIAR"];
const enunciadoUno = `Se define como un patron relacional entre tres elementos de un sistema.
El triángulo clásico es el formado por el hijo, el padre y la madre, en el que dos están unidos frente a un tercero que está incómodo en la situación. 
Escriba la respuesta correcta: 
- ${opcionesPreguntaUno[0]}
- ${opcionesPreguntaUno[1]}
- ${opcionesPreguntaUno[2]}
`;
let preguntaUno = new Pregunta(enunciadoUno, opcionesPreguntaUno, false, opcionesPreguntaUno[0], "");
let turnos = 4;
let mensaje = "";
let contador= 0;

while (turnos > 0  && preguntaUno.acierto == false) {
    let respUsuario = prompt(preguntaUno.enunciado);

    if (preguntaUno.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
        if (preguntaUno.validarRespuesta(respUsuario)) {
            preguntaUno.acierto = true; 
            turnos = 4;
            alert ("Felicitaciones, has acertado");
        } else {
            turnos--;
            alert(`Vuelve a intentarlo, te quedan  ${turnos} intentos`)
        }
    } else {
        turnos--;
        alert(`La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnos} intentos.`)
    }
}
if (preguntaUno.acierto == true) {
    preguntaUno.mensaje = "Puede continuar";
} else {
    preguntaUno.mensaje = "Usted perdio.";
}
alert(preguntaUno.mensaje);

//PREGUNTA NUMERO 2//
const opcionesPreguntaDos = ["FAMILIA MONOPARENTAL", "FAMILIA NUCLEAR", "FAMILIA DE ORIGEN"];
const enunciadoDos = `La familia nuclear es la familia conviviente formada por los miembros de un solo núcleo familiar, el grupo formado por los padres y sus hijos.

Escriba la respuesta correcta: 
- ${opcionesPreguntaDos[0]}
- ${opcionesPreguntaDos[1]}
- ${opcionesPreguntaDos[2]}
`;
let preguntaDos = new Pregunta(enunciadoDos, opcionesPreguntaDos, false, opcionesPreguntaDos[1], "");
let turnosPreguntaDos = 4;
let mensajeDos= "";

let contadorPreguntaDos= 0;
while (turnosPreguntaDos > 0  && preguntaDos.acierto == false) {
    let respUsuario = prompt(preguntaDos.enunciado);

    if (preguntaDos.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
        if (preguntaDos.validarRespuesta(respUsuario)) {
            preguntaDos.acierto = true; 
            turnosPreguntaDos = 4;
            alert ("Felicitaciones, has acertado");
        } else {
            turnosPreguntaDos--;
            alert(`Vuelve a intentarlo, te quedan  ${turnosPreguntaDos} intentos`)
        }
    } else {
        turnosPreguntaDos--;
        alert(`La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnosPreguntaDos} intentos.`)
    }
}
if (preguntaDos.acierto == true) {
    preguntaDos.mensajeDos = "Puede continuar.";
} else {
    preguntaDos.mensajeDos = "Usted perdio.";
}
alert(preguntaDos.mensajeDos);

//PREGUNTA NUMERO 3//
const opcionesPreguntaTres = ["INDIVIDUALISMO", "SOCIALISMO FAMILIAR", "LA MENTE ES SOCIAL"];
const enunciadoTres = `Los fenómenos mentales reflejan fenómenos sociales, es decir el pensamiento no es únicamente una masa cerebral compuesto por neuronas, sino que, es el producto de un juego de estructuras interpersonales y relacionales en un contexto familiar o social particular.

Escriba la respuesta correcta: 
- ${opcionesPreguntaTres[0]}
- ${opcionesPreguntaTres[1]}
- ${opcionesPreguntaTres[2]}
`;
let preguntaTres = new Pregunta(enunciadoTres, opcionesPreguntaTres, false, opcionesPreguntaTres[2], "");
let turnosPreguntaTres = 4;
let mensajeTres= "";

let contadorPreguntaTres= 0;
while (turnosPreguntaTres > 0  && preguntaTres.acierto == false) {
    let respUsuario = prompt(preguntaTres.enunciado);

    if (preguntaTres.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
        if (preguntaTres.validarRespuesta(respUsuario)) {
            preguntaTres.acierto = true; 
            turnosPreguntaTres = 4;
            alert ("Felicitaciones, has acertado");
        } else {
            turnosPreguntaTres--;
            alert(`Vuelve a intentarlo, te quedan  ${turnosPreguntaTres} intentos`)
        }
    } else {
        turnosPreguntaTres--;
        alert(`La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnosPreguntaTres} intentos.`)
    }
}
if (preguntaTres.acierto == true) {
    preguntaTres.mensaje = "Usted gano.";
} else {
    preguntaTres.mensaje = "Usted perdio.";
}
alert("El juego termino, " + preguntaTres.mensaje);
