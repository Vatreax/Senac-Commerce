import produtoHTML from "../components/produto"


async function productView (){
    const product = new URLSearchParams(document.location.search).get('container-prod');

    fetch(`https://fakestoreapi.com/products/${product}`)
    .then(res => res.json())
    .then(json => {
        document.getElementById('produto').innerHTML += produtoHTML(json)
    });
}

