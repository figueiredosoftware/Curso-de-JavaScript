//analise condicional usando IF
var diaDaSemana = 6;
if(diaDaSemana === 1){
    console.log("hoje é domingo");
}else if(diaDaSemana === 2){
    console.log("hoje é segunda");
}else if(diaDaSemana === 3){
    console.log("hoje é terça");
}else if(diaDaSemana === 4){
    console.log("hoje é quarta");
}else if(diaDaSemana === 5){
    console.log("hoje é quinta");
}else if(diaDaSemana === 6){
    console.log("hoje é sexta");
}else{
    console.log("hoje é sabado");
}

//analise condicional usando switch
var diaDaSemana = 6;
var nomeDiaSemana;
switch(diaDaSemana){
    case 1:
        nomeDiaSemana = "domingo";
        break;
    case 2:
        nomeDiaSemana = "segunda";
        break;
    case 3:
        nomeDiaSemana = "terça";
        break;
    case 4:
        nomeDiaSemana = "quarta";
        break;
    case 5:
        nomeDiaSemana = "quinta";
        break;
    case 6:
        nomeDiaSemana = "sexta";
        break;
    case 7:
        nomeDiaSemana = "sabado";
        break;
    default:
        nomeDiaSemana = "dia inválido";
}

console.log(`hoje é ${nomeDiaSemana}`);





