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

            </div>
        `;
        
        document.querySelector(".prod-container").innerHTML = produto;

    } catch (error) {
        console.error("Erro ao carregar o produto:", error);
    }
}

async function formCompra() {
    const formulario = `
    <form name="formCarrinho">
        <fieldset>
            <div class="containerInput">
                <label for="cep">Cep:</label>
                <input type="text" id="cep" name="cep" placeholder="79000-000" maxlength="10" required>
            </div>
            <div class="containerInput">
                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" placeholder="estado" required>
            </div>
            <div class="containerInput">
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" placeholder="cidade" required>
            </div>
            <div class="containerInput">
                <label for="logradouro">Logradouro:</label>
                <input type="text" id="logradouro" name="logradouro" placeholder="logradouro" required>
            </div>
            <p>Total: $<span id="total-price">${product.price.toFixed(2)}</span></p>
            <div class="ctaForm">
                <button type="submit">Comprar</button>
            </div>
        </fieldset>
    </form>
    `;
    document.querySelector(".form-container").innerHTML = formulario;

    const formCarrinho = document.forms['formCarrinho'];

    formCarrinho.addEventListener('input', async (event) => {
        if (event.target === formCarrinho.cep) {
            const dadosCep = await fetch(`https://viacep.com.br/ws/${event.target.value}/json/`).then(res => res.json());
            if (dadosCep.uf && dadosCep.localidade && dadosCep.logradouro) {
                formCarrinho.estado.value = dadosCep.uf;
                formCarrinho.cidade.value = dadosCep.localidade;
                formCarrinho.logradouro.value = dadosCep.logradouro;
            }
        } else if (formCarrinho.estado.value && formCarrinho.cidade.value && formCarrinho.logradouro.value) {
            const endereco = await fetch(`https://viacep.com.br/ws/${formCarrinho.estado.value.toLowerCase()}/${formCarrinho.cidade.value.toLowerCase()}/${formCarrinho.logradouro.value.toLowerCase()}/json/`)
            .then(res => res.json());
            if (endereco && endereco.length > 0) {
                formCarrinho.cep.value = endereco[0].cep;
            }
        }
        
        // Total
        document.getElementById("quantity").addEventListener("input", function() {
            const quantidade = parseInt(this.value);
            const total = (product.price * quantidade).toFixed(2);
            document.getElementById("total-price").textContent = total;
        });

    });
}

document.addEventListener("DOMContentLoaded", carregarProduto(), formCompra());