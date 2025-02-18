async function pesquisar_categorias(){
    const categorias = await fetch('https://fakestoreapi.com/products/categories').then(response=>response.json())
    const newOption = categorias.map(itemAtual => `<option value="${itemAtual}">${itemAtual}</option>`);
    const newSelect = `<select>
    <option class = ''>Todos</option>
    ${newOption}
    </select>`;
    document.body.innerHTML = newSelect;
}
pesquisar_categorias();

// Preciso agora fazer com que ao estar em todos, 
// ele vai aparecer todos os produtos, se filtrar por tal, ele aparece tal

// Cada produto deverá conter uma url para redirecionar para a página 
// única do produto através de um parâmetro de busca;