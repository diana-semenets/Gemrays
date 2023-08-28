




const testiomnialData = [
    {
        avatar: "img/insta3.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta3.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta4.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta3.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta4.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta2.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta3.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta4.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    }, 
    {
        avatar: "img/insta2.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta3.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    },
    {
        avatar: "img/insta4.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    }, 
    {
        avatar: "img/insta4.webp",
        name: "Топаз прозорий, вага 49,8гр",
        alt: "Топаз прозорий",
    }
    
]

const slideHolder = document.querySelector(".catalog-cards")
for (let i of testiomnialData) slideHolder.innerHTML += `
     <div class="catalog-cards__card card">
        <div class="card__img"><img src="${i.avatar}" alt="${i.alt}"></div>
        <p class="card__text">${i.name}</p>
        <a class="card__btn" href="contact.html">Замовити</a>
    </div>`  




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