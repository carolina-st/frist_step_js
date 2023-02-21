// Length -  vai dar o comprimento ou a quantidade de elementro que a string vai dar

var nome = "Isayni";
var obj = "berço"

console.log(nome.length);
console.log(obj.length);

// indexOf - acessa o cartere pelo indice, vai contar ate chegar na palavra que eu quereo

console.log(nome[1]);

var frase = "Quem não trabalha pelo futuro que quer deve aceitar o futuro que vier";

console.log(frase.indexOf("vier"));

//slice - remove um parte da frase

var vier = frase.slice(60, 65); // parte que será retirada

console.log(vier);

// replace - trocar uma palavra por outra

var novaFrase = frase.replace("futuro", "amanhã");
console.log(novaFrase);

//=====================================================================//


