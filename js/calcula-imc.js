var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];//Cada iteração é um Paciente diferente

    //Atribuindo Valores
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //Validação
    var pesoIsValid = validaPeso(peso);//True or False
    var alturaIsValid = validaAltura(altura);//True or False
    if (!pesoIsValid) {
        console.log("Peso inválido!");
        pesoIsValid = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");//Adiciono class com CSS personalizado
    }

    if (!alturaIsValid) {
        console.log("Altura inválida!");
        alturaIsValid = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    //Calculando IMC através da chamada da função criada
    tdImc.textContent = calculaImc(peso,altura);
}

//Validando Peso
function validaPeso(peso){
    if(peso >= 0 && peso <= 400){
        return true;
    }else{
        return false;
    }
}

//Validando Altura
function validaAltura(altura){
    if(altura >= 0 && altura <=3.00){
        return true;
    }else{
        return false;
    }
}

//Calcula IMC
function calculaImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

