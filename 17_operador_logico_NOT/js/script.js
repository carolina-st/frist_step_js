/**
 * !
 * Significa not, ao colocar ele o booleano vira o inverso
 * se minha condição for true com o uso do ! ela vira false
 * se minha condição for false com o uso do ! ela vira true
 */

var banco = 3000;
var recisão = 2400;
var total= recisão + banco - 2000;

if(!banco > recisão) {
    console.log("no final você não vai poder tirar esse valor! Há um debito no valor de R$ 2000,00 que deve ser pago, você receberá" + total );
} else{
    console.log("o total é R$" + total);
}