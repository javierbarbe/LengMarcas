var letras= 'abcde fghijklmnñopqrstuvwxyz';
var numeros= '0123456789';
var barras= '/';
var letras_may='ABC DEFGHIJKLMNÑOPQRSTUVWZXYZ';
function diaActual(){
var diaz=new Date();
document.formu.write(diaz);
}

function foco(){
    document.getElementById('usuario').focus();
}
function VerNombre(){
    var nombre= document.formu.nombre.value;
    var nombreComprobado= 1;
    if (nombre.length<1){
        alert('este campo no puede quedar vacio');
        nombreComprobado=0;
    }
    for (var i=0;i<nombre.length;i++){
      
        var pos= nombre.charAt(i); 
        alert(pos);
            if(letras.indexOf(pos,0)==-1 && letras_may.indexOf(pos,0)==-1){                      
                alert(nombreComprobado) ;   
                nombreComprobado=0;
                document.formu.nombre.value="";
                                } else{
                                    alert(nombre+ ' es correcto');
                                }
                    
                
        } alert(nombreComprobado);
        return nombreComprobado;
    }

function comp_apellido(){
        var apellido= document.formu.apellidosin.value;
        var apellidoComprobado= 1;
        if (apellido.length<1){
            alert('este campo no puede quedar vacio');
            apellidoComprobado=0;
        }
        for (var i=0;i<apellido.length;i++){
          
            var pos= apellido.charAt(i); 
            alert(pos);
                if(letras.indexOf(pos,0)==-1 && letras_may.indexOf(pos,0)==-1){                      // no me tira
                    alert(nombreComprobado) ;   
                    apellidoComprobado=0;
                    document.formu.apellidos.value=" ";
                    document.formu.apelldios.focus();
                                    } else{
                                        alert(apellido+ ' es correcto');
                                    }
                        
                    
            } alert(apellidoComprobado)
            return apellidoComprobado;
        }


function comp_usuario (){
var usuario  = document.formu.usuario.value; 
var nombreComp = 1;
 if(usuario.length==8){
    // alert('El nombre tiene 8 caracteres de longitud');
     comp_caracteres ();
 } else {
     alert('el nombre no cumple condicion de =8');
     nombreComp=0;
 }
 return nombreComp;
}

 function comp_caracteres (){
     var usuario = document.formu.usuario.value;
     var carpos;  //variable para guardar cada caracter
     var usuarioComp = 1;  //empiezo ok
     alert(usuario+' comprobando caracteres');
     var i;
     for (i = 0; i < usuario.length; i++) {
        carpos = usuario.charAt(i);
      // alert(carpos);
        if(letras.indexOf(carpos,0) == -1 && letras_may.indexOf(carpos,0) == -1){  //no es una letra
            if(numeros.indexOf(carpos,0) == -1) {   //no es un número
                alert('contiene caracteres no admitidos');
                usuarioComp = 0;
               // document.formu.usuario.value=" ";
                document.formu.usuario.focus();
            }
        }   
    } alert(usuarioComp)
    return usuarioComp;
}

function fDni(){
    var digiDni=document.getElementById('Dni').value;
     var comp_dni=1;

    if (digiDni.length<9){
        alert('demasiado corto tu '+digiDni);
        comp_dni=0;
    }       else {
                 var digitDni= digiDni.toString();
                 var numer= digitDni.substr(0,digitDni.length-1);
                 var letroak= digitDni.substr(digitDni.length-1,1) ;
                alert(numer);
                alert(letroak);
                        for(var a=0; a<numer.length;a++){
                             var cifra= numer.indexOf(a);
                        
                                        if(isNaN(numer)){
                                       // alert('hay algo en los 8 primeros caracteres que es un NaN');
                                        comp_dni=0;
                                        } 
                     } if( letras_may.indexOf(letroak)==-1){
                     alert('lo ultimo '+ letroak+' tiene que ser una letra mayuscula');
                     comp_dni=0;
                    }

    alert(comp_dni);
        
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
            alert('correo correcto')
    }   else {
        correoComp=0; 
        alert('correoincorrecto') //validar solamente que contenga @
    }  return correoComp;       
 }

function comp_contraseña(){
var contraseña= document.formu.contraseña.value;
var contraseñaComp;
if(contraseña.length==8){
    alert('la contraseña tiene 8 caracteres');
    contraseñaComp=1;

}else{
    alert('la contraseña no cumple condiciones');
    contraseñaComp=0;
}
 return contraseñaComp;
} 

