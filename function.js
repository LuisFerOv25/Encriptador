function encr_desc() {
    var texto = document.getElementById("encr_desc").value.split("");

    for (var i = 0; i < texto.length; i++) {

        switch (texto[i]) {
            case 'a':
                texto[i] = 'ai';
                break;
            case 'e':
                texto[i] = 'enter';
                break;
            case 'i':
                texto[i] = 'imes';
                break;
            case 'o':
                texto[i] = 'ober';
                break;
            case 'u':
                texto[i] = 'ufat';
                break;
        }

    }
    let nuevaOracion = texto.join("");
    let envio_texto = document.querySelector('#resultado');
    envio_texto.value = nuevaOracion;
}

function desencr_desc() {

    var texto = document.getElementById("encr_desc").value;
    texto = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    let envio_texto = document.querySelector('#resultado');
    envio_texto.value = texto;
}


function copiar() {
    let contenido = document.querySelector("#resultado");
    if (contenido != "") {
        contenido.select();
        document.execCommand('copy');
        contenido.value = "";

        alert("Contenido copiado")
    }

}