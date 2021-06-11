const menu = document.querySelector('.main-menu')

const checkScroll = (e) => {
    if(window.pageYOffset > window.innerHeight - 60) {
        menu.classList.add('darker')
    } else {
        menu.classList.remove('darker')
    }
}

window.onscroll = checkScroll
window.onload = checkScroll

const menuBtn = document.querySelector('.btn-burger')
const menuList = document.querySelector('.menu-list')
const menuShadow = document.querySelector('.menu-shadow')

menuBtn.onclick = (e) => {
    menuList.classList.toggle('show')
    menuShadow.classList.toggle('show')
}
menuShadow.onclick = (e) => {
    menuList.classList.remove('show')
    menuShadow.classList.remove('show')
}

document.addEventListener('swiped-left', function(e) {
    menuList.classList.remove('show')
    menuShadow.classList.remove('show')
});
document.addEventListener('swiped-right', function(e) {
    menuList.classList.add('show')
    menuShadow.classList.add('show')
});