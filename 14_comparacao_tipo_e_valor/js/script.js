// Comparação de tipo e valor

/**
 *  === igual em valor ou tipo
 *  !== diferene em tipo ou valor
 */

var number=  5;
var number1=  "5";

if(number === 5) {
    console.log("O número é 5");
}

if(number1 === 5) {
    console.log("O número é 5");
} // não motra porque são de tipos diferentes

if(number1 !== 5) {
    console.log("O número não é 5");
}
