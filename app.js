var frase = prompt("Insira sua frase aqui.").toUpperCase();
if(frase === "" || frase >= 0){
        alert("Erro! Digite apenas letras.");
}
var fraseCodificada;
var fraseDecodificada;

cipher();
decipher();

function cipher(){
     fraseCodificada = "";
     var quantidadeLetras = frase.length;
     for(var i=0;i<quantidadeLetras;i++)     {
     	var codigoLetra = frase.charCodeAt(i);
     	var codigoCalculado = ((codigoLetra - 65 + 33 ) % 26) + 65;
		fraseCodificada +=String.fromCharCode(codigoCalculado); 
     }
     alert("Codificado na Cifra de César: " +  fraseCodificada);
}
function decipher(){
	fraseDecodificada = "";
	var quantidadeLetras = fraseCodificada.length;
	for( var i = 0; i< quantidadeLetras; i++){
		var codigoLetra = fraseCodificada.charCodeAt(i);
	    var codigoCodificado = ((codigoLetra + 65 - 33 ) % 26) + 65;
            fraseDecodificada += String.fromCharCode(codigoCodificado);
            }
            alert("Decodificado: " +  fraseDecodificada);
        }
        