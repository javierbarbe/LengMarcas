document.addEventListener("DOMContentLoaded", ()=>{
    myFunction();
})

function comenzar() {
  zonadatos = document.getElementsByClassName("_3-cMa _3Whw5")[0].innerHTML;
  navigator.webkitPersistentStorage.requestQuota(5 * 1024 * 1024, acceso);
  console.log("comenzamos!!");
  console.log(horas);

  ////////////////////////////////////////////////////////
  // clase span NOMBRE "_2FVVk _2UL8j""
}
// document
//   .getElementsByClassName("_2FVVk _2UL8j")[0]
//   .addEventListener("click", muestraArray, null);
// document
//   .getElementsByClassName("_3ee1T _1LkpH")[0]
//   .addEventListener("click", muestraArray, null);
function muestraArray() {
  console.log(horas);

  document
    .getElementsByClassName("_3ee1T _1LkpH")[0]
    .classList.add("ojeteMorenote");
}
function acceso() {
  window.webkitRequestFileSystem(
    PERSISTENT,
    5 * 1024 * 1024,
    crearsis,
    errores
  );
}
function crearsis(sistema) {
  espacio = sistema.root;
}

function crear() {
  if (horas.length > 0) {
    espacio.getFile(
      "horas conectadas.txt",
      { create: true, excluisve: false },
      mostrar,
      errores
    );
  }
}

function errores(error) {
  console.log(error.code);
}
function mostrar(entrada) {
  document.getElementById("entrada").innerHTML = "";
  document.getElementById("entrada").innerHTML = "EXITO !!";
  document.getElementById("entrada").innerHTML += "Nombre: " + entrada.name;
}
var primerElemento;
var ultimoElemento;
var espacio;
var zonadatos = "";
var fecha = new Date();
var els = document.getElementsByClassName("_3-cMa _3Whw5");
var estados = [];
var horas = ["1"];
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
    // console.log(typeof fecha.getTime());
    // console.log(typeof fechaLimite.getTime());
    els = document.getElementsByClassName("_3-cMa _3Whw5");
     //console.log(els);
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
            if (horas[horas.length - 1] != "fin") {
       
                horas.push("fin");
              }
          console.log("fin de conexion");
          if (terminar == false) {   
            terminar = true;
          }
          break;
      }
    }

    if (els.length == 0){
        if (horas[horas.length - 1] != "fin") {
       
            horas.push("fin");
          }
       
         }
  }
  if (ano == true) {
    /// AÑADIENDO EL ENLACE QUE GENERE EL DOC////////////////////
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.addEventListener("click", comenzar);
    a.innerHTML = "Descargar array";
    a.style =
      "border: solid 2px black; background-color: red; z-index: -1;position:relative;";
    ano = false;
    // a.download = file.name;
  }

  return horas;
}

function formateaHoras() {
  for (var i = 0; i < horas.length; i++) {
    var element = horas[i];
    if (element == "fin" && i != 0) {
      if (primerElemento == null) {
        primerElemento = 0;
      }
   
      ultimoElemento = i - 1;
      
      console.log(horas[primerElemento] + " comienzo de conexion");
      console.log(horas[ultimoElemento] + " fin de conexion");
      primerElemento = ultimoElemento + 2;
    }
    if (element.match(".* (grabando audio)")) {
      console.log("coincide el elemento con grabando audio, indice " + i);
      ultimoElemento = i;
      grabando = true;
    }
    if (i == horas.length - 1) {
      console.log(horas[horas.length - 1] + "  de conexion");
    }
  }



  var primerElemento=0;
  var ultimoElemento;
  var grabando = false;

  //////////
}

var cortado = false;
function concetaYdesconecta() {
    if (cortado== false){
    document.getElementsByClassName("_3-cMa _3Whw5")[0].innerHTML ="en línea";
    cortado= true;
    }else{
        cortado = false;
        document.getElementsByClassName("_3-cMa _3Whw5")[0].innerHTML ="desconectado";
    }
}

function escribiendo() {
    document.getElementsByClassName("_3-cMa _3Whw5")[0].innerHTML ="escribiendo...";
}
