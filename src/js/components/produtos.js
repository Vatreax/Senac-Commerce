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

const produtoDetalhe = ({ id, title, price, category, image }) => {};

export { produtoLista, produtoDetalhe, produtoTabela };