function verificarTexto(){
    let inputText = document.querySelector('#encrypted-Text').value;
    
    let regex = /[A-Z0-9]/;

    if (regex.test(inputText)){
        document.getElementById('mensajeError').textContent = 'No se permiten mayusculas ni numeros';
        document.getElementById('encrypted-Text').setCustomValidity('No se permiten mayusculas ni numeros')
        document.querySelector('#encrypted-Text').value = '';
    } else{
        document.getElementById('mensajeError').textContent = '';
        document.getElementById('encrypted-Text').setCustomValidity('');
    }
}

function encriptarTexto(){
    verificarTexto();
    var textoSinEncrip = document.querySelector('#encrypted-Text').value;
    var textoConEncrip = textoSinEncrip.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(textoConEncrip)

    var textArea = document.querySelector('#mensaje')
    textArea.value = textoConEncrip
}

function desencriptadorTexto(){
    var textoConEncrip = document.querySelector('#encrypted-Text').value;
    var textoSinEncrip = textoConEncrip.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    console.log(textoSinEncrip)

    var textArea = document.querySelector('#mensaje')
    textArea.value = textoSinEncrip
}

function copiarTexto(){
    let copiarContenido = document.getElementById('mensaje');
    copiarContenido.select();
    
    document.execCommand('copy');

    copiarContenido.setSelectionRange(0, 0);

    alert("Texto copiado al portapales " + copiarContenido.value);
}



encriptarTexto();
desencriptadorTexto();