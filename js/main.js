const menu = document.querySelector('.main-menu')
const menuBtn = document.querySelector('.btn-burger')
const menuList = document.querySelector('.menu-list')
const menuShadow = document.querySelector('.menu-shadow')

let menuOpened = false

menuBtn.onclick = (e) => {
    menuList.classList.add('show')
    menuShadow.classList.add('show')
    document.body.classList.add('stop-scrolling')
}
menuShadow.onclick = (e) => {
    menuList.classList.remove('show')
    menuShadow.classList.remove('show')
    document.body.classList.remove('stop-scrolling')
}

document.addEventListener('swiped-left', function(e) {
    menuList.classList.remove('show')
    menuShadow.classList.remove('show')
    document.body.classList.remove('stop-scrolling')
});
document.addEventListener('swiped-right', function(e) {
    menuList.classList.add('show')
    menuShadow.classList.add('show')
    document.body.classList.add('stop-scrolling')
});


const checkScroll = (e) => {
    if(window.pageYOffset > window.innerHeight - 60) {
        menu.classList.add('darker')
    } else {
        menu.classList.remove('darker')
    }
}

window.onscroll = checkScroll
window.onload = checkScroll

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            555: {
                items: 2
            },
            800: {
                items: 3
            },
            1080: {
                items: 4
            }
        }
    });
});