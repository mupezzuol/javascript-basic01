var campoFiltro = document.querySelector("#filtrar-tabela");

//Evento 'input' -> Qualquer coisa que acontece nele, será chamado essa função
campoFiltro.addEventListener("input", function(){
    //console.log(this.value);//This -> faz referencia ao 'input' mapeado, onde printamos seu valor, cada letra escrita ele escreve novamente como ficou a string após a chamada
    var pacientes = document.querySelectorAll(".paciente");//Lista de todos os pacientes

    //Se o INPUT for digitado qualquer coisa entra no IF, caso contrário, for vazio, tiver limpado o input, ele limpa os CSS etc...
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value,"i");//Valor que será usado para comparação do regex e as regras, nesse caso somente habilitando maiusculas/minusculas
            //test(nome) -> Ele faz um teste, tenta encontrar um pedaço do conteúdo de 'nome' dentro da expressão que passamos, q recebe os nomes da tabelas + regex
            if (!expressao.test(nome)){
                paciente.classList.add("filtro-invisivel-paciente");
            } else {
                paciente.classList.remove("filtro-invisivel-paciente");
            }
        }
    } else {
        //Se tiver sido limpo ou não tiver digitado nada ele limpa os CSS e retorna a lista dos pacientes na tela
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("filtro-invisivel-paciente");
        }
    }
    
});

