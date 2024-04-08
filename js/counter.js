const decrBtn = document.querySelector('[data-action="minus"]')
const incrBtn = document.querySelector('[data-action="plus"]')


decrBtn.addEventListener('click', function(){
    if(+counter.textContent > 0){
        counter.textContent = +counter.textContent-1
        console.log(counter.textContent);
    }
});
incrBtn.addEventListener('click', function(){
    counter.textContent = +counter.textContent+1
    console.log(counter.textContent);
});