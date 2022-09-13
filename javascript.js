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

/*VARIABLES SIMULADOR*/
const miArray = ["TRIANGULACION", "SISTEMA FAMILIAR", "CONFLICTO FAMILIAR"];
let respuesta = miArray[0] ;
let acierto = false;
let turnos = 4;
let mensaje = "";

/*SIMULADOR INTERACTIVO DE PREGUNTAS*/
let contador= 0;


while (turnos > 0  && acierto == false) {
    let respUsuario = prompt (
`Se define como un patron relacional entre tres elementos de un sistema.
El triángulo clásico es el formado por el hijo, el padre y la madre, en el que dos están unidos frente a un tercero que está incómodo en la situación. 
Escriba la respuesta correcta: 
- ${miArray[0]}
- ${miArray[1]}
- ${miArray[2]}
`);

    if (miArray.indexOf(respUsuario.toUpperCase()) != -1) {
        if (respUsuario.toUpperCase() == respuesta) {
            acierto=true; 
            turnos--;
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
if (acierto == true) {
    mensaje = "Usted gano.";
} else {
    mensaje = "Usted perdio.";
}
alert("El juego termino, " + mensaje);


