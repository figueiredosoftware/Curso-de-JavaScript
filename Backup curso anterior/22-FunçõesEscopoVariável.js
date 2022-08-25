//VAR gera escopo de função e LET e CONST gera escopo de bloco

var n = "global";

function mostarNGlobal(){
    console.log("Valor de n : " + n);
    n="oba oba";
}

function mostarNlocal(){
    var n="local";
    console.log("Valor de n : " + n);

    // por causa de usar LET a variável n1 interna está no escopo de bloco dentro do if
    let n1 = "n1 local";
    console.log("Valor de n1 " + n1);

    if(true){
        let n1 = "dentro de n1 dentro de if com let";//usando let o n1 dentro do if é outra variável fora do escopo de n1 fora do if
    }
    console.log("valor de n1 : " + n1);


    //se usar VAR a variável n2 interna está no MESME escopo de FORA DO bloco dentro do if
    var n2 = "n2 local";
    console.log("Valor de n2 " + n2);

    if(true){
        var n2 = "dentro de n2 dentro de if com VAR";//usando VAR n2 dentro do if é A MESMA variável fora do escopo de n2 fora do if
    }
    console.log("valor de n2 : " + n2);

}

mostarNGlobal();

mostarNlocal();

console.log("Valor de n : " + n);
//console.log("Valor de n1 : " + n1);

function fnExt(){
    let n = "n local na função fnExt";

    function fnInt(){
        let n = "n local na funcao fnInt";
        console.log("valor do n dentro de fnInt : " + n);
    }

    fnInt();
    console.log("valor do n dentro de fnExt : " + n);
}

fnExt();






