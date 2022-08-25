const pessoa = {
    nome: "Maria",
    idade: 28,
    email: "maria@email.com"
}

console.log(pessoa);

for(var propriedade in pessoa){
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}