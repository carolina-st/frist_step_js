// FOR
/**
 * Repetição
 * Mais utilizadas 
 * fica tudo em um alinha
 * 
 * COMO É MONTADA
 *  Palavra reservada FOR()
 * 1ª variável que vai fazer o incremento, ex: var i = 0
 * 2ª a condição, ex: i < 100 // em quantas partes vão aparecer
 *  incremento, ex: i++ // forma de repetição
 */

for(var i = 0; i < 100; i++ ){
    console.log("E aqui vamos nós " + i);
}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++ ){ // o length vai contar o que está dentro da array
    console.log(arr[j]);
}

console.log(arr.length); // conta o que tem dentro


for(var x = 5; x <100; x*=3){
    console.log(x);
}


