async function productView (){
    const product = new URLSearchParams(document.location.search).get('container-prod');

    fetch(`https://fakestoreapi.com/products/${}`)
    .then(res => res.json())
    .then(json => {
        document.getElementById('produto').innerHTML += componenteProdutoUnico(json)
    });
}