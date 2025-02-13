async function teste(){
    const product = await fetch(`https://fakestoreapi.com/products/2`).then(res => res.json());

    console.log(product);
}


// document.addEventListener('DOMContentLoaded', function() {
//     // Aqui, simulamos o JSON que você forneceu como se fosse uma resposta de API
    const productData = {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    };

    // Função para preencher os dados na página
    function displayProduct(product) {
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price.toFixed(2);
        document.getElementById('product-rating').innerText = product.rating.rate;
        document.getElementById('product-rating-count').innerText = product.rating.count;
    }

    // Exibir os dados na página
    displayProduct(productData);
    teste();
;