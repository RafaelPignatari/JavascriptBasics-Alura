var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(processaDados);

function validaDados(paciente, peso, altura) {
    if (peso <= 0 || peso >= 1000) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        return false;
    }
    
    if (altura <= 0 || altura >= 3.00) {
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        return false;
    }

    return true;
}

function calculaIMC(peso, altura) {
    return (peso/(altura*altura)).toFixed(2);
}

function processaDados(paciente) {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    if (validaDados(paciente, peso, altura))
        paciente.querySelector(".info-imc").textContent = calculaIMC(peso, altura);
}