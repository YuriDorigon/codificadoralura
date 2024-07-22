function criptoMensagem() {
    let mensagem = document.getElementById('text_send').value;
    console.log('Mensagem original:', mensagem); // Verifica o valor original

    // Remove acentos e diacríticos
    let mensagemSemAcento = mensagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log('Sem acento:', mensagemSemAcento); // Verifica após remoção de acento

    // Substitui os caracteres por seus códigos criptografados
    let criptafia = mensagemSemAcento
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    console.log('Criptografado:', criptafia); // Verifica o texto criptografado

    if (mensagem === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Coloque algum texto."
          });

    } else {
        document.getElementById("result_container").innerHTML =
            '<textarea readonly id="result-text">' + criptafia + '</textarea>' +
            '<input onClick="copyMensagem()" type="button" value="copiar"></input>';
    }
}

function descriptMensagem() {
    let mensagem = document.getElementById('text_send').value;
    console.log('Mensagem original:', mensagem); // Verifica o valor original

    // Substitui os códigos criptografados pelos caracteres originais
    let criptafia = mensagem
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    console.log('Descriptografado:', criptafia); // Verifica o texto descriptografado

    if (mensagem === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Coloque algum texto."
          });
          
    } else {
        document.getElementById("result_container").innerHTML =
            '<textarea readonly id="result-text">' + criptafia + '</textarea>' +
            '<input onClick="copyMensagem()" type="button" value="copiar"></input>';
    }
}

function copyMensagem() {
    var copyText = document.getElementById("result-text");
    copyText.select(); // Seleciona o texto
    document.execCommand("copy"); // Copia para a área de transferência

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Texto copiado com sucesso."
      });
}
