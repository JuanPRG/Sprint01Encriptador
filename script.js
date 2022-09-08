const textoOriginal = document.querySelector(".input-texto");
const textoModificado = document.querySelector(".mensaje-encriptado");

function botonEncriptar() {

    const textoEncriptado = encriptar(textoOriginal.value);
    console.log(textoEncriptado);
    textoModificado.value = textoEncriptado;
    textoOriginal.value = "";
    textoModificado.style.backgroundImage="none";

}

function encriptar (stringEncriptada) {

    
    var stringEncriptada = stringEncriptada.toLowerCase();


    stringEncriptada = stringEncriptada.replace(/e/g,"enter");
    stringEncriptada = stringEncriptada.replace(/i/g,"imes");
    stringEncriptada = stringEncriptada.replace(/a/g,"ai");
    stringEncriptada = stringEncriptada.replace(/o/g,"ober");
    stringEncriptada = stringEncriptada.replace(/u/g,"ufat");

    return stringEncriptada;

}

function botonDesencriptar() {

    const textoEncriptado = desencriptar(textoOriginal.value);
    console.log(textoEncriptado);
    textoModificado.value = textoEncriptado;
    textoOriginal.value = "";
    mensaje.style.backgroundImage="none"

}

function desencriptar (stringEncriptada) {

    var stringEncriptada = stringEncriptada.toLowerCase();

    stringEncriptada = stringEncriptada.replace(/enter/g,"e");
    stringEncriptada = stringEncriptada.replace(/imes/g,"imes");
    stringEncriptada = stringEncriptada.replace(/ai/g,"a");
    stringEncriptada = stringEncriptada.replace(/ober/g,"o");
    stringEncriptada = stringEncriptada.replace(/ufat/g,"u");

    return stringEncriptada;
}

function copiar() {
    textoModificado.select();
    navigator.clipboard.writeText(textoModificado.value);
    alert("Texto copiado: " + textoModificado.value);
    textoModificado.value = "";
    textoModificado.style.backgroundImage="none"
}






