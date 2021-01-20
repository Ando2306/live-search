// Կենդանի  Փնտրում
let inp = document.querySelector('#input');
let li = document.querySelectorAll('li'), val;

for(let i = 0; i < li.length; i++){
    li[i].classList.add('hide');
}

inp.oninput = function(){
    val = this.value.trim();
    // inp.style.color = 'red'

    if(val != ''){
        li.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else{
                elem.classList.remove('hide');
            }
        })
    }
    else{
        for(let i = 0; i < li.length; i++){
            li[i].classList.add('hide');
        }
    }
}