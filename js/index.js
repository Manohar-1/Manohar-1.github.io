

var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')

window.addEventListener('resize',()=>{
    if(mobileMenu[0].classList.contains('active')){
        mobileMenu[0].classList.remove('active')
    }
})


var clickedBtn = ()=>{
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click',clickedBtn)


