// && tem maior prioridade (acontece primeiro) que o ||
// parenteses altera a ordem de precedencia

var idade1 = 18;
var idade2 = 16;
var paisPresentes1 = true;
var paisPresentes2 = false;
var comprouBilhete1 = false;
var comprouBilhete2 = true;

const podeViajar2 = idade1 >= 18 || (paisPresentes2 && comprouBilhete1);

if(comprouBilhete1){
    console.log("Comprou o bilhete")
}else{
    console.log("Não comprou o bilhete")
}

//ou pode ser assim com negação inverte
if(!comprouBilhete1){
    console.log("Não comprou o bilhete")
}else{
    console.log("Comprou o bilhete")
}

//incrementando o if no else
if(!comprouBilhete2){
    console.log("Não comprou o bilhete")
}else{
    console.log("Comprou o bilhete")
    if(idade1 >= 18){
        console.log("É maior de idade, pode viajar")
    }else{
        console.log("Ops, é menor de idade, não pode viajar")
    }
}



var n1 = 7;
var n2 = 8;
var media = (n1 + n2) / 2; //o parenteses garante que a soma ocorra antes da divisão
console.log(`media: ${media}`);

if(n1 === 0 || n2 === 0){
    console.log("Reprovado")
}else if(media < 7){
    console.log("Reprovado. Mas há como recuperar")
}else{
    console.log("Aprovado")
}


console.log("saiu do bloco if");






