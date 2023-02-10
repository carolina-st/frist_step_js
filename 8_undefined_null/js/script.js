// Hoisting - içamento // todas as variaveis e fuçoes são levadas antes que o código comece a ser interpretado 
console.log(sobrenome);

// TODAS E VARIÁVEIS DEVEM SER INICIALIZADAS NO TOPO DO CÓDIGO
// CASO CONTRÁRIO O HOSTING NÃO VAI DEIXAR FUNCIONAR

var nome = null; // o valor não está definido, mas por ser colocado
//var sobrenome; //variável criada, mas ainda não tem valor (UNDEFINED)
var sobrenome = 'santos'; // agora está definida

console.log(nome);
console.log(sobrenome);

nome = "Carolina";

console.log(nome);