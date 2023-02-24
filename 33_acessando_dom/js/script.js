// DOM é o evento que eu vou criar e ter efeito no html
//DOM é o document que é literalmente tudo do HTML
//ele vai funcionar como um css,  que pega por meio de tag, id...

//Acessando por tag | 
//Usá-se o document no começo para acessar algum elemento
var titulo = document.getElementsByTagName("h1")[0]; //o numero vai especificar em qual eu irei tabalhar
console.log(titulo);

//console.log(titulo[0]); // se acessar com o 0 ele vai pro h1 direto e sai do colection

var lis = document.getElementsByTagName("li");
console.log(lis[3]); // especificou qual dos elementos que vai querer e pode fazer as alteraçoes



// Acessando por id | id só tem um "teoticamente". Por isso não coloca o ]0]
var paragrafo = document.getElementById("lista");
console.log(paragrafo);

//Acessando por class | podem ser varias classes
var itensDaLista = document.getElementsByClassName("item");
console.log(itensDaLista);