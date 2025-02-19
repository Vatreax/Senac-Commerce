import { produtoTabela } from "../components/produtos.js";

async function getProdutos() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}

document.getElementById('app').innerHTML = produtoTabela(await getProdutos());