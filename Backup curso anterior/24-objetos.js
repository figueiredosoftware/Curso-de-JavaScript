const nomes = ["Daniel", "Maria", "Joao"];
const idades = [40, 28, 35];
console.log(nomes[0], idades[0]);

//criando objeto
const pessoa = new Object();
pessoa.nome = "Daniel";
pessoa.idade = 40;
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

//pode mostar conteudo assim também
console.log(pessoa["nome"]);

let prop = "nome";
console.log(pessoa[prop]); //forma dinâmica

//criando objeto da forma literal

const pessoa2 = {
    nome: "Daniela",
    idade: 24
}

console.log(pessoa2);



