var btnAddPaciente = document.querySelector("#adicionar-paciente");

//Fica escutando o evento do botão
btnAddPaciente.addEventListener("click", function(event){
    event.preventDefault();//Previni o evento padrão (recarregar a página e limpar os inputs)

    //Pegando valores do FORM
    var form = document.querySelector("#form-adiciona");//Consigo acessar os inputs pelo nome através do form facilmente e pegar os valors.. Ex: form.altura.value
    var paciente = obterPacienteDoForm(form);//Recebendo Objeto Paciente com os dados do form
    
    //Validando Paciente
    var erros = validaPaciente(paciente);//Retorna Array de String com os erros encontrados
    console.log(erros);
    if (erros.length > 0){
        exibeMensagensDeErros(erros);
        return;// Sai da função que está inserido, no casso a função do botão (função anonima), ou seja, não cria o elemento na tabela
    }

    adicionaPacienteNaTabela(paciente);
    
    //Limpa Form e Mensagem de erro
    form.reset();//Limpa os campos do form
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";//Tudo dentro da TAG UL, ou seja, as LI serão limpadas
});


//Adiciona na tabela
function adicionaPacienteNaTabela(paciente){
    //Crio minha TR, com todos os TD e dados preenchidos
    var pacienteTr = montaTr(paciente);

    //Pegar a tabela para adicionar nossa nova TR na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);//Adiciono nova TR dentro da nossa table do HTML, TR completa já com os TD preenchidos
}


//Coletando informações do FORM e criando um Objeto Paciente
function obterPacienteDoForm(form){
    //Crianção de Objeto em JavaScript (bem parecido com JSON)
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

//Valida Paciente
function validaPaciente(paciente){
    var erros = [];//Declarando um array
    
    //Validação
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");//Adc ao array se for false a validação
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");//Adc ao array se for false a validação
    }

    //Validando campos vazios
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}

//Criando Mensagens de Erros
function exibeMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";//Limpo todas as TAGs que tiver dentro da UL, ou seja, todas as LI.. innerHTML possibilita o controle de tudo que está dentro da TAG respectiva

    //ForEach -> ele entra no array, e para cada iteração ele FAZ algo, nesse caso é chamado uma função anonima
    //Function -> Passando o item da iteração para a função que será executada (erro)
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//Criando TR
function montaTr(paciente){

    //Criando os elementos HTML
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Montando o elemento HTML completo
    //Adc todas as TD criadas dentro da TAG TR
    //appendChild -> Coloque como filho o elemento X, dessa forma ele coloca o elemento dentro da tag respectiva
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;//Retorno a TR completa
}

//Criando TD, de acordo com o dado e a classe/style passada
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

