//Objeto é feito com {}
//criar objeto mais personalizado

console.log(this); // mostra todos os códigos que é possível fazer com o this = window
 /**
  * exemplo
  * alert("sai");
  * EXIBIR E OPERAR O VALOR
  * acessar e atribuir valor a propriedade do objeto
  * ver propriedade
  */
var teste = 5;
console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Renata Maria",// propriedade
    idade: 27,// propriedade
    falar: function(){ //método
        console.log("Olá, tudo bem?")
    },
    dizerNome: function(){
        console.log("Quem tá cansado ai?" + this.nome);
    },
    niver: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return "Sr." +this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.niver();
pessoa.niver();
pessoa.niver();

console.log(pessoa.idade);

console.log(pessoa.saudacao());// SE TIVER O RETURN EM CIMA PRECISA DO (ROXO)
