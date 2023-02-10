/**
 * &&
 * só vai funcionar se as 2 condições forem True
 * caso contrário não vai funcionar
 */

var nome = "Carolina";
var idade = 21;

if(nome == "Carolina" && idade == 21) {
    console.log("Você está matriculada");
}  else{
    console.log("Você não está matriculado");
}

// Adicionando mais de um AND
if(2970 < 3000 && 5>4 && true) {
    console.log("ok")
}

//Isolando o AND
if((1==1 && 3>2) && true) {
    console.log("Esse quis vencer!");
} else if(nome == "Carolina" && idade == 21) {
    console.log("tá massa!")
}