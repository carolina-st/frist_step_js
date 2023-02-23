//splice - adicionar elemento no meio da array
var arr = [1,2,3,4,5,6,7];

arr.splice(2, 0, 3200); //conta pelo indice o 1º number / o 0 é pra deletar 0 elementos / o último é o número que vai adicionar
console.log(arr);

// removendo um elemento especifico com o splice
arr.splice(4,1); //elimou quem tava no 4º  indice / quantidade de coidass eliminadas foi 1

console.log(arr);

// indexOf - achar o elemento dentro da array 
console.log(arr.indexOf(2));

//join - transformando array em string
var arr2 = ["eu", "te", "amo", "mil", "milhões"];
console.log(arr2.join(" ")); // separando por espaço

// reverse - inverter uma array
console.log(arr2.reverse());