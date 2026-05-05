let dez = 10;
if (dez == 10) {
    alert("O número é igual a 10");
}
let nome = "Victor"
    if (nome == "Victor"){
        alert("Este é meu nome")
}
function botao () {
    let ok = document.getElementById("ok").value;
    if (ok == "ok"){
        alert("Correto")
    }
    else
        alert("Errado")
    
}
function cinco () {
    let cinco = document.getElementById("cinco").value;
    if(cinco == 5) {
        alert("Correto novamente")
    }
}
function adminp () {
    let admin = document.getElementById("admin").value;
    if (admin == "admin") {
        document.getElementById("mensagem").textContent = "Bem vindo";
    }
}
function teste () {
    let teste = document.getElementById("teste").value;
    if(teste == "teste") {
        document.getElementById("mensagemteste").textContent = "Teste!!"
    }
}
function colordiv() {
    let inputazul = document.getElementById("divazul").value;
      if(inputazul == "azul") {
        document.getElementById("divcor").style.background = "blue"
      }

}
function maior () {
    let inputmaior = document.getElementById("maiordez").value;
    if(inputmaior > 10) {
        alert("Maior que 10")
    }
}
function menor () {
    let inputmenor = document.getElementById("menorcinquenta").value;
    if (inputmenor < 50) {
        alert("Menor que 50")
    }
}
function senha () {
    let inputsenha = document.getElementById("senha").value;
    if(inputsenha == "senha") {
        document.getElementById("senhap").textContent = "Senha correta"
    }
}
function escuro () {
    let escuroinput = document.getElementById("escuro").value;
    if (escuroinput == "escuro") {
        document.getElementById("fundo").style.background = "gray"
    }
    if (escuroinput == "claro") {
        document.getElementById("fundo").style.background = "white"
    }
}
function alterar () {
    let alterartudo = document.getElementById("alterar").value;
    if (alterartudo == "cor") {
        document.getElementById("coitado").style.color = "red"
    };
    if (alterartudo == "palavra") {
        document.getElementById("coitado").textContent = "Nãaaaaaoo"
    };
};
function doiselementos () {
    let inputdois = document.getElementById("ascoisas").value;
    if (inputdois == "mude logo") {
        document.getElementById("coisa1").textContent = "Frieren é melhor";
        document.getElementById("coisa2").textContent = "Jojo é pior";
    }
}
function tamanho () {
    let tamanho = document.getElementById("tamanho").value;
    if(tamanho > 20) {
        document.getElementById("tamanhop").style.fontSize = "50px";
        document.getElementById("tamanhop").textContent = "to grandão";
    }
    if(tamanho < 20) {
        document.getElementById("tamanhop").style.fontSize = "10px";
        document.getElementById("tamanhop").textContent = "to é pequeno uai";
    };
};
function sistema () {
    let sistemasimples = document.getElementById("sistema").value;
    if(sistemasimples == "admin") {
        document.getElementById("sistemap").textContent = "Bem-Vindo!!"
    };
};
function verificaremudar () {
    let vilão = document.getElementById("vilão").value;
    if(vilão == "wow") {
        alert("certin")
        document.getElementById("coitado2").textContent = "Socorro!!!";
        document.getElementById("coitado2").style.color = "red";
        document.getElementById("coitado2").style.fontSize = "40px"
    }
    else 
       alert("errouu")
}
function treselem () {
    let inputmal = document.getElementById("treselem").value;
    if(inputmal == "tristeza") {
        document.getElementById("coitado3").style.background = "aqua";
    }
    if(inputmal == "raiva") {
        document.getElementById("coitado4").style.background = "red";
    }
    if(inputmal == "felicidade") {
        document.getElementById("coitado5").style.background = "yellow"
    }
}
function maiorquecem () {
    let inputcem = document.getElementById("maiorquecem").value;
    if(inputcem > 100) {
        document.getElementById("fundo").style.background = "orange"
    }
    if(inputcem < 100) {
        document.getElementById("fundo").style.background = "white"
    }
};
function atividade5 () {
    let copia = document.getElementById("copia").value;
    let copiap = document.getElementById("copiap");
    let escrita = copiap;
    if(copia == "copia") {
        escrita = copiap.textContent = "teste"
    }
}
function verifiquebutton () {
    let inputlegal = document.getElementById("verifiqueemude").value;
    if(inputlegal == "div 1") {
        document.getElementById("mudado1").textContent = "Muehehehe"
    }
    if(inputlegal == "div 2") {
        document.getElementById("mudado2").textContent = "Droga"
    }
}
function atividade7 () {
    let input7 = document.getElementById("atividade7").value;
    if(input7 < 20) {
        document.getElementById("fundo").style.background = "gray"
        document.getElementById("senhap").style.fontSize = "500px"
    }
}