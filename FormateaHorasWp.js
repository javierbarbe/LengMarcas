var primerElemento;
var ultimoElemento;
var espacio;
var zonadatos = "";
var fecha = new Date();
const claseClave = "_3-cMa _3Whw5";
var els = document.getElementsByClassName(claseClave);
var estados = [];
var escrito = ["escribiendo"];
var grabando = ["grabando"];
var horas = ["horas conectadas"];
var hora = "";
var ano = true;
var salir = false;
var terminar = false;
var segundoActual = 0;
var fechaLimite = new Date(2021, 07, 31, 14, 52, 0);
let contador = 0;
var estado = "";
function myFunction() {
  if (salir == false) {
    setInterval(alertFunc, 1500);
  } else {
    console.log("FINITO ENCANTATEM");
  }
}
function alertFunc() {
  
  if (parseInt(fecha.getTime()) > parseInt(fechaLimite.getTime())) {
    salir = true;
    stop();
  } else {
    fecha = new Date();
    els = document.getElementsByClassName(claseClave);
    // console.log(els);
    if (!els[0]) {
      estado = "";
     
      if (
        horas[horas.length - 1] != "fin" &&
        horas[horas.length - 1] != horas[0]
      ) {
        horas.push("fin");
      }
      if (
        escrito[escrito.length - 1] != "fin" &&
        horas[horas.length - 1] != horas[0]
      ) {
        escrito.push("fin");
      }
      if (
        grabando[grabando.length - 1] != "fin" &&
        horas[horas.length - 1] != horas[0]
      ) {
        grabando.push("fin");
      }if (contador<1){
      console.log("fin de conexion");
      contador++;
      }
      if (terminar == false) {
        terminar = true;
      }
    } else {
      contador = 0;
      //console.log(estado);
      for (let i = 0; i < els.length; i++) {
        estado = els[i].innerText;
        //console.log(estado.length);
        segundoActual = parseInt(fecha.getSeconds());

        switch (estado) {
          case "en línea":
            hora =
              fecha.getHours() +
              " " +
              fecha.getMinutes() +
              " " +
              fecha.getSeconds();
            horas.push(hora);

            break;

          case "escribiendo...":
            hora =
              fecha.getHours() +
              " " +
              fecha.getMinutes() +
              " " +
              fecha.getSeconds();
            escrito.push(hora);
            horas.push(hora + " escribiendo");
            break;

          case "grabando audio...":
            hora =
              fecha.getHours() +
              " " +
              fecha.getMinutes() +
              " " +
              fecha.getSeconds();

            grabando.push(hora);
            horas.push(hora + " grabando audio");
            break;

          case "haz clic aquí para información de contacto":
            if (horas[horas.length - 1] != "fin") {
              horas.push("fin");
            }
            if (escrito[escrito.length - 1] != "fin") {
              escrito.push("fin");
            }
            if (grabando[grabando.length - 1] != "fin") {
              grabando.push("fin");
            }
            console.log("fin de conexion");
            if (terminar == false) {
              terminar = true;
            }
            break;
          case "":
            if (horas[horas.length - 1] != "fin") {
              horas.push("fin");
            }
            if (escrito[escrito.length - 1] != "fin") {
              escrito.push("fin");
            }
            if (grabando[grabando.length - 1] != "fin") {
              grabando.push("fin");
            }
            console.log("fin de conexion");
            if (terminar == false) {
              terminar = true;
            }
            break;
        }
      }
    }
  }

  return horas;
}

function formateaHoras(array) {
  var arrayDevuelto = [];
  //console.log(array);
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element == "fin" && i != 0) {
      if (primerElemento == null) {
        primerElemento = 0;
      }

      ultimoElemento = i - 1;

      console.log(
        array[primerElemento] + " comienzo de conexion de " + array[0]
      );
      console.log(array[ultimoElemento] + " fin de conexion de " + array[0]);

      // guardo en el array que voy a devolver el inicio y el final
      arrayDevuelto.push(
        array[primerElemento] + " comienzo de conexion de " + array[0] + "\n"
      );
      arrayDevuelto.push(
        array[ultimoElemento] + " fin de conexion de " + array[0] + "\n"
      );

      primerElemento = ultimoElemento + 2;
    }

    if (i == horas.length - 1) {
      console.log(array[array.length - 1] + "  de conexion");
    }
  }

  var primerElemento = 0;
  var ultimoElemento;
  var grabando = false;
}

myFunction();
