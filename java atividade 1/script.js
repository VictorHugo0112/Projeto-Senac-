let nome = "Victor"
alert(nome);
let a = 60;
let b = 7;
alert(a + b)
function caixinha () {
alert("Olá mundo");
}
function teste () {
    let texto = document.getElementById("textinho");
    texto.textContent = "Mas Frieren é melhor";
}
function cor () {
    document.getElementById("cor").style.background = "blue";

}
function mostrar () {
    let clique = document.getElementById("clique")
    clique.textContent = "Você Clicou"

}
function limpar () {
    let limpar = document.getElementById("limpar")
    limpar.textContent = ""
}
function valor () {
    let par = document.getElementById("paragrafo");
    let cax = document.getElementById("caixa");
    let escrita = par.textContent;
    cax.value = escrita;
}
function soma() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = num1 + num2;
    let local = document.getElementById("resultado");
    local.textContent = resultado;  
}
function background () {
    document.getElementById("background").style.background = "red";
}
function volte () {
    document.getElementById("background").style.background = "white";
}
function frieren () {
    let frieren = document.getElementById("tamanho");
    frieren.style.fontSize = "50px";
    frieren.textContent = "Frieren Grandona";
}
function frieren2 () {
    let frieren2 = document.getElementById("tamanho");
    frieren2.style.fontSize = "15px"
    frieren2.textContent= "Frieren Pequena"
}
function corparagrafo() {
    document.getElementById("corparagrafo").style.color = "green";
}
function voltarcorparagrafo() {
    document.getElementById("corparagrafo").style.color = "black";
}
function elementos () {
    let elementos = document.getElementById("memude");
    elementos.style.color = "aqua"
    elementos.style.fontSize = "50px"
}
function elementos2 () {
    let elementos2 = document.getElementById("memude");
    elementos2.style.background = "green";
    elementos2.style.fontSize = "2px"
}
function voltarelementos () {
    let voltarelementos = document.getElementById("memude");
    voltarelementos.style.color = "black"
    voltarelementos.style.background = "white"
    voltarelementos.style.fontSize = "15px"
}
function telementos() {
    let telementos = document.getElementById("telementos");
    let telementos2 = document.getElementById("telementos2");
    let telementos3 = document.getElementById("telementos3");
    telementos.textContent = "Stark";
    telementos2.textContent = "Frieren";
    telementos3.textContent = "Fern";
}
function atividadedificil () {
    let dificil = document.getElementById("paragrafodificil");
    dificil.textContent = "Mudei";
    dificil.style.color = "blue";
    dificil.style.fontSize = "50px";
}
let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    let valor = document.getElementById("campoTexto").value;

    document.getElementById("saida1").innerHTML = valor;
    document.getElementById("saida2").innerHTML = valor;
});
function color () {
    let color = document.getElementById("afetado");
    color.style.color = "aqua";
}
function size () {
    let size = document.getElementById("afetado");
    size.style.fontSize = "50px";
}
function text () {
    let text = document.getElementById("afetado");
    text.textContent = "ferrou";
}
function div() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    div1.style.color = "red";
    div2.style.color = "blue";
}
let botao7 = document.getElementById("botao7");

botaocopia.addEventListener("click", function() {
    let valorcopia = document.getElementById("campoTextocopia").value;
    let paragrafocopia = document.getElementById("paragrafocopia");

    paragrafocopia.innerHTML = valor;
    paragrafocopia.style.color = "blue";
});
function somaelimpa() {
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let resultado2 = num3 + num4;
    let local1 = document.getElementById("resultado2");
    local1.textContent = resultado2;  
   } 
   function limparsoma() {
    let resultado3 = document.getElementById("resultado2");
    resultado3.textContent = "";
   }
   function mudartudo() {
    let mudetudo = document.getElementById("background")
    mudetudo.style.color = "orange"
    mudetudo.style.fontSize = "50px"
   }
