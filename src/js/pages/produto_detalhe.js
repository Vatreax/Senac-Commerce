async function buscarProdutoId() {
    const produtoId = new URLSearchParams(window.location.search).get('id');
    if (!produtoId) return;

    const produto = await fetch(`https://fakestoreapi.com/products/${produtoId}`)
        .then(res => res.json());

    document.getElementById('produto').innerHTML = `
        <div id="boxProduto">
            <h1>${produto.title}</h1>
            <img src="${produto.image}" alt="${produto.title}">
            <p><strong>Categoria:</strong> ${produto.category}</p>
            <p><strong>Preço:</strong> R$ ${produto.price}</p>
            <p><strong>Descrição:</strong> ${produto.description}</p>
            <a href="./carrinho.html" id="irCarrinho">Carrinho</a>
            <button id="favoritar" data-produto="${produto.id}">❤ Favoritar</button>
        </div>
    `;

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.includes(produto.id.toString())) {
        document.getElementById('favoritar').classList.add("favoritado");
    }
}

async function clickProdutoFavorito(event) {
    const favoritado = event.target.dataset.produto;
    
    if (!favoritado) return;

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (!favoritos.includes(favoritado)) {
        favoritos.push(favoritado);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        event.target.classList.add("favoritado");
    } else {
        const index = favoritos.indexOf(favoritado);
        if (index !== -1) {
            favoritos.splice(index, 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            event.target.classList.remove("favoritado");
        }
    }
}

document.addEventListener('click', clickProdutoFavorito);

window.onload = buscarProdutoId;
