const biblia = document.querySelector('#mainBiblia')

//-------------------------VARIAVEIS GÊNESIS---------------------------------
const genesis = document.querySelector('#genesis')
const btnAbrirGenesis = document.querySelector('.abrir-genesis')
const nomesLivrosClickGenesis = document.querySelector('.nome-livros-click-genesis')
const setaDireitaGenesis = document.querySelector('.seta-direita-genesis')

//-------------------------VARIAVEIS ÊXODO---------------------------------
const exodo = document.querySelector('#exodo')
const btnAbrirExodo = document.querySelector('.abrir-exodo')
const nomesLivrosClickExodo = document.querySelector('.nome-livros-click-exodo')
const setaDireitaExodo = document.querySelector('.seta-direita-exodo')
const setaEsquerdaExodo = document.querySelector('.seta-esquerda-exodo')


//---------------------FUNÇÕES GÊNESIS---------------------------
const abGenesis = () =>{
    biblia.style.display = 'none'
    genesis.style.display = 'flex'
}
const direitaGenesis = () =>{
    
    genesis.classList.remove('voltar')
    genesis.classList.add('sair-esquerda')

    setTimeout(() =>{
        exodo.style.display = 'flex'
        exodo.classList.add('entrar')
    },1000)
    
}





//---------------------FUNÇÕES ÊXODO------------------------------
const abExodo = () =>{
    biblia.style.display = 'none'
    exodo.style.display = 'flex'
}
const esquerdaExodo = () =>{
    
    exodo.classList.add('sair-direita')
    exodo.classList.remove('entrar')

    
    setTimeout(() =>{
        genesis.classList.add('voltar')
        genesis.classList.remove('sair-esquerda')
        genesis.style.display = 'flex'
    },1000)
    
    
}








const voltarBiblia = () => {
    window.location.href = '../paginas/biblia.html';


}
























nomesLivrosClickGenesis.addEventListener('click', voltarBiblia)
nomesLivrosClickExodo.addEventListener('click', voltarBiblia)

//------------------------Livros----------------------------------
btnAbrirGenesis.addEventListener('click', abGenesis)
setaDireitaGenesis.addEventListener('click', direitaGenesis)

btnAbrirExodo.addEventListener('click', abExodo)
setaEsquerdaExodo.addEventListener('click', esquerdaExodo)