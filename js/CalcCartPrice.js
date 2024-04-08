function calcPrice(){
    const cartItems = document.querySelectorAll('.cart-item')
    const totalPrice = document.querySelector('.total-price')

    let cartPrice = 0

    if(cartItems){
        for(let item of cartItems){
            let price = parseInt(item.querySelector('.price__currency').innerText) 
            let quantity = parseInt(item.querySelector('.items__current').innerText)
            cartPrice = cartPrice + (price * quantity)    
        }
    }

    // for(let item of cartItems){
    //     let price = parseInt(item.querySelector('.price__currency').innerText) 
    //     let quantity = parseInt(item.querySelector('.items__current').innerText)
    //     cartPrice = cartPrice + (price * quantity)    
    // }
    // return cartPrice
    totalPrice.innerText = cartPrice
    
    const cartTotal = document.querySelector('.cart-total')
    const delivery = document.querySelector('.delivery-cost')

    if(cartPrice >= 600){

        cartTotal.querySelector('p').style.display = "block"
        console.log(delivery.querySelector('p'));
        delivery.classList.add('free')
        delivery.innerText = "бесплатно"
    }else{
        cartTotal.querySelector('p').style.display = "block"
        console.log(delivery.querySelector('p'));
        delivery.classList.remove('free')
        delivery.innerText = '250 ₽'
    }
}
calcPrice()