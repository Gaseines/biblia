let menu = document.querySelector('.sidebar')
let btn = document.getElementById('menu-btn')
let burguer = document.querySelector('.burguer')
let casa = document.querySelector('.casinha')

const abrirMenu = () => {
    if(menu.style.width == '150px'){
        menu.classList.remove('abreMenu')
        menu.classList.add('abreMenu2')
        menu.style.width = '0px'
        btn.classList.remove('movMenu')
        btn.classList.add('movMenu2')
        burguer.classList.remove('movMenu')
        burguer.classList.add('movMenu2')
        casa.classList.remove('casaR')
        casa.classList.add('casaL')
        
    }else{
        menu.classList.add('abreMenu')
        menu.style.width = '150px'
        btn.classList.add('movMenu')
        burguer.classList.add('movMenu')
        setTimeout(() => {
            casa.classList.add('casaR')
        }, 500)

    }
    setTimeout(() => {
        menu.classList.remove('abreMenu2')
        btn.classList.remove('movMenu2')
        burguer.classList.remove('movMenu2')
        casa.classList.remove('casaL')
    }, 1000)
}




btn.addEventListener('click', abrirMenu)