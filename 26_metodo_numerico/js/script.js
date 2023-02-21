// ParseFloat - pegar um número e transformá-lo com casas decimais
//pega string e transforma em number
console.log(parseFloat('12.506'));
console.log(Number.parseFloat('12.001'));

// ParseInt - pega a string e transfoma em inteiro
//Deixa somente o valor inteiro

console.log(parseInt('200'));
console.log(parseInt(20.53));

// ToFixed - limitar as casas decimais
//vai arredondar

console.log(229.23.toFixed(1)); //você escolhe o número de casas que vai aparecer colocando no ()

//IsNaN - retorna true or false

console.log(isNaN("testes"));
console.log(isNaN(12));
console.log(isNaN("14"));

// MAX_VALUE e MIN_VALUE
//maximo e minimo que o js aceita
// fora do paremêtro é considerado infinity

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(1.79769313484545623157e+308);
