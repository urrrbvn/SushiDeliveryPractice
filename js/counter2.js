window.addEventListener('click', function(event){

    let counter

    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterCont = event.target.closest('.counter-wrapper')
        counter = counterCont.querySelector('[data-counter]')
    }
    if(event.target.dataset.action == 'plus'){
        counter.innerText = parseInt(counter.innerText) + 1
        calcPrice()
    }
    if(event.target.dataset.action == 'minus'){
        if(parseInt(counter.innerText) > 1){
            counter.innerText = parseInt(counter.innerText) - 1
            calcPrice()
        }else if(parseInt(counter.innerText) == 1){
            if(event.target.closest('.cart-item')){
                event.target.closest('.cart-item').remove()
                toggleAlert()
                calcPrice()
            }
        }
    }
})    