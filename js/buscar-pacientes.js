var btnBuscarPacientes = document.querySelector("#buscar-pacientes");

btnBuscarPacientes.addEventListener("click",function(){
    console.log("Buscando Pacientes...");

    //Classe que faz requisição HTTP (antigamente era mt em XML, por isso tem o nome XML, mas hj pode ser vários tipos)
    var xhr = new XMLHttpRequest();
    
    //Abro uma 'aba' do navegador, faço requisição GET no endereço X
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    //Adc evento em no XHR de 'load' após carregado nossa requisição ele executa a função
    //responseText -> é o texto da resposta da requisição, ou seja, o nosso retorno JSON
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        //Validando Erros
        // 200 -> Deu certo
        if(xhr.status == 200){
            var resposta = xhr.responseText;//Resposta da requisição
            //console.log("Tipo do retorno: "+ typeof resposta);//Retorna o tipo -> String
            //console.log(resposta);
            
            var pacientes = JSON.parse(resposta);//Essa função pega nosso retorno JSON e transforma em objeto javascript.. (Nesse caso retorna um array de um objeto)
            //console.log("Tipo do Parser feito: "+typeof pacientes);//Retorna o tipo -> Object
            //console.log(pacientes);
    
            //Adiciona os pacientes retornado na tabela
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

            //Adc Class do CSS para ficar visivel
            erroAjax.classList.add("ajax-invisivel-paciente");
        }else{
            //Remove Class do CSS
            erroAjax.classList.remove("ajax-invisivel-paciente");

            console.log("Status Error: "+xhr.status);
            console.log("Resposta Error: "+xhr.responseText);
        }

    });

    xhr.send();//Aqui é efetivamente a ação de fazer o envio
});

