//Objeto é feito com {}
//criar objeto mais personalizado

let pessoa = {
    nome: "Renata Maria",// propriedade
    idade: 27,// propriedade
    falar: function(){ //método
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b, c, d){ //método
        return a + b + c + d;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2400, 1000, 150, 211);
console.log(soma);