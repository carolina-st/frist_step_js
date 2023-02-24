
var itensClass = document.getElementsByClassName("item"); // selecionou todos os itens
console.log(itensClass);

//querySelectorAll - pega tudo
var itensQuery = document.querySelectorAll("#lista2 li"); //selecionou só os itens de baixo 
console.log(itensQuery);

//pegando só os itens da 1ª parte
var itensQuery2 = document.querySelectorAll("#lista .item");
console.log(itensQuery2);

// querySelector - pega só um elemento como o id
var lista = document.querySelector("#lista");
console.log(lista);

var primeiraLista = document.querySelector("ul");
console.log(primeiraLista);