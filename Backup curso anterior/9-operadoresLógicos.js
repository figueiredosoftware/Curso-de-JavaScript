// AND (&&)
// OR (||)
// NOT (!)

var idade1 = 18;
var idade2 = 16;
var paisPresentes1 = true;
var paisPresentes2 = false;
var comprouBilhete1 = false;
var comprouBilhete2 = true;
//const podeViajar = idade >= 18 || paisPresentes1 === true;
const podeViajar1 = (idade1 >= 18 || paisPresentes1) && comprouBilhete1;
console.log(`Pode viajar: ${podeViajar1}`);

//const podeViajar = idade >= 18 || paisPresentes2 === true;
const podeViajar2 = (idade1 >= 18 || paisPresentes2) && comprouBilhete1;
console.log(`Pode viajar: ${podeViajar2}`);

const podeViajar3 = (idade2 >= 18 || paisPresentes2) && comprouBilhete1;
console.log(`Pode viajar: ${podeViajar3}`);

const podeViajar3 = (idade1 >= 18 || paisPresentes2) && comprouBilhete2;
console.log(`Pode viajar: ${podeViajar3}`);




