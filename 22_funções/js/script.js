//FUNÇÃO
/**
 * Usada para evitar repetições, pois ela é reutilizável 
 * Pode ser utilizada quantas vezes quiser
 * 1º function
 * 2º nomeda função
 * 3º argumento ()
 * 4º {contéudo da função}
 * 5º A função só funciona quando é chamada pelo nome que foi criada e entre()
 */

/**
 * ARGUMENTO
 * 
 * Declara a função e n
 */

function primeiraFuncao(){
    console.log("Testando");
}

primeiraFuncao(); // a chamada pode ser reutilizado

//                          ARGUMENTO
// Usando o argumento vc é obrigado a passar alguma coisa dentro do ()

function dizerNome(nome) {
    console.log("o nome é: " + nome);
}

dizerNome("Musa");
dizerNome("pode reutilizar com qualquer nome");
dizerNome("terra");

//caso fosse puxado do banco 
var nomeDoBancoDeDados = "CArolina"
dizerNome(nomeDoBancoDeDados);


// RETURN
function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma( 2000 , 1000);
console.log(somaUm);

var somaDois = soma ( 3000, 1000);
console.log(somaDois);

var somaTres = soma(soma(200, 400));
console.log(somaTres);