function carregar(){

var msg = document.querySelector("div#msg");
var img = document.querySelector("img#img");
var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
msg.innerHTML = `Agora são <strong>${hora}</strong>:<strong>${min}</strong><br>`;

if(hora >= 0 && hora < 12){
    //Bom dia!
    msg.innerHTML += "Bom dia!";
    img.src = 'fotomanha.png';
    document.body.style.background = '#cfc459';
}else if(hora >= 12 && hora < 18){
    //Boa tarde!
    msg.innerHTML += "Boa tarde!";
    img.src = 'fototarde.png';
    document.body.style.background = '#a9434d';
}else{
    //Boa noite!
    msg.innerHTML += "Boa noite!"
    img.src = 'fotonoite.png';
    document.body.style.background = '#2a4465';
}

}

