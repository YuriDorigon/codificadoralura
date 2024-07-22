function criptoMensagem() {
    let mensagem = document.getElementById('text_send').value;
    let mensagemSemAcento = mensagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let criptafia  = mensagemSemAcento.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    let resultCript = criptafia;


    document.getElementById("result_container").innerHTML = 
    '<textarea readonly id="result-text">' + resultCript + '</textarea>' + 
    '<input onClick="copyMensagem()" type="button" value="copiar"></input>';

}

    
function descriptMensagem(){
    let mensagem = document.getElementById('text_send').value;
    let criptafia  = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    let resultCript = criptafia;

    document.getElementById("result_container").innerHTML = 
    '<textarea readonly id="result-text">' + resultCript + '</textarea>' + 
    '<input onClick="copyMensagem()" type="button" value="copiar"></input>';

}

function copyMensagem() {
 var copyText = document.getElementById("result-text");

 copyText.select();


 navigator.clipboard.writeText(copyText.value);

 // Alert the copied text
 alert("Copied the text");
  }
