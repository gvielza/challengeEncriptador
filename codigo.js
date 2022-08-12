/*Definiendo valores
a=ger
e=toy
i=fhk
o=lin
u=but
*/
 var body=document.querySelector("body");
function encriptar() {
  let text = document.getElementById("textarea1").value;
  var salida = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] == "a") {
      salida = salida + "ger";
    } else if (text[index] == "e") {
      salida = salida + "toy";
    } else if (text[index] == "i") {
      salida = salida + "fhk";
    } else if (text[index] == "o") {
      salida = salida + "lin";
    } else if (text[index] == "u") {
      salida = salida + "but";
    } else {
      alert("Para encriptar debe introducir solo letras!");
      break;
    }
  }
  document.getElementById("salida").innerHTML = salida;
}

function desencriptar() {
    let salida="";
  let text = document.getElementById("textarea1").value;
  for (let index = 0; index < text.length; index++) {
    if(text[index]=="g"&&text[index+1]=="e"&&text[index+2]=="r"){
        salida=salida+"a"
    }
    if(text[index]=="t"&&text[index+1]=="o"&&text[index+2]=="y"){
        salida=salida+"e"
    }
    if(text[index]=="f"&&text[index+1]=="h"&&text[index+2]=="k"){
        salida=salida+"i"
    }
    if(text[index]=="l"&&text[index+1]=="i"&&text[index+2]=="n"){
        salida=salida+"o"
    }
    if(text[index]=="b"&&text[index+1]=="u"&&text[index+2]=="t"){
        salida=salida+"u"
    }
  }
  document.getElementById("salida").innerHTML = salida;
  
}

function copiar() {
  let textosalida = document.getElementById("salida").value;
  navigator.clipboard.writeText(textosalida); //copiamos el texto para pegar posteriormente
  document.getElementById("salida").style.border = "2px solid green";
  document.getElementById("copiar").value = "Copiado!";
  
}

function resetear() {
  location.reload();
}
function reset(){
document.getElementById("salida").style.border = "1px solid white";
  document.getElementById("copiar").value = "Copiar";
}
