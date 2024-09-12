let pedido = [];
let total = 0;

function addItem(nome, preco) {
    pedido.push({ nome, preco });
    total += preco;

    // Atualiza a lista de pedidos
    const listaPedido = document.getElementById('order-list');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    listaPedido.appendChild(novoItem);

    // Atualiza o total
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function confirmarPedido() {
    if (pedido.length === 0) {
        alert("Adicione itens ao pedido antes de confirmar!");
        return;
    }

    let resumo = "Seu pedido:\n";
    pedido.forEach(item => {
        resumo += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    resumo += `\nTotal: R$ ${total.toFixed(2)}`;

    alert(resumo);

    // Limpar pedido
    pedido = [];
    total = 0;
    document.getElementById('order-list').innerHTML = '';
    document.getElementById('total').textContent = 'Total: R$ 0,00';
}
