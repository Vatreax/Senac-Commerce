const produtoLista = ({ id, title, price, category,image }) => {
    return `
    <tr>
        <td>${title}</td>
        <td>$${price}</td>
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
            <div class="form-group">
                <label for="title">Titulo</label>
                <input type="text" id="title" value="${title}">
            </div>
            <div class="form-group">
                <label for="price">Preço</label>
                <input type="text" id="price" value="${price}">
            </div>
            <div class="form-group">
                <label for="category">Categoria</label>
                <input type="text" id="category" value="${category}">
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <input type="text" class="textarea" id="description" value="${description}">
            </div>
            <div class="form-group">
                <label for="image">Imagem</label>
                <input type="text" id="image" value="${image}">
            </div>
            <div class="form-group">
                <img src="${image}" class="img_produto" alt="${title}">
                <input type="file" id="image" value="${image}">
            </div>
            <div class="form-group">
                <button class="btn_voltar">Voltar</button>
                <button class="btn_salvar" id="salvar_${id}">Salvar</button>
            </div>
        </div>
    </div>
    `;
};

export { produtoLista, produtoDetalhe, produtoTabela };