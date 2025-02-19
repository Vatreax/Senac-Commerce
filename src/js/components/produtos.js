const produtoLista = ({ id, title, price, category,image }) => {
    return `
    <tr>
        <td>${title}</td>
        <td>${price}</td>
        <td>${category}</td>
        <td><img src="${image}" class="img_produto" alt="${title}"></td>
        <td>
            <button class="btn_editar" id="editar_${id}">Editar</button>
            <button class="btn_excluir" id="excluir_${id}">Excluir</button>
        </td>
    </tr>`;
};

const produtoTabela = (produtos) => {
    return `
    <div class="container">
        <table class="tabela">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Imagem</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${produtos.map(produtoLista).join('')}
            </tbody>
        </table>
    </div>
    `;
}

const produtoDetalhe = ({ id, title, price, category, description, image }) => {
    return `
    <div class="container">
        <div class="form">
            <label for="title">Titulo</label>
            <input type="text" id="title" value="${title}">
            <label for="price">Preço</label>
            <input type="text" id="price" value="${price}">
            <label for="category">Categoria</label>
            <input type="text" id="category" value="${category}">
            <label for="description">Descrição</label>
            <textarea id="description">${description}</textarea>
            <label for="image">Imagem</label>
            <input type="text" id="image" value="${image}">
            <button class="btn_salvar" id="salvar_${id}">Salvar</button>
        </div>
    </div>
    `;
};

export { produtoLista, produtoDetalhe, produtoTabela };