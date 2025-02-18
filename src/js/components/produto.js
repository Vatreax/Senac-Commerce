const produtoHTML = `

    <div class="prod-container" data-id="${product.id}">
        <h1 class="prod-title">${product.title}</h1>
        <img class="prod-img" src="${product.image}" alt="Imagem do produto">
        <p class="prod-description" >${product.description}</p>
        <p class="prod-category">${product.category}</p>
        <div class="price-container">
            <p>Preço: $<span class="prod-price">${product.price.toFixed(2)}</span></p>
            <input type="number" id="quantity-${product.id}" min="1" value="1" class="prod-quantity" />
        </div>
        <div class="container-raiting">
            <p class="prod-rating">${product.rating.rate}</p>
            <p class="prod-count">${product.rating.count}</p>
        </div>
    </div> 
    `;