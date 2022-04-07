'use strict'

let mask = document.querySelector('.mask');

window.addEventListener('load', function() {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove() 
    }, 1000);
})
 

//Меню
const menu = document.querySelector('.header__menu');
const fullMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');
const links = document.querySelectorAll('a');

menu.addEventListener('click', function(){
    fullMenu.setAttribute('style', 'display: block;')
})

closeMenu.addEventListener('click', function(){
    fullMenu.setAttribute('style', 'display: none;')
})

links.forEach(e => {
    e.addEventListener('click', function() {
        fullMenu.setAttribute('style', 'display: none;');
    })
})


//Слайдер 1
$('.slider123').slick({
    dots: true,
    waitForAnimate: true,
    slidesToShow: 4,
    slidesToScroll:4,
    
    responsive:[
        {
            breakpoint: 1300,
            settings: {
                slidesToShow:4,
                slidesToScroll:4,
            }
        },

        {
            breakpoint: 1000,
            settings: {
                slidesToShow:3,
                slidesToScroll:3,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        }, 
    ]
});

//Слайдер 2
$('.horse__slaider-line').slick({
    dots: true,
    waitForAnimate: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:
    [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]
});

