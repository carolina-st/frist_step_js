 /**
  * ESCOPO 
  * Local especifico do código
  * 
  * escopo local - variavel que só vai funcionar dentro do um lugar especifico com um if, function
  * escopo global - variavel que fica setada não um porta o lugar ela pega. ex: var z =5;
  */

var x = 1; // Escopo global
var y = 3; // Escopo global

function teste() {

    var z =0;
    console.log(z);
}

//console.log(z); //não pega pq está variavel não foi feita globalmente

teste();


function teste2() { // já é outro

    var z =5;
    console.log(z);
 }

if(true){
    var p =1;
}
console.log(p)



