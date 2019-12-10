var letras= 'abcde fghijklmnñopqrstuvwxyz';
var numeros= '0123456789';
var barras= '/';
var letras_may='ABC DEFGHIJKLMNÑOPQRSTUVWZXYZ';
// function diaActual(){
//     var f = new Date();
//     document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
// }

function foco(){
    document.getElementById('usuario').focus();
}
function VerNombre(){
    var nombre= document.formu.nombre.value;
    var nombreComprobado= 1;
    if (nombre.length<1){
       // alert('este campo no puede quedar vacio');
        nombreComprobado=0;
    }
    for (var i=0;i<nombre.length;i++){
      
        var pos= nombre.charAt(i); 
        //alert(pos);
            if(letras.indexOf(pos,0)==-1 && letras_may.indexOf(pos,0)==-1){                      
                //alert(nombreComprobado) ;   
                nombreComprobado=0;
                document.formu.nombre.value="";
                                } /*else{
                                    alert(nombre+ ' es correcto');
                                }*/
                    
                
        } //alert(nombreComprobado);
        return nombreComprobado;
    }

function comp_apellido(){
        var apellido= document.formu.apellidosin.value;
        var apellidoComprobado= 1;
        if (apellido.length<1){
            //alert('este campo no puede quedar vacio');
            apellidoComprobado=0;
        }
        for (var i=0;i<apellido.length;i++){
          
            var pos= apellido.charAt(i); 
            //alert(pos);
                if(letras.indexOf(pos,0)==-1 && letras_may.indexOf(pos,0)==-1){                      // no me tira
                    //alert(apellidoComprobado) ;   
                    apellidoComprobado=0;
                    document.formu.apellidos.value=" ";
                    document.formu.apelldios.focus();
                                    }/* else{
                                       // alert(apellido+ ' es correcto');
                                    }*/
                        
                    
            } //alert(apellidoComprobado)
            return apellidoComprobado;
        }


function comp_usuario (){
var usuario  = document.formu.usuario.value; 
var nombreComp = 1;
 if(usuario.length==8){
    // alert('El nombre tiene 8 caracteres de longitud');
     comp_caracteres ();
 } else {
     //alert('el nombre no cumple condicion de =8');
     nombreComp=0;
 }
 return nombreComp;
}

 function comp_caracteres (){
     var usuario = document.formu.usuario.value;
     var carpos;  //variable para guardar cada caracter
     var usuarioComp = 1;  //empiezo ok
     //alert(usuario+' comprobando caracteres');
     var i;
     for (i = 0; i < usuario.length; i++) {
        carpos = usuario.charAt(i);
      // alert(carpos);
        if(letras.indexOf(carpos,0) == -1 && letras_may.indexOf(carpos,0) == -1){  //no es una letra
            if(numeros.indexOf(carpos,0) == -1) {   //no es un número
               // alert('contiene caracteres no admitidos');
                usuarioComp = 0;
               // document.formu.usuario.value=" ";
                document.formu.usuario.focus();
            }
        }   
    } //alert(usuarioComp)
    return usuarioComp;
}

function fDni(){
    var digiDni=document.getElementById('Dni').value;
     var comp_dni=1;

    if (digiDni.length<9){
        //alert('demasiado corto dni numero '+digiDni);
        comp_dni=0;
    }       else {
                 var digitDni= digiDni.toString();
                 var numer= digitDni.substr(0,digitDni.length-1);
                 var letroak= digitDni.substr(digitDni.length-1,1) ;
               // alert(numer);
                //alert(letroak);
                                            
                 if(isNaN(numer)){
               //  alert('hay algo en los 8 primeros caracteres que es un NaN');
                 comp_dni=0;
                } 
                   
                 if( letras_may.indexOf(letroak)==-1){
                // alert('lo ultimo '+ letroak+' tiene que ser una letra mayuscula');
                 comp_dni=0;
                    }

    //alert(comp_dni);
        
    } 
    return (comp_dni);
}
        /*
    
        comp_dni=0;
    }else{
        for(var a=0;a<digiDni.length;a++){
            
            var cifra=digiDni.charAt(a);
        if (numeros.indexOf(cifra)==-1){
            alert('introduce numeros por favar')
        }else {
            
        if(numeros.indexOf(cifra,8)!=-1) { 
         alert(' has introducido  un numero como ultimo elemento mentecato');
    } else{
        if(letras_may.indexOf(cifra,8)==-1){
            alert('lo ultimo tiene qe ser una letra MAYUSCULA')
        }}}
}*/


function correoElectronico(){
    var correoElect=document.formu.correo.value;
    var correoComp=1;
    if (correoElect.indexOf('@',0) !=-1){
          //  alert('correo correcto')
    }   else {
        correoComp=0; 
        //alert('correoincorrecto') //validar solamente que contenga @
    }  return correoComp;       
 }

