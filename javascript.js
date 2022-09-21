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

/*REGISTRO PARA EL TEST*/
const formulario = document.querySelector("form");

const nombre = document.querySelector("#name");

const email = document.querySelector("#email");

const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario (event){
    event.preventDefault();
    console.log(nombre.value + ' - ' + email.value + ' - ' + mensaje.value);
}

/*function registro() {
    let opciones = Number(
        prompt(`Si desea registrarse ingrese 1 
    \nSi ya se encuentra registrado ingrese 2 
    \nSi desea no registrarse y seguir como invitado ingrese 3`)
    );

    switch (opciones) {
        case 1:
            ingreso();
            break;

        case 2:
            logeo();
            break;

        case 3:
            alert("Continue para comenzar el test");
            break;

        default:
            alert("Opcion no valida");
            break;
    }
}

function ingreso(user, clave, repclave, email) {
    alert("Por favor cree su Cuenta de Usuario");

    user = prompt("Ingrese su nombre de usuario");
    clave = prompt("Ingrese su clave");
    repclave = prompt("Repita la clave");
    while (repclave != clave) {
        alert("Las claves no coinciden");
        alert("Vuelva a escribir la clave");
        repclave = prompt("Vuelve a ingresar la clave");
    }
    email = prompt("Ingrese su email");
    alert(`Puedes continuar para comenzar el test, ${user} `);
}

function logeo(user, clave) {
    alert("Iniciar sesion");

    user = prompt("Ingrese su nombre de usuario");
    clave = prompt("Ingrese clave");

    alert(`Bienvenido ${user} a psique`);
}*/

