window.addEventListener('click', function(event){

    let product = {}

    if(event.target.dataset.hasOwnProperty("cart")){
        const card = event.target.closest('.card')
        console.log(card);
        const cardContent = card.querySelector('.card-body')
        
        // тут я хз чем думал, можно было просто сделать объект внутри функции и в свойствах напрямую указывать ссылки на значения
        product.id = card.dataset.id
        product.img = card.querySelector('.product-img').src
        product.title = cardContent.querySelector('.item-title').innerText
        product.quantity = cardContent.querySelector('p').children[0].innerText
        product.counter = cardContent.querySelector('.items__current').innerText
        product.weight = cardContent.querySelector('.price__weight').innerText
        product.price = cardContent.querySelector('.price__currency').innerText
        //Еще не надо было писать столько промежуточной хуйни, достаточно было юзать просто квайри селектор
        console.log(product);

        const newCartItem = this.document.createElement('div')
        newCartItem.setAttribute('class', 'cart-item')
        newCartItem.innerHTML = `
        <div class="cart-item__top" data-id="${product.id}">
									<div class="cart-item__img">
										<img src="${product.img}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${product.title}</div>
										<div class="cart-item__weight">${product.quantity} / ${product.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${product.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${product.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
        `
        this.document.querySelector('.cart-wrapper').append(newCartItem)
    }
})