let produto = [];


function adicionarproduto() {
    let nome = document.getElementById("produto").value;
    let preço = document.getElementById("preço").value;
    let mensagem = document.getElementById("mensagem")
    if (nome == "") {
        mensagem.textContent = "Digite o nome do produto";
        mensagem.style.color = "red";
    }
    else {
        produto.push(nome);
        produto.push(preço);
        mensagem.textContent = "Produto adicionado";
        mensagem.style.color = "green";
        mostrarProduto();
    };

};

function mostrarProduto() {
    let lista = document.getElementById("listadeprodutos");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < produto.length; i++) {
        let item = document.createElement("li");
        item.textContent = produto[i];
        lista.appendChild(item);
    };
};
