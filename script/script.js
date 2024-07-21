// Função para atualizar a visibilidade dos elementos
function enviarMensagem() {
    document.querySelectorAll(".no_result").forEach(el => el.style.display = "none");
    document.querySelectorAll(".result").forEach(el => el.style.display = "flex");


    var mensagem = criptografiaDeMensagem();
    document.getElementById("textresult").textContent = mensagem;
}


function criptografiaDeMensagem() {
    return document.getElementById('text_send').value;
}
