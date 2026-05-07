function logar() {
    let logar = document.getElementById("login").value;
    let senha = document.getElementById("senhalogin").value;
    let escritalogin = document.getElementById("paragrafologin")
    if (logar == "Picleshumano13" && senha == 10203040) {
        alert("Logado!");
        escritalogin.textContent = "Bem vindo"
    }
    else if(logar == "" && senha == "") {
        alert("Senha ou Usuário invalidos");
        escritalogin.textContent = "Preencha os campos"
        }
        else if (logar == "professor" && senha == "senac") {
            escritalogin.textContent = "Bem vindo, professor!"
            alert("Bem vindo Professor!")
        }
            else {
                alert("Usuário ou senha inválidos");
                escritalogin.textContent = "Tente Novamente!"
            }
};
function verificar () {
    let  idade = document.getElementById("idade").value;
    let escritaidade = document.getElementById("paraidade");
     if (idade <= 10 && idade > 0) {
        alert("Criança");
        escritaidade.textContent = "Criança"
    }
    else if (idade <= 15 && idade > 10) {
        alert("Adolescente");
        escritaidade.textContent = "Adolescente"
    }
    else if(idade >= 18 && idade < 65) {
        alert("Adulto")
        escritaidade.textContent = "Adulto"
    }
    else if(idade >= 65 && idade < 100) {
        alert("Idoso")
        escritaidade.textContent = "Idoso"
    }
    else if(idade >= 100) {
        escritaidade.textContent = "Sarcofogo"
    }
    else if(idade <= 0) {
        alert("Erro")
    }
    else {
        alert("Coloca a idade animal")
    }
}
function desconto () {
    let inputdesconto = document.getElementById("desconto").value;
    let inputvip = document.getElementById("vip").value;
    let inputcupom = document.getElementById("cupom").value;
    let escritadesconto = document.getElementById("paradesconto");
    let valordesconto = document.getElementById("valordesconto")
    if (inputdesconto >= 500 && inputvip == "sim" && inputcupom == "nenhum") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.20
        escritadesconto.textContent = "Desconto de 20% recebido";
    }
    else if(inputdesconto >= 500 && inputvip == "sim" && inputcupom == "cupom123") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.30
        escritadesconto.textContent = "Desconto de 30% recebido";
    }
    else if(inputdesconto >= 500 && inputvip == "não" && inputcupom == "nenhum") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.10
        escritadesconto.textContent = "Desconto de 10%";
    }
    else if(inputdesconto >=500 && inputvip == "não" && inputcupom == "cupom123") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.25
        escritadesconto.textContent = "Desconto de 25%";
    }
    else if(inputdesconto >=300 && inputdesconto <= 499 && inputvip == "sim" && inputcupom == "nenhum") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.15
        escritadesconto.textContent = "Desconto de 15% recebido";
    }
    else if(inputdesconto >=300 && inputdesconto <= 499 && inputvip == "sim" && inputcupom == "cupom123") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.20
        escritadesconto.textContent = "Desconto de 20% recebido";
    }
    else if(inputdesconto >=300 && inputdesconto <=499 && inputvip == "não" && inputcupom == "cupom123") {
        valordesconto.textContent = inputdesconto - inputdesconto * 0.05
        escritadesconto.textContent = "Desconto de 5% recebido";
    }
    else if(inputdesconto <= 0) {
        escritadesconto.textContent = "Insira o valor por favor"
    }
    else {
        valordesconto.textContent = inputdesconto;
        escritadesconto.textContent = "Nenhum desconto recebido. Se for vip ou estiver usando cupom, descontos só são aceitos para compras acima de  R$ 300.";
    };
};
function avaliacao () {
    let nota = document.getElementById("notas").value;
    let frequencia = document.getElementById("frequência").value;
    let escritaavaliacao = document.getElementById("Resultado");
    if(nota >= 60 && nota <= 100 && frequencia >= 75 && frequencia <=100) {
        escritaavaliacao.textContent = "Aprovado!";
    }
    else if(nota >= 40 && nota < 60 && frequencia >=75 && frequencia <=100) {
        escritaavaliacao.textContent = "Recuperação";
    }
    else if(nota >= 40 && nota < 60 && frequencia < 75) {
        escritaavaliacao.textContent = "Recuperação";
    }
    else if(nota < 40 && frequencia < 75 && frequencia >=0) {
        escritaavaliacao.textContent = "Reprovado"
    }
    else if(nota < 0 || nota > 100 && frequencia < 0 || frequencia > 100) {
        escritaavaliacao.textContent = "Valores inválidos"
    }
    else {
        escritaavaliacao.textContent = "Erro 404"
    }
}