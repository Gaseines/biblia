const g2 = document.querySelector('.genesis-dois-container')
const g1 = document.querySelector('.genesis-um-container')

const setaEsquerda = document.querySelector('.seta-esquerda')
const setaDireita = document.querySelector('.seta-direita')



checkCap()



function checkCap(){
    
    const numCap = document.querySelector('.opc-capitulo')

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
        g2.classList.add('sair-esquerda')


        setTimeout(() =>{
            g3.style.display = "flex"
            g3.classList.add('entrar')
            sessionStorage.clear()
            sessionStorage.setItem("3", "cap")
        },1000)
    }

}

const setaEsquerdaFunction = () =>{

    const getCap2 = sessionStorage.getItem("2")
    if(getCap2){
        g2.classList.add('sair-direita')
        g2.classList.remove('entrar')
        g2.classList.remove('voltar')

        setTimeout(() =>{
            g1.style.display = "flex"
            g1.classList.add('voltar')
            g1.classList.remove('sair-esquerda')
        })
    }
}


setaEsquerda.addEventListener('click', setaEsquerdaFunction)
setaDireita.addEventListener('click', setaDireitaFunction)



