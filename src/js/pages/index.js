async function filtro() {

    const categorias = await fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json());


    const newOption = categorias.map(itemAtual => `<option value="${itemAtual}">${itemAtual}</option>`);
    const newSelect = `
        <select id="categorySelect">
            <option value="todos">Todos</option>
            ${newOption}
        </select>
        <div id="products"></div>
    `;

    document.body.innerHTML = newSelect;

    async function exibirProdutos(categoria = "todos") {
        let url = 'https://fakestoreapi.com/products';
        if (categoria !== "todos") {
            url += `/category/${categoria}`;
        }

        const produtos = await fetch(url).then(res => res.json());

        const produtosHTML = produtos.map(produto => `
            <div class="produto">
                <img src="${produto.image}" alt="${produto.title}" width="100">
                <p>${produto.title}</p>
                <a href="produto.html?id=${produto.id}">Ver mais</a>
            </div>
        `);

        document.getElementById("products").innerHTML = produtosHTML;
    }

    document.getElementById("categorySelect").addEventListener("change", (e) => {
        exibirProdutos(e.target.value);
    });

    exibirProdutos();
}

filtro();