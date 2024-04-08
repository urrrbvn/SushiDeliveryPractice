function toggleAlert(){
    console.log('YES!!');

    const cart = document.querySelector('.cart-wrapper')
    const cartEmptyAlert = document.querySelector('[data-cart-empty]')
    
    const orderForm = document.querySelector('#order-form')

    if(cart.children.length > 0){
        cartEmptyAlert.style.display = "none"
        orderForm.style.display = "block"
    }else if(cart.children.length == 0){
        cartEmptyAlert.style.display = "block"
        orderForm.style.display = "none"
    }
}

toggleAlert()