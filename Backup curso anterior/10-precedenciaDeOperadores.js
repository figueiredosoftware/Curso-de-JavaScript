// && tem maior prioridade (acontece primeiro) que o ||
// parenteses altera a ordem de precedencia

var idade1 = 18;
var idade2 = 16;
var paisPresentes1 = true;
var paisPresentes2 = false;
var comprouBilhete1 = false;
var comprouBilhete2 = true;

const podeViajar2 = idade1 >= 18 || (paisPresentes2 && comprouBilhete1);
console.log(`Pode viajar: ${podeViajar2}`);

const podeViajar3 = (idade1 >= 18 || paisPresentes2) && comprouBilhete1;
console.log(`Pode viajar: ${podeViajar3}`);

var n1 = 6;
var n2 = 8;
var media = (n1 + n2) / 2; //o parenteses garante que a soma ocorra antes da divisão
console.log(`media: ${media}`);


console.log((3 * 2) ** 2);









