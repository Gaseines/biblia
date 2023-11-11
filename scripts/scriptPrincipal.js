let menu = document.querySelector('.sidebar')
let opcSidebar = document.querySelector('.sidebarOpc')
let btn = document.getElementById('menu-btn')
let burguer = document.querySelector('.burguer')
let casa = document.querySelector('.casinha')
let containerDarkLight = document.querySelector('.container-light-mode')


let bolinhaDarkLight = document.querySelector('.bolinha')
var LuaSol = document.getElementById("btn-light-mode-p")
let btnDarkLight = document.querySelector('.btn-light-mode')
let background = document.querySelector('#background video')
let htmlClass = document.querySelector('html')
let casaStyle = document.querySelector('.casinha g')


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
        
        setTimeout(() =>{
            containerDarkLight.style.opacity = '100%'
        }, 550)
        
    }else{
        
        menu.classList.add('abreMenu')
        menu.style.width = '150px'
        btn.classList.add('movMenu')
        burguer.classList.add('movMenu')
        setTimeout(() => {
            casa.classList.add('casaR')
        }, 500)

        setTimeout(() =>{
            containerDarkLight.style.opacity = '0%'
        }, 500)

    }
    setTimeout(() => {
        menu.classList.remove('abreMenu2')
        btn.classList.remove('movMenu2')
        burguer.classList.remove('movMenu2')
        casa.classList.remove('casaL')
    }, 1000)
}

const DarkLight = () => {
    // Obtém apenas o nome do arquivo da URL da imagem
    const srcLua = LuaSol.src.split('/').pop()
    

    if (srcLua === "lua.png") {
        background.src = './midias/planoDeFundo2.mp4'
        htmlClass.classList.add('light-mode')
        bolinhaDarkLight.classList.add('lMode')
        bolinhaDarkLight.classList.remove('rMode')
        burguer.src = './midias/burguer2.png'
        casaStyle.style.fill = '#000000'
        LuaSol.src = '/midias/sol.png'
    } else {
        background.src = './midias/planoDeFundo.mp4'
        htmlClass.classList.remove('light-mode')
        bolinhaDarkLight.classList.remove('lMode')
        bolinhaDarkLight.classList.add('rMode')
        burguer.src = './midias/burguer.png'
        casaStyle.style.fill = '#ffffff'
        LuaSol.src = '/midias/lua.png'
    }
}



btnDarkLight.addEventListener('click', DarkLight)
btn.addEventListener('click', abrirMenu)


function mudouTamanho(){
    if(window.innerWidth >= 800){
        menu.style.display = 'flex'
        menu.style.paddingTop = '30px'
        menu.style.height = '80px'
        menu.style.width = '100%'
        menu.style.background = 'transparent'
        opcSidebar.style.color = 'var(--brancoPreto)'

        menu.style.position = 'inherit'
        
        
        
    }else {
        menu.style.display = 'block'
        menu.style.paddingTop = '60px'
        menu.style.height = '100%'
        menu.style.width = '0'
        menu.style.background = 'var(--brancoPreto)'
        opcSidebar.style.color = 'var(--pretoBranco)'

        header.height = '0px'
    }
}