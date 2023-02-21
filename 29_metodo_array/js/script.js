// length - propriedade que vai dar o número de elementos de uma array
var arr = [1,2,3,4,5,6,7];
console.log(arr.length);


// push- adiciona elemento a array
arr.push(8);
arr.push("pode puxar qualquer coisa");
arr.push(9);

console.log(arr);

// pop - remove o elemento no fim da array
arr.pop();
console.log(arr);

//unshift - adicionar no começo da array
arr.unshift(0);
arr.unshift("teste");
console.log(arr);

// shift - remover do começo da array
arr.shift();
console.log(arr);

// acessar o último elemento de uma array
console.log(arr[arr.length - 1]);

// isArray - ver se é um array (verificação)
console.log(Array.isArray(5)); // ver o elemento
console.log(Array.isArray(arr)); // ver a variável







