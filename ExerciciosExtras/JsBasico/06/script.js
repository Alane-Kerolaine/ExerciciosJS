var contador = 0;
var c = document.querySelector("input#clica");
c.addEventListener('click', contarCliques);
var z = document.querySelector("input#zera");
z.addEventListener('click', zerarContador)
var res = document.querySelector("section#saida");


function contarCliques(){
    contador ++;
    if(contador > 1){
        res.innerHTML = `O contador está com <mark>${contador}</mark> cliques`;
    }else{
        res.innerHTML = `O contador está com <mark>${contador}</mark> clique`;
    }
}

function zerarContador(){
    contador = 0;
    res.innerHTML = null;
}