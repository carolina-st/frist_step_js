// wHILE
/**
 * Repetir alguma coisa ate chegar a conclusão que deseja
 * While - Enquanto  
 * você determina o quanto esse bloco vai ser repetido
 */


var x = 0;


while( x < 5){ // vai repetir até que o x chegue no 5
    console.log("Número de repetições testadas " + x);

    // incrementador, sair do while quando atingir o número de repetições
    x++;
}

////////////////////////////////////////////////////////////////
          //PASSANDO POR CADA ELEMENTO DA ARRAY

var rey = ["Carolina", "programadora", "dançarina", "rica"];
var y =0;

while(y <= 3){
    console.log(rey[y])

    y++;
}
 //////////////////////////////////////////////////////////////////
 // PASSANDO POR CADA LETRA DO NOME

var palavra = "Carolina";
var i = 0;

while(i < 8) {
     console.log(palavra[i]);

     i++; // outra forma de usar, i +=1
}