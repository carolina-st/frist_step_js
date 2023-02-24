//Criando elemento no JS e colocando no HTML
/**
 * 1º cria o elemento (tag)
 * 2º cria o que vai ser colocado dentro desse elemento
 * 3º inserir o texto dentro do elemento (tag)
 * depois desses passos já vai estar pronto para ser colocado no HTML
 * 
 */

var novoParagrafo = document.createElement("P"); // vai p pq é a tag <p> de paragrafo | cria o elemento P 

var texto = document.createTextNode("Aqui é colocado o contéudo da tag escolhida"); //2º

novoParagrafo.appendChild(texto); // 3º

console.log(novoParagrafo);

var body = document.querySelector("body"); // CHAMANDO A PARTE ESPECIDICADO DO HTML
body.appendChild(novoParagrafo); // INSERINDO A TAG NO BODY

console.log(body);

// inserir em um container

var container = document.getElementById("container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("coloca aqui o texto do span"));

console.log(el);

container.appendChild(el);
