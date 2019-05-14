var pacientes = document.querySelectorAll(".paciente");//Seleciona todos que tem a class 'paciente'

//Colocamos o escutador na tabela, pois toda vez que cadastrarmos o escutador será executado, e a tabela terá novos pacientes
var tabela = document.querySelector("table");//Pego minha tabela inteira

//Event -> ele sempre passa por todo mundo até chegar no BODY, não importa a hierarquia
//Evento em Bolha -> ao escutar um evento, desde o nível mais baixo até o nivél mais alto escuta, por isso já colocamos a tabela completa para ser escutada nos eventos
//Colocamos o escutador no 'table', mas quem foi o alvo(target) do meu evento(event) foi outra TAG especifica
tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");//Adc classe para efeito desaparecer na TR

    //setTimeout -> Ele segura através do tempo passado em milesegundos oq está dentro da 'function' para executar
    //Nesse caso após ele desaparecer a TR com o CSS, ele espera o mesmo tempo que está no CSS e depois desse tempo ele executa o código de remover a TR
    setTimeout(function(){
        event.target.parentNode.remove();//Removendo a TR completa
    },500)


});









//AJUDA E COMENTÁRIOS

//console.log(event.target);//event.target -> é o alvo que foi clicado, nessa hierarquia da minha tag table, qual ALVO foi clicado, ou seja, qual paciente especifico foi clicado
//var alvoEvento = event.target;//O alvo nesse caso será as TD
//var paiDoAlvo = alvoEvento.parentNode;//Aqui pegamos o nível acima, ou seja, o pai dos TD, que é a TR
//paiDoAlvo.remove();//Removo a TR completa




//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com double click");
//        this.remove();//This -> Em JavaScript está relacionado quem é o DONO do evento, nesse caso Paciente
//    });
//});

