function cambiar_pantalla(){
    document.getElementById('texto-salida').style.display = "block";
    document.getElementById("text-1").style.display = 'none';
    document.getElementById("text-2").style.display = 'none';
    document.getElementById("div-salida").style.background = 'white';
}


function codifica() {
    console.log("* codifica mensaje *");
    let texto = document.getElementById("contenido-text").value;

    if(texto.length==0){
        alert("Por favor ingresa un mensaje válido.");
        return;
    }
    texto = texto.toUpperCase();
    let textoSalida = [];
    for(let letra of texto) {
        switch(letra){
            case 'A':
                textoSalida.push('AI');
            break;
            case 'E':
                textoSalida.push('ENTER');
            break;
            case 'I':
                textoSalida.push('IMES');
            break;
            case 'O':
                textoSalida.push('OBER');
            break;
            case 'U':
                textoSalida.push('UFAT');
            break;
            default:
                textoSalida.push(letra);
            break;
        }
    }
    let textoSalidaStr = textoSalida.join("");
    document.getElementById('texto-salida').innerHTML = textoSalidaStr;

    cambiar_pantalla();
    console.log("Mensaje codificado -> " + textoSalidaStr);
    return;
}


function decodifica(){
    console.log("* decodifica mensaje *");

    var mapaReplace = {
        AI:"A",
        ENTER:"E",
        IMES:"I",
        OBER:"O",
        UFAT:"U"
     };

    let textoCodificado = document.getElementById('contenido-text').value;
    
    if(textoCodificado.length==0){
        alert("Por favor ingresa un mensaje válido.");
        return;
    }

    let textoDecoStr = textoCodificado.replace(/AI|ENTER|IMES|OBER|UFAT/gi, function(match){
        return mapaReplace[match];
    });

    console.log("Mensaje decodificado -> " + textoDecoStr);
    document.getElementById('texto-salida').innerHTML = textoDecoStr;
    cambiar_pantalla();
    return;
}


function limpiar_pantalla() {
    console.log("* limpia pantalla *")
    document.getElementById('text-1').style.display = "block";
    document.getElementById('text-2').style.display = "block";
    document.getElementById('contenido-text').value = "";
    document.getElementById('texto-salida').style.display = "none";
    
    document.getElementById("div-salida").style.backgroundImage = "url('./assets/img/encode.png')";
    document.getElementById("div-salida").style.backgroundRepeat = 'no-repeat';
    document.getElementById("div-salida").style.backgroundPosition = 'top center';
    document.getElementById("div-salida").style.backgroundSize = '250px';

    return;
}


function copiar_texto() {
    console.log('* copiar texto *');
    let textoParrafo = document.getElementById("texto-salida");
    navigator.clipboard.writeText(textoParrafo.textContent);

    return;
}