function comp_contrasenya(){
var contrasenya= document.formu.contrasenya.value;
var contrasenyaComp;
if(contrasenya.length==8){
    //alert('la contraseña tiene 8 caracteres');
    contrasenyaComp=1;

}else{
    //alert(contrasenya.length);
   // alert('la contraseña no mide 8');
    contrasenyaComp=0;
}
 return contrasenyaComp;
} 

function fPostal(){
    var compFpostal=1;
     var direc= document.getElementById('cpostal').value;
    var longitudes=direc.length;

    if(longitudes==5){
        
                if(isNaN(direc))  {
                                            //document.getElementById('cpostal').value='';
                                        // alert( ' no es un nmero NaN');
                compFpostal=0;  
                                                // }
        
             }                              //document.getElementById('cpostal').value='';
                      
} else{
    //alert('longitud incorrecta el cod postal '+direc);
    compFpostal=0; 
}
     
return compFpostal;
}
/* var direct=parseInt(direc);
                     if(direct<=99999) {
                        alert(direct+ ' Cpostal correcto');
                            }else{
                                    alert(direct+' codPostal INCORRECTO')
                                 }
            }
                        }else{
                                    alert('demasiado corto')
                             }*/

function quita_submen(){
  var eleccionNo= document.getElementById('hijosNo').checked;
  //alert(eleccionNo);
  if(eleccionNo==true){
    document.getElementById('menuOculto').style.display = "none";
  }
}

function pon_submenu(){
    //var hijosComp=1;
    var hijosEleccionSi=document.getElementById('hijosSi').checked;
    
    if (hijosEleccionSi==true){
            document.getElementById('menuOculto').style.display = "contents";
        } 
        
   
    
}

 function comp_Fecha(){                                    
    var fech=document.getElementById('fecha').value;
    var fechComp=1;
    if (fech.length!=10){
      //  alert('demasiado corta o demasiado larga');
        fechComp=0;
    } else{ 
            for(var a=0;a<fech.length;a++){
                var numPos= fech.charAt(a);
                
                if(numeros.indexOf(numPos)==-1 && barras.indexOf(numPos)==-1){
                 //   alert(  ' solo admite numeros y /');
                    fechComp=0;
                }
        }
    var diast=fech.substr(0,2); 
    var barra1=fech.substr(2,1);
    var mest=fech.substr(fech.indexOf('/')+1,fech.indexOf('/'));
    var barra2=fech.substr();
    var anyo=fech.substr(6,10);
    anyo=parseInt(anyo);
    mest=parseInt(mest);
    diast=parseInt(diast);
    if(anyo<=1920 || anyo >=2019 || mest <1 || mest>12 || diast <1 ||diast >31){
       //alert('no has podido nacer en esa fecha');
         fechComp=0;
        }
    
    //alert('dia :'+ diast+  ' mes :'+mest+ ' año :'+ anyo);
    //alert(fechComp);
} return fechComp;
}

function enviar(){
   
    }


function comp_ocupacion(){
    var ocuFinal=1; 
    var estudiant= document.getElementById('estudiante').selected;
    var desempl= document.getElementById('desempleado').selected;
    var ama= document.getElementById('amaDeCasa').selected;
    if(estudiant !=1 && desempl!=1 && ama!=1){
        ocuFinal=0;
        //alert('elige ocupacion');
    } return ocuFinal;
}

function comp_ciudad(){
    var ciudadComp=1;
    var mad= document.getElementById('Madrid').selected;
    var alcala= document.getElementById('Alcala').selected;
    var meco=document.getElementById('Meco').selected;
   
    
        
      if(meco != true  && alcala !=true && mad != true){
           ciudadComp=0;
          }return ciudadComp;
}

function deshabilita_movil(){
    var noMovil= document.getElementById('movilNo').checked;
  //  alert(noMovil);
    if(noMovil==true){
        document.getElementById('marca').disabled=true;
        document.getElementById('defecto').selected = true; 
    }
}

function habilita_movil(){
    var movilElecto= document.getElementById('movilSi').checked;
    
   // alert(movilElecto);
   
    if(movilElecto==true){
        document.getElementById('marca').disabled=false;
    }
   
}

