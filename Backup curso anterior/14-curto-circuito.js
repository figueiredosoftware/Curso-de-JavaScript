var n = 0;

if(n === 0){
    n = 10;
}
console.log(n);

//isso é a mesma coisa
n=0;
if(!n){
    n = 10;
}
console.log(n);

//jeito diferente de atribuir 10 ou 1  pra n
n=0;
n = n || 10; //como n é 0 e 0 é false assume 10
console.log(n);

n=1;
n = n || 10; // como n é 1 e 1 é true assume 1
console.log(n);

// validação 
var isValid = true;
if(isValid){
    console.log("é valido");
}else{
    console.log("não é valido");
}

var isValid = false;
if(isValid){
    console.log("é valido");
}else{
    console.log("não é valido");
}

//mesma validação usando curso circuito
var isValid = true;
isValid && console.log("é valido com curto circuito 1");
isValid || console.log("é valido com curto circuito 2");

var isValid = false;
isValid && console.log("é valido com curto circuito 3");
isValid || console.log("é valido com curto circuito 4");


