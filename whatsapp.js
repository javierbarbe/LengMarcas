var primerElemento;
var ultimoElemento;
var espacio;
var zonadatos = "";
var fecha = new Date();
var els = document.getElementsByClassName("_3-cMa _3Whw5");
var estados = [];
var horas = [];
var hora = "";
var ano = true;
var salir = false;
var terminar = false;
var segundoActual = 0;
var fechaLimite = new Date(2021, 07, 31, 14, 52, 0);
// cumpleanos = new Date(1995,11,17,3,24,0);

function myFunction() {
  if (salir == false) {
    setInterval(alertFunc, 2200);
  } else {
    console.log("FINITO ENCANTATEM");
  }
}
function alertFunc() {
  if (parseInt(fecha.getTime()) > parseInt(fechaLimite.getTime())) {
    //console.log("es menor la hora");
    salir = true;
    stop();
  } else {
    var estado = "";
    fecha = new Date();
    
    els = document.getElementsByClassName("_3-cMa _3Whw5");

    for (let i = 0; i < els.length; i++) {
      estado = els[i].innerText;
       
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
          horas.push(hora + " escribiendo");
          break;

        case "grabando audio...":
          hora =
            fecha.getHours() +
            " " +
            fecha.getMinutes() +
            " " +
            fecha.getSeconds();
          horas.push(hora + " grabando audio");
          break;

        case "desconectado":
          horas.push("fin");
          console.log("fin de conexion");
          if (terminar == false) {
            terminar = true;
          }
          break;
      }
    }
    if (els.length == 0) {
       
      if (horas[horas.length - 1] != "fin") {
        for (var i = 0; i < horas.length - 1; i++) {
          if (i != 0) {
            horas.push("fin");
          }
        }
      }
    }
 
  } 
  return horas;
}

function formateaHoras(arrayHoras) {
  for (var i = 0; i < arrayHoras.length; i++) {
    var element = arrayHoras[i];
    if (element == "fin" && i != 0) {
      if (primerElemento == null) {
        primerElemento = 0;
      }
      // console.log(i + " valor del index cuando el estado es fin");
      ultimoElemento = i - 1;
      //   for ( var i =  primerElemento; i<ultimoElemento; i++){
      //       console.log(arrayHoras[i]);
      //   }
      console.log(arrayHoras[primerElemento] + " comienzo de conexion");
      console.log(arrayHoras[ultimoElemento] + " fin de conexion");
      primerElemento = ultimoElemento + 2;
    }
    if (element.match(".* (grabando audio)")) {
      console.log("coincide el elemento con grabando audio, indice " + index);
      ultimoElemento = index;
      grabando = true;
    }
    if (i == arrayHoras.length - 1) {
      console.log(arrayHoras[arrayHoras.length - 1] + "  de conexion");
    }
  } 

  var primerElemento = 0;
  var ultimoElemento;
  var grabando = false;
 
}

