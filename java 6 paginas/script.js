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