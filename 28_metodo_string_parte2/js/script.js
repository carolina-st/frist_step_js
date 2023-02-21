// toLowerCase - deixar em caixa baixa
// toUpperCasse - deixar em caixa alta

var frase = "Aprendendo a fazer merda, no final é gostoso";

var fraseCaixaAlta =  frase.toUpperCase();

console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());
console.log(frase.toLowerCase());

// trim - ajustar espaços caso o usuário erre

var nome = "                      terra                ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split - mandar em array

console.log(frase.split(" ")); // o que tinha de espaço ele usou como virgula para fazer minha array

var tags = "JavaScript, React.js, Node.js, TypeScript";
console.log(tags.split(","));

// lastIndexOf -

var fraseDois = "Agora eu quero aprender a tocar piano, eu sei que parece inítil, foda-se eu quero.";

console.log(fraseDois.indexOf("piano"));
console.log(fraseDois.lastIndexOf("."));
