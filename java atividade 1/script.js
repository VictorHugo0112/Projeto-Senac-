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