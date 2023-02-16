// FOR NA  PRATICA
// Criar lista no html a partir do que eu tenho no javaScript

var lista = ["Açaí", "Pizza", "Hamburger", "Cachorro quente", "Churrasco",  ];

//para criar elemento do  dom usa-se o document
var listaUl = document.createElement('ul');

//pegar a tag que é mostrada no html
var body = document.getElementsByTagName('body');

//console.log(body[0]);

//inserir a lista no body
//appendChild- methodo  de adicionar o elemento field
body[0].appendChild(listaUl);

//listaul adicionada ao body
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

//fazer o arry aparecer
//length - conta o que tem dentro da array
for(var i = 0; i <lista.length; i++) {

    //criou li
    var lifor = document.createElement('li');

    //criando o elemento quevai ficar dentro da  li 
    var textoLi = document.createTextNode(lista[i]);

    //adicionando o texto pra dentro da li
    lifor.appendChild(textoLi);

    console.log(lifor);

    //adicionar cada li dentro da ul
    listaNoBody[0].appendChild(lifor);
}