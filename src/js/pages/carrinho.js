let totalGeral = 0;

async function carregarProdutos() {
    const ids_produtos = JSON.parse(localStorage.getItem('produtos_no_carrinho')) || [];
    if (!ids_produtos.length) return alert("Nenhum produto encontrado no carrinho!");

    const containerWrapper = document.querySelector(".produtos-wrapper");
    containerWrapper.innerHTML = "";

    const produtos = await Promise.all(ids_produtos.map(async (id) => {
        try {
            const product = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
            return `
                <div class="prod-container" data-id="${product.id}">
                    <h1 class="prod-title">${product.title}</h1>
                    <img class="prod-img" src="${product.image}" alt="Imagem do produto">
                    <div class="price-container">
                        <p>Preço: $<span class="prod-price">${product.price.toFixed(2)}</span></p>
                        <input type="number" id="quantity-${product.id}" min="1" value="1" class="prod-quantity" />
                    </div>
                </div>`;
        } catch (e) {
            console.error("Erro ao carregar o produto:", e);
            return "";
        }
    }));

    containerWrapper.innerHTML = produtos.join("");

    containerWrapper.addEventListener("input", (event) => {
        if (event.target.classList.contains("prod-quantity")) updateTotal();
    });

    formCompra();
}

function updateTotal() {
    totalGeral = 0;
    document.querySelectorAll(".prod-container").forEach(produto => {
        totalGeral += parseFloat(produto.querySelector(".prod-price").textContent) * parseInt(produto.querySelector(".prod-quantity").value);
    });
    document.getElementById("total-price").textContent = totalGeral.toFixed(2);
}

function formCompra() {
    const formHTML = `
        <form name="formCarrinho">
            <fieldset>
                <div class="containerInput"><label for="cep">Cep:</label><input type="text" id="cep" name="cep" placeholder="79000-000" maxlength="10" required></div>
                <div class="containerInput"><label for="estado">Estado:</label><input type="text" id="estado" name="estado" placeholder="estado" required></div>
                <div class="containerInput"><label for="cidade">Cidade:</label><input type="text" id="cidade" name="cidade" placeholder="cidade" required></div>
                <div class="containerInput"><label for="logradouro">Logradouro:</label><input type="text" id="logradouro" name="logradouro" placeholder="logradouro" required></div>
                <p>Total: $<span id="total-price">${totalGeral.toFixed(2)}</span></p>
                <div class="ctaForm"><button type="submit">Comprar</button></div>
            </fieldset>
        </form>`;

    document.querySelector(".form-container").innerHTML = formHTML;
    const formCarrinho = document.forms['formCarrinho'];

    formCarrinho.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Compra realizada com sucesso!\nValor Total: $${totalGeral.toFixed(2)}`);
    });

    formCarrinho.cep.addEventListener('input', async (e) => {
        const dadosCep = await (await fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)).json();
        if (dadosCep.uf) {
            formCarrinho.estado.value = dadosCep.uf;
            formCarrinho.cidade.value = dadosCep.localidade;
            formCarrinho.logradouro.value = dadosCep.logradouro;
        }
    });

    updateTotal();
}

document.addEventListener("DOMContentLoaded", carregarProdutos);