function comp_telefono(){
    var numtel=document.getElementById('telefono').value;
    telefComp=1;
    if(numtel.length!=9){
       // alert('numero no coincide con longitud');
        telefComp=0;
        }else {
            if(isNaN(numtel)){
               // alert('introduzca solo digitos plis');
                telefComp=0;
            }
        }return telefComp;
}
function final (){

    var usu = comp_usuario ();
    var Correo_correcto= correoElectronico();
    var PostalCodeCorrecto= fPostal();
    var Dnifinal= fDni();
    var contraFinal=comp_contrasenya();
    var nombreApe=VerNombre();
    var apeNombre=comp_apellido();
    var fechTotal=comp_Fecha();
    var telf= comp_telefono();
    var city= comp_ciudad(); 
    var ocupation= comp_ocupacion();
  

    if (usu != 1) {
        document.formu.usuario.value = "";
        document.formu.usuario.focus();
        return false;
    }  
        else 
                {
                 if(Correo_correcto !=1){
                document.formu.correo.value="";
                document.formu.correo.focus();
                 return false;
                  } else {
                     // alert('seguimos comprobando  ahora codPostal');
                      if (PostalCodeCorrecto !=1){
                          document.formu.cpostal.value="";
                          document.formu.cpostal.focus();
                          return false;
                              }else  {
                                    //alert('comprobando ahoraDNI');
                                   // alert(Dnifinal);
                                    if(Dnifinal !=1){
                                        document.getElementById('Dni').value="";
                                        document.getElementById('Dni').focus();
                                        return false;
                                        alert('dni no es correcto')
                                    } else{
                                      //  alert('continuamos con nombre');
                                  
                                                if(nombreApe!=1){
                                                    alert('nombre caracters no admitidos');
                                                    document.getElementById('nombre').value="";
                                                    document.getElementById('nombre').focus();
                                                    return false;
                                                }else {
                                                  //  alert('continuamos con apellido');
                                                         if (apeNombre!=1){
                                                            alert('apellido mal');
                                                            document.getElementById('apellidosin').value="";
                                                            document.getElementById('apellidosin').focus();
                                                            return false;
                                                         }else {
                                                                //alert('continuamos con contraseña');
                                                                if( contraFinal!=1){
                                                                    alert ('contraseña no cumple long =8');
                                                                    document.getElementById('contraseña').value="";
                                                                    document.getElementById('contraseña').focus();
                                                                    return false;
                                                                }else{
                                                                   // alert('seguimos con fecha');
                                                                    if( fechTotal!=1){
                                                                        alert('fecha incorrecta\n formato dd/mm/aaaa');
                                                                        document.getElementById('fecha').value="";
                                                                        document.getElementById('fecha').focus();
                                                                        return false;
                                                                    }else {
                                                                       // alert('seguimos con checkbox');
                                                                        var optHijosSi=document.getElementById('hijosSi').checked;
                                                                        var optHijosNo=document.getElementById('hijosNo').checked;
                                                                        if(optHijosNo == false && optHijosSi== false){
                                                                       // if(document.getElementById('hijosSi').checked!= true && document.getElementById('hijosNo').checked=true){
                                                                     alert('necesario elegir una opcion');
                                                                     return false;
                                                                    }
                                                                     else {
                                                                         //alert ('seguimos con... telefono')
                                                                         if(telf!=1){
                                                                             alert('el telefono no tiene 9 digitos,o tiene letras');
                                                                             document.getElementById('telefono').value="";
                                                                             document.getElementById('telefono').focus();
                                                                             return false;
                                                                         } else{
                                                                            // alert('seguimos con ...ciudad');
                                                                             if(city!=1){
                                                                                 alert('elija una ciudad');
                                                                                 document.getElementById('ciudad').focus();
                                                                                 return false;
                                                                             }else{
                                                                                // alert('seguimos con ocupacion');
                                                                                 if(ocupation!=1){
                                                                                     alert('elija ocupacion');
                                                                                     document.getElementById('ocupacion').focus();
                                                                                     return false;
                                                                                 }else{
                                                                                    // alert('seguimos con movil??')
                                                                                    var movSi=document.getElementById('movilSi').checked;
                                                                                    var movNo=document.getElementById('movilNo').checked;
                                                                             if(movNo == false && movSi== false){
                                                                               alert('necesario elegir una opcion');
                                                                               return false;
                                                                            }else {
                                                                                var mvl1=document.getElementById('iPhone25').selected;
                                                                                var mvl2=document.getElementById('xiaomi').selected;
                                                                                var mvl3=document.getElementById('samsung').selected;
                                                                                if (mvl1!=true && mvl2!= true && mvl3!=true){
                                                                                    alert('necesario elegir una marca de movil');
                                                                                    return false;
                                                                                }else{
                                                                                    alert('formulario comprobado');
                                                                                    
                                                                                 
                                                                                      document.formu.submit();
                                                                                   
                                                                                    }
                                                                            }
                                                                                 }

                                                                             }
                                                                         }
                                                                     }
                                                                        
                                                                }

                                                         }
                                                }
                                        
                                    }
                              }
                  }
    }
                }
}

