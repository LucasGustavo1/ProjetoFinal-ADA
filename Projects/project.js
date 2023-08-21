function enviar() {
    let código = document.getElementById("código").value;
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let preço = document.getElementById("preço").value;

    // Criar uma nova linha na tabela
    let table = document.getElementById("tabelaProdutos");
    let newRow = table.insertRow(table.rows.length);

    // Adicionar células à nova linha
    let cellCodigo = newRow.insertCell(0);
    let cellProduto = newRow.insertCell(1);
    let cellQuantidade = newRow.insertCell(2);
    let cellPreço = newRow.insertCell(3);

    // Preencher as células com os valores
    cellCodigo.innerHTML = código;
    cellProduto.innerHTML = produto;
    cellQuantidade.innerHTML = quantidade;
    cellPreço.innerHTML = preço;
}