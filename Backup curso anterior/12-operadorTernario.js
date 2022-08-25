// && tem maior prioridade (acontece primeiro) que o ||
// parenteses altera a ordem de precedencia

var idade1 = 18;
var idade2 = 16;
var paisPresentes1 = true;
var paisPresentes2 = false;
var comprouBilhete1 = false;
var comprouBilhete2 = true;

const podeViajar2 = idade1 >= 18 || (paisPresentes2 && comprouBilhete1);
console.log(`Pode viajar : ${podeViajar2}`);

//jeito muito graNDE
var mensagemMaiorIdade = "";
if(idade2 >= 18){
    mensagemMaiorIdade = "É maior de idade"
}else{
    mensagemMaiorIdade = "É menor de 18 anos"
}

//jeito simplificado usando ternario
mensagemMaiorIdade = (idade2 >= 18) ? "É maior de idade (jeito novo)" : "É menor de 18 anos (jeito novo)";

console.log(mensagemMaiorIdade);

mensagemMaiorIdade = (idade1 >= 18) ? "É maior de idade (jeito novo)" : "É menor de 18 anos (jeito novo)";

console.log(mensagemMaiorIdade);



