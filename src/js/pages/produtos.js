import { produtoTabela, produtoDetalhe } from "../components/produtos.js";
import alert from "../components/alert.js";

const token = sessionStorage.getItem('userId');

if(token === null || token === undefined){
    //window.location.href = '/login.html';
}

async function getProdutos() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}

async function listarProdutos() {
    document.getElementById('app').innerHTML = produtoTabela(await getProdutos());

    document.querySelectorAll('.btn_editar').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.id.split('_')[1];
            window.location.href = `/produtos.html?id=${id}`;
        });
    });

    document.querySelectorAll('.btn_excluir').forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            if (!confirm('Deseja realmente excluir este produto?')) {
                return;
            }

            const id = e.target.id.split('_')[1];
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                document.getElementById('response').innerHTML = alert('Produto excluído com sucesso!');
            
                let modal = document.getElementById('successModal');
                document.querySelector('.close-btn').addEventListener('click', () => modal.style.display = 'none');

                modal.style.display = 'flex';
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = 'none';
                    }
                }
            }
        });
    });
}

async function salvarProduto(id) {
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 200) {
        document.getElementById('response').innerHTML = alert('Produto atualizado com sucesso!');
    
        let modal = document.getElementById('successModal');
        document.querySelector('.close-btn').addEventListener('click', () => modal.style.display = 'none');

        modal.style.display = 'flex';
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
}

async function listarProdutoEdicao(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const produto = await response.json();
    document.getElementById('app').innerHTML = produtoDetalhe(produto);

    document.querySelector('.btn_salvar').addEventListener('click', () => salvarProduto(id));
}

if( window.location.search.includes('id') ){
    await listarProdutoEdicao();
}else{
    await listarProdutos();
}

