var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove(); //O evento ocorre no td (target) e a remoção do tr é feita (parentNode).
});