function fPostal(){
    var compFpostal=1;
     var direc= document.getElementById('cpostal').value;
    var longitudes=direc.length;
    if(direc.length==5){
        for(var d=0;d<longitudes;d++){
            numPos=direc.charAt(d);
            if(numeros.indexOf(numPos,0)==-1)  {
                //document.getElementById('cpostal').value='';
                //alert(numPos + ' no es un nmero NaN');
                compFpostal=0;  
            }
        }
    }else {
        //document.getElementById('cpostal').value='';
            alert('demasiado corto el cod postal '+direc);
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

function comp_hijos(){
    var hijosComp=1;
    if(document.getElementById('hijosSi').checked.value!= true && document.getElementById('hijosNo').checked.value!=true){
        alert('los dos no pueden ser falsos'); 

    }
}

 function comp_Fecha(){                                    
    var fech=document.getElementById('fecha').value;
    var fechComp=1;
    if (fech.length!=10){
        alert('demasiado corta o demasiado larga');
        fechComp=0;
    } else{ 
            for(var a=0;a<fech.length;a++){
                var numPos= fech.charAt(a);
                
                if(numeros.indexOf(numPos)==-1 && barras.indexOf(numPos)==-1){
                    alert(  ' solo admite numeros y /');
                    fechComp=0;
                }
        }
    var diast=fech.substr(0,2); 
    var barra1=fech.substr(2,1);
    var mest=fech.substr(fech.indexOf('/')+1,fech.indexOf('/'));
    var barra2=fech.substr();
    var anyo=fech.substr(6,10);
        alert(anyo);
    alert('dia :'+ diast+  ' mes :'+mest+ ' año :'+ anyo);
    alert(fechComp);
} return fechComp;
}

function final (){

    var usu = comp_caracteres ();
    var Correo_correcto= correoElectronico();
    var PostalCodeCorrecto= fPostal();
    var Dnifinal= fDni();
    var contraFinal=comp_contraseña();
    var nombreApe=VerNombre();
    var apeNombre=comp_apellido();
    var fechTotal=comp_Fecha();

    if (usu != 1) {
        document.formu.usuario.value = "";
        document.formu.usuario.value.focus();
        return false;
    }  
        else 
                {
                 if(Correo_correcto !=1){
                document.formu.correo.value="";
                document.formu.correo.focus();
                return false;
                  } else {
                      alert('seguimos comprobando  ahora codPostal');
                      if (PostalCodeCorrecto !=1){
                          document.formu.cpostal.value=" ";
                          document.formu.cpostal.focus();
                          return false;
                              }else  {
                                    alert('comprobando ahoraDNI');
                                   // alert(Dnifinal);
                                    if(Dnifinal !=1){
                                        document.getElementById('Dni').value="";
                                        document.getElementById('Dni').focus();
                                        alert('dni no es correcto')
                                    } else{
                                        alert('continuamos con nombre');
                                  
                                                if(nombreApe!=1){
                                                    alert('nombre caracters no admitidos');
                                                    document.getElementById(nombre).value=" ";
                                                    document.getElementById(nombre).focus();
                                                }else {
                                                    alert('continuamos con apellido');
                                                         if (apeNombre!=1){
                                                            alert('apellido mal');
                                                            document.getElementById(apellidos).value=" ";
                                                            document.getElementById(apellidos).focus();
                                                         }else {
                                                                alert('continuamos con contraseña');
                                                                if( contraFinal!=1){
                                                                    alert ('contraseña no cumple long =8');
                                                                    document.getElementById(contraseña).value=" ";
                                                                    document.getElementById(contraseña).focus();
                                                                }else{
                                                                    alert('seguimos con fecha');
                                                                    if( fechTotal!=1){
                                                                        alert('fecha incorrecta\n formato dd/mm/aaaa');
                                                                        document.getElementById('fecha').value=" ";
                                                                        document.getElementById('fecha').focus();
                                                                    }else {
                                                                        alert('seguimos con checkbox');
                                                                        if(document.getElementById('hijosSi').checked.value!= true && document.getElementById('hijosNo').checked.value!=true){
                                                                     alert('necesario elegir una opcion');
                                                                        }
                                                                }

                                                         }
                                                }
                                        
                                    }
                              }
                  }
    }
}

//function contraseña(str)