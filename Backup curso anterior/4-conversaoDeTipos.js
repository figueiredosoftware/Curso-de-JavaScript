var n1 = 10;
var n2 = "2";



console.log(n1 * n2, typeof n1, typeof n2); //vai dar ok//

console.log(n1 / n2, typeof n1, typeof n2); //vai dar ok //

console.log(n1 + n2, typeof n1, typeof n2); //vai concatenar em vez de somar - da erro //

console.log(n1 - n2, typeof n1, typeof n2); //vai dar ok //

// pra não dar erro precisa converter -- to not error is need converter the type of the variable

// 3 formas para converter string em número : parseInt(), parseFloat(), Number()
//==============================================================================

n2 = parseInt(n2);
console.log(n1 + n2, typeof n1, typeof n2); //vai dar ok //

var n3 = "10.9999";
n3 =  parseInt(n3); //parseInt sempre converte para inteiro
console.log(n3, typeof n3);

var n4 = "10.9999";
n4 =  parseFloat(n4); //parseFloat sempre converte para decimal (ponto flutuante)
console.log(n4, typeof n4);

var n5 = "12xfcgxfcvx";
n5 =  parseInt(n5); //parseInt sempre converte para inteiro
console.log(n5, typeof n5);

var n6 = "alf4";
n6 =  parseInt(n6); //parseInt só consegue converter se os primeiros caracteres forem numeros
console.log(n6, typeof n6);

var n7 = "14";
n7 =  Number(n7); //convertendo para numerico usando o construtor Number()
console.log(n7, typeof n7);

var n8 = "21sdf";
n8 =  Number(n8); //convertendo para numerico usando o construtor Number() se tiver letras da erro
console.log(n8, typeof n8);

var n8 = "sdf21";
n8 =  Number(n8); //convertendo para numerico usando o construtor Number() se tiver letras da erro dá Not a Number NaN
console.log(n8, typeof n8);

var n9 = "oi";
var n10 = 2;
console.log(n9 * n10, typeof n9, typeof n10); //não da certo porque não pode multiplicar letra com numero

var n11 = "oi";
var n12 = 2;
console.log(n11 + n12, typeof n11, typeof n12); //da certo porque concatena em vez de multiplicar


//convertendo numeros em strings
//==============================

var n13 = 10;
var n14 = n13 + " "; //forma natual de converter numero para string
console.log(n13, n14, typeof n13, typeof n14); 

var n15 = 15;
var n16 = n15.toString(); //por padrão sem parametro a base é 10
console.log(n15, n16, typeof n15, typeof n16);

var n17 = 22;
var n18 = n17.toString(10); //passando por parametro a  base é 10
console.log(n17, n18, typeof n17, typeof n18);

var n19 = 12;
var n20 = n19.toString(16); //passando por parametro a  base é 16 hexadecimal
console.log(n19, n20, typeof n19, typeof n20);

var n21 = 57;
var n22 = n21.toString(2); //passando por parametro a  base é 2 binária
console.log(n21, n22, typeof n21, typeof n22);