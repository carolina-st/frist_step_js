//Declarando OBJETO
var obj = {
    nome: "Carolina",
    idade: 21,
    profissao: "Desenvolvedora web junior I"
};

console.log(obj);
console.log(typeof obj);

//Acessar uma das propriedades do objeto
console.log(obj.profissao); 
console.log(obj.nome);
console.log(obj.idade);

//Concatenando a propriedade do objeto
console.log("O meu nome é " + obj.nome);

//Roubando propriedade
obj.idade = 22;
console.log(obj.idade);
console.log(obj);

//Criando propriedades no OBJETOg
obj.aprendendo = "JavaScript";
console.log(obj);