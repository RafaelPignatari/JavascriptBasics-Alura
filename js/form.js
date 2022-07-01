var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);
    var pacienteTr = montaTr(paciente);
    var errosFormulario = validaPaciente(paciente);

    if (errosFormulario.length == 0) {
        var tabela = document.querySelector("#tabela-pacientes");
        var ul = document.querySelector("#mensagens-erro");

        tabela.appendChild(pacienteTr);
        ul.innerHTML = "";
        
        form.reset();
    }
    else {
        exibeMensagensDeErro(errosFormulario);
    }
});

function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //Serve para controlar o html diretamente do elemento. Nessa linha utiliza-se para remover as LIs anteriores.

    erros.forEach(function(erro) {
        var li = document.createElement("li");

        li.textContent = erro;
        ul.appendChild(li);
    });
}