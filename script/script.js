function criptoMensagem() {
    let mensagem = document.getElementById('text_send').value;
    let mensagemSemAcento = mensagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let criptafia = mensagemSemAcento.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    let resultCript = criptafia;


    if (document.getElementById('text_send').value === "") {
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
            '<textarea readonly id="result-text">' + resultCript + '</textarea>' +
            '<input onClick="copyMensagem()" type="button" value="copiar"></input>';
    }
}

function descriptMensagem() {
    let mensagem = document.getElementById('text_send').value;
    let criptafia = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    let resultCript = criptafia;


    if (document.getElementById('text_send').value === "") {
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
            '<textarea readonly id="result-text">' + resultCript + '</textarea>' +
            '<input onClick="copyMensagem()" type="button" value="copiar"></input>';
    }

}

function copyMensagem() {
    var copyText = document.getElementById("result-text");
    navigator.clipboard.writeText(copyText.value);

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