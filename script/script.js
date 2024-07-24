
        function removerAcentos(mensagem) {
          return mensagem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      }

      function criptoMensagem() {
          let mensagem = document.getElementById('text_send').value.toLowerCase(); 
          let mensagemSemAcento = removerAcentos(mensagem);

          let criptafia = mensagemSemAcento
              .replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");

          if (mensagem === "") {
              Swal.fire({
                  toast: true,
                  position: "top-end",
                  icon: "error",
                  title: "Coloque algum texto.",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: false
              });
          } else {
              document.getElementById("result_container").innerHTML =
                  '<textarea readonly id="result-text">' + criptafia + '</textarea>' +
                  '<input onclick="copyMensagem()" type="button" value="Copiar">';
          }
      }

      function descriptMensagem() {
          let mensagem = document.getElementById('text_send').value.toLowerCase(); 
          let mensagemSemAcento = removerAcentos(mensagem);

          let descriptografia = mensagemSemAcento
              .replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");

          if (mensagem === "") {
              Swal.fire({
                  toast: true,
                  position: "top-end",
                  icon: "error",
                  title: "Coloque algum texto.",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: false
              });
          } else {
              document.getElementById("result_container").innerHTML =
                  '<textarea readonly id="result-text">' + descriptografia + '</textarea>' +
                  '<input onclick="copyMensagem()" type="button" value="Copiar">';
          }
      }

      function copyMensagem() {
          var copyText = document.getElementById("result-text");
          copyText.select();
          document.execCommand("copy");

          Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Texto copiado com sucesso.",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: false
          });
      }