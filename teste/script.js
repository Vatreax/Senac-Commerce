// Explicando passo a passo para mim mesmo, e quem for ver essa branch
// 1 - ID Produto: Usando o localStorage, é possivel guardar o ID vindo de outra tela; Depois o getItem para recupera-lo.
// 2 - Função fetch para fazer uma requisição para a API; Usando await para aguardar a a resposta da API.
// 3 - HTML dinâmico para exibição do produto.
// 4 - Evento para atualizar o preço total.
// 5 - Captura de erros, caso a requisição falhe por exemplo.
// 6 - Quando o DOM for carregado, é ativada a função carregarProduto.

async function carregarProduto() {
    const id_produto = localStorage.getItem('id_produto'); 
    if (!id_produto) {
        alert("ID do produto não encontrado!");
        return;
    }

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id_produto}`);
        const product = await response.json();

        const produto = `
            <h1 class="prod-title">${product.title}</h1>
            <img class="prod-img" src="${product.image}" alt="Imagem do produto">
            <div class="price-container">
                <p>Preço: $<span class="prod-price">${product.price.toFixed(2)}</span></p>
                <label for="quantity">Quantidade:</label>
                <input type="number" id="quantity" min="1" value="1" />
                <p>Total: $<span id="total-price">${product.price.toFixed(2)}</span></p>
            </div>
        `;

        document.querySelector(".prod-container").innerHTML = produto;

        document.getElementById("quantity").addEventListener("input", function() {
            const quantidade = parseInt(this.value);
            const total = (product.price * quantidade).toFixed(2);
            document.getElementById("total-price").textContent = total;
        });

    } catch (error) {
        console.error("Erro ao carregar o produto:", error);
    }
}

document.addEventListener("DOMContentLoaded", carregarProduto);