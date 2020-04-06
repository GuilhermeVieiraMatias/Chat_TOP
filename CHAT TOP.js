document.addEventListener('DOMContentLoaded', function(){ 
    document.getElementById("botao-enviar").addEventListener("click", enviaMSG);
    document.getElementById("digitar-msg").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            enviaMSG();
        }
    });
}, false);


function enviaMSG(){
    var mensagem = document.getElementById("digitar-msg").value;

    if(mensagem.trim() !== ''){

      document.getElementById("digitar-msg").value = '';
      var container = document.createElement("div");
      container.classList.add("mensagem-usuario");
      var usuario_diz = document.createElement("div");
      usuario_diz.classList.add("usuario-diz");
      var from = document.createElement("p");
      var vc_diz = document.createElement("vc_diz");
      from.innerHTML = "Você diz:";
      var msg_container = document.createElement("div");  
      msg_container.classList.add("msg-container");  
      var msg = document.createElement("p");
      msg.classList.add("texto-usuario");   
      msg.innerHTML = mensagem; 
      container.appendChild(usuario_diz);
      vc_diz.appendChild(from);
      usuario_diz.appendChild(vc_diz);
      container.appendChild(msg_container);
      msg_container.appendChild(msg);
      document.getElementById("chat").appendChild(container);
    }else{
        alert('Não é possivel enviar mensagem em branco!');
    }

}

