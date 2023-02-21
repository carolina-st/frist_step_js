 /**
  * LET  e  CONST
  * 
  * é como uma variável
  * funciona como escopo local
  * deixando tudo mais organizado
  *  Pode ser usado para criar variável especifico para um for por exemplo.
  */
let x = 1; // var x = 1;

x = 12; // escopo global

console.log(x);

if(true) {

    let x = 20;

    console.log(x); // escopo local

    const y =50;

    console.log("const if " + y);
}

console.log(x);// chama o escopo global

for( let x = 0; x < 10; x++) {
    console.log(x);
}

