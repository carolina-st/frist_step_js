/**
 * ||
 * aceita os 2 sendo True
 * vai aceitar se pelo menos uma das 2 condições forem True
 * só retorna false se nenhuma das 2 condições forem true
 */

var nome = "Carolina";
var idade = 21;

if(nome == "Carolina" || idade > 30) {
    console.log("Você está matriculada"); // umas das condições está certa, entrou
}  else{
    console.log("Você não está matriculado"); // se as duas estiverem erradas essa entra
}

// Adicionando mais de um AND
if(nome== "Pedro" && 5>4 && true) {
    console.log("ok")
}

//Isolando o OR
if((1==1 && 3>2) && true) {
    console.log("Esse quis vencer!");
} else if(nome == "Carolina" && idade == 21) {
    console.log("tá massa!")
}