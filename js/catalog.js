
const btn = document.querySelector('.catalog-btn');
let wrapper = document.querySelectorAll('.card');
let currentItems = 10;

btn.addEventListener('click', 
    function()  {
    console.log('hi');
        for(let i = currentItems; i < currentItems+5; i++) {
            if(wrapper[i]){
                wrapper[i].style.display = 'block';
            }
        }
        currentItems +=5;
        if(currentItems >= wrapper.length) {
            event.target.style.display = 'none';
        }
})