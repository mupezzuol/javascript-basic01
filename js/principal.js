//Atribuindo valores... Usar a busca po 'class' e 'id' é a melhor prática
var titulo1Class = document.querySelector(".titulo1");//Atribuindo através do nome da 'class' da TAG
var titulo2Id = document.querySelector("#titulo2");//Atribuindo através do nome do 'id' da TAG
var tituloTag = document.querySelector("h1");

//Printando os resultados
console.log(titulo1Class.textContent);
console.log(titulo2Id.textContent);
console.log(tituloTag.textContent);

titulo1Class.textContent = "Título 1 Alterado";


//Atribuindo valor da tag direto
document.querySelector("h2").textContent = "Título h2 Alterado";


//Criando função com evento
//addEventListener -> Fica escutando algum evento no nosso objeto, tag etc....
//1 param -> qual é o evento
//2 param -> qual função será chamado
titulo1Class.addEventListener("click",mostrarMensagem);
function mostrarMensagem(){
    console.log("Olá, eu fui clicado!");
}

//Evento com função anonima, onde só existe quando é disparado esse evento
// Função anonima -> sem nome, só oq será executada
titulo2Id.addEventListener("click", function(){
    console.log("Função Anonima disparada!");
});
