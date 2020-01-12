function compruebaTo(){
    var nomComp=0;
    var nombre= document.getElementById('nombre').value;
    if (nombre.length>0){
         nomComp=1;
    }else{
        alert('por favor Nombre no puede quedar vacio');
        document.getElementById('nombre').focus();
    }
    var ape1Comp=0;
    var ape1= document.getElementById('apellido1').value;
    if(ape1.length>0){
        ape1Comp=1;
    }else{
        alert('por favor Apellido1 no puede quedar vacio');
        
    }
    var ape2Comp=0;
    var ape2= document.getElementById('apellido2').value;
    if(ape2.length>0){
        ape2Comp=1;
    }else{
        alert('por favor Apellido2 no puede quedar vacio');
    }
    if (nomComp!=0){
        alert('nombre relleno');
        if(ape1Comp!=0){
            alert('apellido1 relleno');
            if(ape2Comp!=0){
                alert('apellido2 relleno');
                document.getElementById('areaComentario').value="Datos introducidos correctamente";
            } else{
                document.getElementById('areaComentario').value="Datos introducidos INCORRECTOS";
            }
        }else{
            document.getElementById('areaComentario').value="Datos introducidos INCORRECTOS";
        }
    }else{
        document.getElementById('areaComentario').value="Datos introducidos INCORRECTOS";
    }

/* var Comp=0;
    var contra= document.getElementById('pass1').value;
    if(contra.length>0){
        contraComp=1;
    }else{
        alert('por favor Contraseña no puede quedar vacio');
    }
    var contra2=document.getElementById('pass2').value;
    if(contra2!=contra){
        alert('Las contraseñas no coinciden');
        contraComp=0;
        document.getElementById('pass2').focus();
    }
    var correoComp=0;
    var correo= document.getElementById('correo').value;
    if(correo.length>0){
        correoComp=1;
    }else{
        alert('Por favor introduzca correo');
    }
    */

}// fin compruebaTo()

function pon_submenu(){
       
   
    var carnetSi=document.getElementById('carnetSi').checked;
    
    if (carnetSi==true){
            document.getElementById('cochePropio').style.display = "inline";
           
    } else{
        document.getElementById('cochePropio').style.display = "none";
        document.getElementById('menuColor').style.display = "none";
        document.getElementById('marcaCoche').style.display= " none";
    }

   
    
} // fin pon_submenu

function submenu2(){
    var cocheSi=document.getElementById('cocheSi').checked;
    if( cocheSi==true){
        document.getElementById('menuColor').style.display = "inline";
        document.getElementById('marcaCoche').style.display= "inline";
    }else{
        document.getElementById('menuColor').style.display = "none";
        document.getElementById('marcaCoche').style.display= "none";
        // document.getElementById('autoCol').
    }
}// fin submenu2

