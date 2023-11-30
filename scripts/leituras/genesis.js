const g2 = document.querySelector('.genesis-dois-container')
const g1 = document.querySelector('.genesis-um-container')
const numCap = document.querySelector('.opc-capitulo')

const setaEsquerda = document.querySelector('.seta-esquerda')
const setaDireita = document.querySelector('.seta-direita')



checkCap()



function checkCap(){
    
    

    const getCap1 = sessionStorage.getItem("1")

    if(getCap1){
        g1.style.display = "flex"
        numCap.innerHTML = "01"
    }

    const getCap2 = sessionStorage.getItem("2")

    if(getCap2){
        g2.style.display = "flex"
        numCap.innerHTML = "02"
    }
}

function gnClick(n){
    window.location.href = 'leituraGenesis.html'
    sessionStorage.setItem(n, "cap")

    
}




const setaDireitaFunction = () =>{
    

    const getCap1 = sessionStorage.getItem("1")
    if(getCap1){
        g1.classList.remove('voltar')
        g1.classList.add('sair-esquerda')
        numCap.innerHTML = "02"


        setTimeout(() =>{
            g2.style.display = "flex"
            g2.classList.add('entrar')
            sessionStorage.clear()
            sessionStorage.setItem("2", "cap")
        },1000)
    }

    const getCap2 = sessionStorage.getItem("2")

    if(getCap2){
        g2.classList.remove('voltar')
        g2.classList.remove('entrar')
        g2.classList.add('sair-esquerda')


        setTimeout(() =>{
            
        },1000)
    }

}

const setaEsquerdaFunction = () =>{

    const getCap2 = sessionStorage.getItem("2")
    if(getCap2){
        g2.classList.add('sair-direita')
        g2.classList.remove('entrar')
        g2.classList.remove('voltar')
        numCap.innerHTML = "01"

        setTimeout(() =>{
            g1.style.display = "flex"
            g1.classList.add('voltar')
            g1.classList.remove('sair-esquerda')
            sessionStorage.clear()
            sessionStorage.setItem("1", "cap")
        },1000)
    }
}


setaEsquerda.addEventListener('click', setaEsquerdaFunction)
setaDireita.addEventListener('click', setaDireitaFunction)



