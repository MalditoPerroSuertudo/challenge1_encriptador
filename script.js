const entrada = document.querySelector(".izq__entrada");
const salida = document.querySelector(".der__salida");
const $content = document.getElementById("der__salida");
const $btn = document.getElementById("der__btn");

function btnEncriptar() {
    const textoEncriptado = encriptar(entrada.value);
    salida.value = textoEncriptado;
    entrada.value = "";
    salida.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(entrada.value);
    salida.value = textoEncriptado;
    entrada.value = "";
    salida.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado
}

$btn.addEventListener("click", e => {
    $content.select();
    document.execCommand("copy");
    
    copymessage.innerHTML = "Copiado al portapaeles";

    setTimeout(()=> copymessage.innerHTML = "", 3000);
})

function mostrar(){
    
        if(entrada.includes(toLowerCase)){
            swal({
                title: "Revisa tu texto",
                text: "no se permiten mayusculas ni caracteres especiales",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        

        }

    return stringEncriptado

}
