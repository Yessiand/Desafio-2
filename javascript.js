//REGISTRO PARA EL TEST//
formulario.addEventListener("submit", validarFormulario);
function validarFormulario(event) {
    event.preventDefault();

    // Se inicializan las variables que contendran los objetos del formulario HTML
    let nombreRegistro = document.querySelector("#nombre");
    let emailRegistro = document.querySelector("#email");
    let mensajeRegistro = document.querySelector("#mensaje");

    // Se guardan los valores de los objetos HTML en un objeto JS
    const registro = {
        nombre: nombreRegistro.value,
        email: emailRegistro.value,
        mensaje: mensajeRegistro.value,
    }

    // Se accede a los valores del objeto y se muestra un mensaje por pantalla
    const {nombre,email,mensaje} = registro;
    console.log(nombre + ' - ' + email + ' - ' + mensaje);
    alert("Muchas gracias " + nombre + " por enviar el formulario");

    // Se codifica el objeto como un JSON String y se almacena en el LocalStorage
    const objetoRegistroComoJsonString = JSON.stringify(registro);
    localStorage.setItem("formularioRegistro", objetoRegistroComoJsonString);

    // Se decodfica el objeto almacenado en el LocalStorage para poder acceder a sus valores guardados.
    let objetoRegistroDecodificado = JSON.parse(localStorage.getItem("formularioRegistro"));
    console.log(objetoRegistroDecodificado.mensaje);
}

//CONTADOR DE TIEMPO//

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
function iniciarTest() {
    var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
}

//SIMULADOR DE PREGUNTAS//

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
        pregunta: "1. Patron relacional entre tres elementos de un sistema.",
        respuestas: {
            a: "Triangulación",
            b: "Sistema familiar",
            c: "Conflicto familiar",
        },
        respuestaCorrecta: "a",
    },
    {
        pregunta: "2. La familia nuclear es la familia conviviente formada por los miembros de un solo núcleo familiar, el grupo formado por los padres y sus hijos.",
        respuestas: {
            a: "Familia monoparental",
            b: "Familia nuclear",
            c: "Familia de origen",
        },
        respuestaCorrecta: "b",
    },
    {
        pregunta: "3.Los fenómenos mentales reflejan fenómenos sociales, es decir el pensamiento no es únicamente una masa cerebral compuesto por neuronas, sino que, es el producto de un juego de estructuras interpersonales y relacionales en un contexto familiar o social particular.",
        respuestas: {
            a: "Individualizmo ",
            b: "Socialismo familiar",
            c: "La mente es social",
        },
        respuestaCorrecta: "c",
    },
    {
        pregunta: "4. Es la institución más antigua y resistente de todos los grupos humanos, aunque ha ido variando tanto en sus funciones como en su estructura a lo largo de la historia",
        respuestas: {
            a: "Iglesia",
            b: "Escuela",
            c: "Familia",
        },
        respuestaCorrecta: "c",
    },
];

function imprimirOpcionRespuesta(respuestasPregunta, numeroDePregunta) {
    const respuestas = [];
    Object.entries(respuestasPregunta).forEach(entry => {
        const [key, value] = entry;
        respuestas.push(`<label>
        <input type="radio" name="${numeroDePregunta}" value="${key}"/>
        ${key} : ${value}
    </label>`);
    });
    return respuestas;

}

function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestasPregunta = {...preguntaActual.respuestas};
        const respuestasImpresas = imprimirOpcionRespuesta(respuestasPregunta, numeroDePregunta);
        preguntasYrespuestas.push(
            `<div class="cuestion">${preguntaActual.pregunta}</div>
            <div class="respuestas"> ${respuestasImpresas.join("")} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();
 // Función para comprobar las respuestas correctas e incorrectas.
function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}
        ).value;
        respuestaElegida == preguntaActual.respuestaCorrecta ? (respuestas[numeroDePregunta].style.color = 'green', (respuestasCorrectas++)) :
    respuestas[numeroDePregunta].style.color = 'red'
    });

    resultadoTest.innerHTML =
        "Usted ha acertado " + respuestasCorrectas + " preguntas de un total de " + preguntas.length;
}

botonRes.addEventListener('click', mostrarResultado);


