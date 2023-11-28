let menu = document.querySelector('.sidebar')
let opcSidebar = document.querySelector('.sidebarOpc')
let btn = document.getElementById('menu-btn')
let burguer = document.querySelector('.burguer')
let casa = document.querySelector('.casinha')
let containerDarkLight = document.querySelector('.container-light-mode')
let cabecalho = document.querySelector('#cabecalho')


let bolinhaDarkLight = document.querySelector('.bolinha')
let LuaSol = document.getElementById("btn-light-mode-p")
let btnDarkLight = document.querySelector('.btn-light-mode')
let background = document.querySelector('#background video')
let htmlClass = document.querySelector('html')
let casaStyle = document.querySelector('.casinha g')



checkModoClaro()

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
            containerDarkLight.style.opacity = '1'
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
            containerDarkLight.style.opacity = '0'
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

    
    

    

        if(srcLua ==="lua.png"){

        const valueSol = LuaSol.src = './midias/sol.png'
        


        htmlClass.classList.add('light-mode')
        bolinhaDarkLight.classList.add('lMode')
        bolinhaDarkLight.classList.remove('rMode')
        LuaSol.src = '../midias/sol.png'
        burguer.src = '../midias/burguer2.png'
        casaStyle.style.fill = '#000000'
        localStorage.setItem("modoClaroSol", valueSol)
        
        
        

       }else {
        
        htmlClass.classList.remove('light-mode')
        bolinhaDarkLight.classList.remove('lMode')
        bolinhaDarkLight.classList.add('rMode')
        LuaSol.src = '../midias/lua.png'
        
        
        burguer.src = '../midias/burguer.png'
        casaStyle.style.fill = '#ffffff'

        localStorage.removeItem("modoClaroSol")
        
        
        
    }

    
}

function checkModoClaro(){
    const getModoClaroSol = localStorage.getItem("modoClaroSol")
    
    


if (getModoClaroSol) {
    
    
    getModoClaroSol


    LuaSol.src = '../midias/sol.png'
    burguer.src = '../midias/burguer2.png'
    casaStyle.style.fill = '#000000'
    
    

   htmlClass.classList.add('light-mode')
   bolinhaDarkLight.classList.add('lMode')
   bolinhaDarkLight.classList.remove('rMode')
   
   

   
} 
}



btnDarkLight.addEventListener('click', DarkLight)
btn.addEventListener('click', abrirMenu)


function mudouTamanho(){
    if(window.innerWidth >= 800){
        
        menu.classList.remove('abreMenu')
        menu.style.width = '100%'
        
        




        
        
        
    }else{
        menu.style.width = '0px'
        burguer.classList.remove('movMenu')
        burguer.classList.add('movMenu2')
        btn.classList.remove('movMenu')
        btn.classList.add('movMenu2')
        casa.classList.remove('casaR')
        casa.classList.add('casaL')
        containerDarkLight.style.opacity = '1'

        setTimeout(() =>{
            burguer.classList.remove('movMenu2')
            btn.classList.remove('movMenu2')
            casa.classList.remove('casaL')
        },500)
    }



}

function clicouFora(){
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
            containerDarkLight.style.opacity = '1'
        }, 550)

        setTimeout(() => {
            menu.classList.remove('abreMenu2')
            btn.classList.remove('movMenu2')
            burguer.classList.remove('movMenu2')
            casa.classList.remove('casaL')
        }, 1000)
        
    }

}