//CONTADOR DE TIEMPO, DEBO CONTINUAR TRABAJANDO EN EL//

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function iniciarPreguntas() {
    //PREGUNTA NUMERO 1//
    const opcionesPreguntaUno = [
        "TRIANGULACION",
        "SISTEMA FAMILIAR",
        "CONFLICTO FAMILIAR",
    ];
    const enunciadoUno = `Se define como un patron relacional entre tres elementos de un sistema.
El triángulo clásico es el formado por el hijo, el padre y la madre, en el que dos están unidos frente a un tercero que está incómodo en la situación. 
Escriba la respuesta correcta: 
- ${opcionesPreguntaUno[0]}
- ${opcionesPreguntaUno[1]}
- ${opcionesPreguntaUno[2]}
`;
    let preguntaUno = new Pregunta(
        enunciadoUno,
        opcionesPreguntaUno,
        false,
        opcionesPreguntaUno[0],
        ""
    );
    let turnos = 4;
    let mensaje = "";
    let contador = 0;

    while (turnos > 0 && preguntaUno.acierto == false) {
        let respUsuario = prompt(preguntaUno.enunciado);

        if (preguntaUno.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
            if (preguntaUno.validarRespuesta(respUsuario)) {
                preguntaUno.acierto = true;
                turnos = 4;
                alert("Felicitaciones, has acertado");
            } else {
                turnos--;
                alert(`Vuelve a intentarlo, te quedan  ${turnos} intentos`);
            }
        } else {
            turnos--;
            alert(
                `La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnos} intentos.`
            );
        }
    }
    if (preguntaUno.acierto == true) {
        preguntaUno.mensaje = "Puede continuar";
        let elementUno = document.createElement("h1");
        elementUno.textContent = "La pregunta uno fue acertada";
        let divRepuesta = document.getElementById("respuestaAcertada");
        divRepuesta.appendChild(elementUno);
    } else {
        preguntaUno.mensaje = "Usted perdio.";
    }
    alert(preguntaUno.mensaje);

    //PREGUNTA NUMERO 2//
    const opcionesPreguntaDos = [
        "FAMILIA MONOPARENTAL",
        "FAMILIA NUCLEAR",
        "FAMILIA DE ORIGEN",
    ];
    const enunciadoDos = `La familia nuclear es la familia conviviente formada por los miembros de un solo núcleo familiar, el grupo formado por los padres y sus hijos.

Escriba la respuesta correcta: 
- ${opcionesPreguntaDos[0]}
- ${opcionesPreguntaDos[1]}
- ${opcionesPreguntaDos[2]}
`;
    let preguntaDos = new Pregunta(
        enunciadoDos,
        opcionesPreguntaDos,
        false,
        opcionesPreguntaDos[1],
        ""
    );
    let turnosPreguntaDos = 4;
    let mensajeDos = "";

    let contadorPreguntaDos = 0;
    while (turnosPreguntaDos > 0 && preguntaDos.acierto == false) {
        let respUsuario = prompt(preguntaDos.enunciado);

        if (preguntaDos.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
            if (preguntaDos.validarRespuesta(respUsuario)) {
                preguntaDos.acierto = true;
                turnosPreguntaDos = 4;
                alert("Felicitaciones, has acertado");
            } else {
                turnosPreguntaDos--;
                alert(`Vuelve a intentarlo, te quedan  ${turnosPreguntaDos} intentos`);
            }
        } else {
            turnosPreguntaDos--;
            alert(
                `La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnosPreguntaDos} intentos.`
            );
        }
    }
    if (preguntaDos.acierto == true) {
        preguntaDos.mensajeDos = "Puede continuar.";
        let elementDos = document.createElement("h1");
        elementDos.textContent = "La pregunta dos fue acertada";
        let divRepuesta = document.getElementById("respuestaAcertada");
        divRepuesta.appendChild(elementDos);
    } else {
        preguntaDos.mensajeDos = "Usted perdio.";
    }
    alert(preguntaDos.mensajeDos);

    //PREGUNTA NUMERO 3//
    const opcionesPreguntaTres = [
        "INDIVIDUALISMO",
        "SOCIALISMO FAMILIAR",
        "LA MENTE ES SOCIAL",
    ];
    const enunciadoTres = `Los fenómenos mentales reflejan fenómenos sociales, es decir el pensamiento no es únicamente una masa cerebral compuesto por neuronas, sino que, es el producto de un juego de estructuras interpersonales y relacionales en un contexto familiar o social particular.

Escriba la respuesta correcta: 
- ${opcionesPreguntaTres[0]}
- ${opcionesPreguntaTres[1]}
- ${opcionesPreguntaTres[2]}
`;
    let preguntaTres = new Pregunta(
        enunciadoTres,
        opcionesPreguntaTres,
        false,
        opcionesPreguntaTres[2],
        ""
    );
    let turnosPreguntaTres = 4;
    let mensajeTres = "";

    let contadorPreguntaTres = 0;
    while (turnosPreguntaTres > 0 && preguntaTres.acierto == false) {
        let respUsuario = prompt(preguntaTres.enunciado);

        if (preguntaTres.validarRespuestaDentroDeOpciones(respUsuario) != -1) {
            if (preguntaTres.validarRespuesta(respUsuario)) {
                preguntaTres.acierto = true;
                turnosPreguntaTres = 4;
                alert("Felicitaciones, has acertado");
            } else {
                turnosPreguntaTres--;
                alert(`Vuelve a intentarlo, te quedan  ${turnosPreguntaTres} intentos`);
            }
        } else {
            turnosPreguntaTres--;
            alert(
                `La respuesta ingresada no pertenece a las opciones validas. Vuelve a intentarlo, te quedan ${turnosPreguntaTres} intentos.`
            );
        }
    }
    if (preguntaTres.acierto == true) {
        preguntaTres.mensaje = "Usted gano.";
        let elementTres = document.createElement("h1");
        elementTres.textContent = "La pregunta tres fue acertada";
        let divRepuesta = document.getElementById("respuestaAcertada");
        divRepuesta.appendChild(elementTres);
    } else {
        preguntaTres.mensaje = "Usted perdio.";
    }
    alert("El juego termino, " + preguntaTres.mensaje);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};

//SIMULADOR INTERACTIVO DE PREGUNTAS//
function iniciarTest() {
    registro();
    iniciarPreguntas();
}
