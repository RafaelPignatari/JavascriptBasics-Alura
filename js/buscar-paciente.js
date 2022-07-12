var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Abre a conexão que faremos. Tipo de requisição, URL.

    xhr.addEventListener("load", function() {  //Executará isso quando obtiver uma resposta.
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;       //Obtém a resposta da requisição.
            var pacientes = JSON.parse(resposta); //Transforma o JSON em um objeto JS.

            erroAjax.hidden = true;
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });    
        }    
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.hidden = false;
        }
    });

    xhr.send(); //Faz o envio da requisição.
});