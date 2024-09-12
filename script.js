let carrinho = [];
let total = 0;

function addItem(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    // Atualiza a lista do carrinho
    const listaCarrinho = document.getElementById('carrinho-lista');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    listaCarrinho.appendChild(novoItem);

    // Atualiza o total
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Adicione itens ao carrinho antes de finalizar!");
        return;
    }

    let resumo = "Seu pedido:\n";
    carrinho.forEach(item => {
        resumo += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    resumo += `\nTotal: R$ ${total.toFixed(2)}`;

    alert(resumo);

    // Limpar o carrinho
    carrinho = [];
    total = 0;
    document.getElementById('carrinho-lista').innerHTML = '';
    document.getElementById('total').textContent = 'Total: R$ 0,00';
}
