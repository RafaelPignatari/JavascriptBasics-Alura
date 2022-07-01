var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

titulo.textContent = "Aparecida Nutricionista";
pacientes.forEach(processaDados);

function validaDadosTabela(paciente, objPaciente) {
    var errosTabela = validaPaciente(objPaciente);

    if (errosTabela.length > 0) {
        paciente.querySelector(".info-imc").textContent = errosTabela;
        paciente.classList.add("paciente-invalido");
        return false;
    }

    return true;
}

function validaPeso(peso) {
    if (isNaN(peso) || peso <= 0 || peso >= 1000 ) 
        return false;

    return true;
}

function validaAltura(altura) {
    if (isNaN(altura) || altura <= 0 || altura >= 3.00)
        return false;

    return true;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0)
        erros.push("Nome não pode ser em branco!");

    if (!validaPeso(paciente.peso))
        erros.push("Peso inválido!");
    
    if (!validaAltura(paciente.altura))
        erros.push("Altura inválida!");

    if (paciente.gordura.length == 0)
        erros.push("Gordura não pode ser em branco!");

    return erros;
}

function calculaIMC(peso, altura) {
    return (peso/(altura*altura)).toFixed(2);
}

function obtemPacienteTabela(paciente) {
    var obj = {
        nome: paciente.querySelector(".info-nome").textContent,
        peso: paciente.querySelector(".info-peso").textContent,
        altura: paciente.querySelector(".info-altura").textContent,
        gordura: paciente.querySelector(".info-gordura").textContent
    };

    return obj;
}

function processaDados(paciente) {
    var objPaciente = obtemPacienteTabela(paciente);

    if (validaDadosTabela(paciente, objPaciente))
        paciente.querySelector(".info-imc").textContent = calculaIMC(objPaciente.peso, objPaciente.altura);
}