// OPERADORES DE ATRIBUIÇÃO
/**
 * Atribuindo valores a variável
 * Mais utilizadas são: +=, -=, *=, /= | isso serve para ter mais opção no lugar de apenas colocar um simples ++ no incrementador
 * basicamente é uma forma resumida da operação: x=x + y
 * Em loops também é comum utilizar os operadores ++ ou --
 * 
 */

x = 5;
y = 10;

// soma
console.log(x = x + y);
console.log(x += y);

//subtração
console.log(y -= x);
console.log(x + x - y);

// multiplicação
console.log(x*=y);

// divisão
console.log(y/= x);

// loops
console.log(x++);
console.log(y--);

while(x <= 100) {
    console.log(x);

    x *= 2;
}

console.log(x);