var letras="abcdefghijklmnñopqrstuvwxyz"
var numeros="1234567890"
var mayus="AQWERTYUIOPSDFGHJKLÑZXCVBNM"
var simbolos="!·$%&/()=?¿^*¨Ç_:;|@#~~€¬{}[]\ "
function revisaCont(){

    var contra= document.getElementById('contrasenia').value;
    alert(contra);
    var ok=1;
    if (contra.length>=8){
    for(var i=0; i<contra.length; i++){
        var car= contra.charAt(i);
        //alert(car);
        if(letras.indexOf(car)==-1 && numeros.indexOf(car)==-1 )  {  // no hay letras o numeros o mayuscula
            alert('no hay minuscula o numeros ');
            document.getElementById('contrasenia').style.backgroundColor="red";
            var ok=0;
        }else{
            if(mayus.indexOf(car)==-1 && simbolos.indexOf(car)==-1){
                alert('no hay mayuscula o simbolos');
                document.getElementById('contrasenia').style.backgroundColor="red";
                var ok=0;
            }
            // if(numeros.indexOf(car)==-1){ // no hay numeros
            //     alert('no hay numeros');
            //}
        }
    }
} else{
    alert(' tu contraseña es demasiado corta '+ contra.length);
document.getElementById('contrasenia').style.backgroundColor="red";
document.getElementById('contrasenia').value="";
document.getElementById('contrasenia').focus();
}
}

function comparaCont(){
    var contra= document.getElementById('contrasenia').value;
    var contra2=document.getElementById('contrasenia2').value;
    if(contra!=contra2){
        alert('las contraseñas no coinciden');
        document.getElementById('contrasenia2').value="";
        document.getElementById('contrasenia2').style.backgroundColor="red";
        document.getElementById('contrasenia').style.backgroundColor="red";
    }
}

