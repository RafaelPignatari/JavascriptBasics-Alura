var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    //setTimeout -> Aguarda o tempo configurado em ms e depois executa a function de dentro dele
    setTimeout(function() {      
        event.target.parentNode.remove(); //O evento ocorre no td (target) e a remoção do tr é feita (parentNode).
    }, 500);
});
