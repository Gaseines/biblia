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

//-------------------------VARIAVEIS LEVÍTICO---------------------------------
const levitico = document.querySelector('#levitico')
const btnAbrirLevitico = document.querySelector('.abrir-levitico')
const nomesLivrosClickLevitico = document.querySelector('.nome-livros-click-levitico')
const setaDireitaLevitico = document.querySelector('.seta-direita-levitico')
const setaEsquerdaLevitico = document.querySelector('.seta-esquerda-levitico')

//-------------------------VARIAVEIS LEVÍTICO---------------------------------
const numeros = document.querySelector('#numeros')
const btnAbrirNumeros = document.querySelector('.abrir-numeros')
const nomesLivrosClickNumeros = document.querySelector('.nome-livros-click-numeros')
const setaDireitaNumeros = document.querySelector('.seta-direita-numeros')
const setaEsquerdaNumeros = document.querySelector('.seta-esquerda-numeros')

//-------------------------VARIAVEIS LEVÍTICO---------------------------------
const deuteronomio = document.querySelector('#deuteronomio')
const btnAbrirDeuteronomio = document.querySelector('.abrir-deuteronomio')
const nomesLivrosClickDeuteronomio = document.querySelector('.nome-livros-click-deuteronomio')
const setaDireitaDeuteronomio = document.querySelector('.seta-direita-deuteronomio')
const setaEsquerdaDeuteronomio = document.querySelector('.seta-esquerda-deuteronomio')


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
    exodo.classList.remove('voltar')

    
    setTimeout(() =>{
        genesis.classList.add('voltar')
        genesis.classList.remove('sair-esquerda')
        genesis.style.display = 'flex'
    },1000)
}

const direitaExodo = () =>{
    
    exodo.classList.remove('entrar')
    exodo.classList.remove('sair-direita')
    exodo.classList.remove('voltar')
    exodo.classList.add('sair-esquerda')

    setTimeout(() =>{
        levitico.style.display = 'flex'
        levitico.classList.add('entrar')
    },1000)
}

//---------------------FUNÇÕES LEVÍTICO------------------------------
const abLevitico = () =>{
    biblia.style.display = 'none'
    levitico.style.display = 'flex'
}
const esquerdaLevitico = () =>{
    
    levitico.classList.add('sair-direita')
    levitico.classList.remove('entrar')
    levitico.classList.remove('voltar')

    
    setTimeout(() =>{
        exodo.classList.add('voltar')
        exodo.classList.remove('sair-esquerda')
        exodo.style.display = 'flex'
    },1000)  
}

const direitaLevitico = () =>{
    
    levitico.classList.remove('entrar')
    levitico.classList.remove('sair-direita')
    levitico.classList.remove('voltar')
    levitico.classList.add('sair-esquerda')

    setTimeout(() =>{
        numeros.style.display = 'flex'
        numeros.classList.add('entrar')
    },1000)
}

//---------------------FUNÇÕES NÚMEROS------------------------------
const abNumeros = () =>{
    biblia.style.display = 'none'
    numeros.style.display = 'flex'
}
const esquerdaNumeros = () =>{
    
    numeros.classList.add('sair-direita')
    numeros.classList.remove('entrar')
    numeros.classList.remove('voltar')

    
    setTimeout(() =>{
        levitico.classList.add('voltar')
        levitico.classList.remove('sair-esquerda')
        levitico.style.display = 'flex'
    },1000)  
}

const direitaNumeros = () =>{
    
    numeros.classList.remove('entrar')
    numeros.classList.remove('sair-direita')
    numeros.classList.remove('voltar')
    numeros.classList.add('sair-esquerda')

    setTimeout(() =>{
        deuteronomio.style.display = 'flex'
        deuteronomio.classList.add('entrar')
    },1000)
}

//---------------------FUNÇÕES DEUTERONÔMIO------------------------------
const abDeuteronomio = () =>{
    biblia.style.display = 'none'
    deuteronomio.style.display = 'flex'
}
const esquerdaDeuteronomio = () =>{
    
    deuteronomio.classList.add('sair-direita')
    deuteronomio.classList.remove('entrar')
    deuteronomio.classList.remove('voltar')

    
    setTimeout(() =>{
        numeros.classList.add('voltar')
        numeros.classList.remove('sair-esquerda')
        numeros.style.display = 'flex'
    },1000)  
}

const direitaDeuteronomio = () =>{
    
    deuteronomio.classList.remove('entrar')
    deuteronomio.classList.remove('sair-direita')
    deuteronomio.classList.remove('voltar')
    deuteronomio.classList.add('sair-esquerda')

    setTimeout(() =>{
        josue.style.display = 'flex'
        josue.classList.add('entrar')
    },1000)
}









const voltarBiblia = () => {
    window.location.href = '../paginas/biblia.html';
    sessionStorage.clear()

}







nomesLivrosClickGenesis.addEventListener('click', voltarBiblia)
nomesLivrosClickExodo.addEventListener('click', voltarBiblia)
nomesLivrosClickLevitico.addEventListener('click', voltarBiblia)
nomesLivrosClickNumeros.addEventListener('click', voltarBiblia)
nomesLivrosClickDeuteronomio.addEventListener('click', voltarBiblia)

//------------------------Eventos Livros----------------------------------

//------------------------ EVENTOS GÊNESIS----------------------------------
btnAbrirGenesis.addEventListener('click', abGenesis)
setaDireitaGenesis.addEventListener('click', direitaGenesis)

//------------------------ EVENTOS ÊXODO----------------------------------
btnAbrirExodo.addEventListener('click', abExodo)
setaEsquerdaExodo.addEventListener('click', esquerdaExodo)
setaDireitaExodo.addEventListener('click', direitaExodo)

//------------------------ EVENTOS LEVÍTICO----------------------------------
btnAbrirLevitico.addEventListener('click', abLevitico)
setaEsquerdaLevitico.addEventListener('click', esquerdaLevitico)
setaDireitaLevitico.addEventListener('click', direitaLevitico)

//------------------------ EVENTOS NÚMEROS----------------------------------
btnAbrirNumeros.addEventListener('click', abNumeros)
setaEsquerdaNumeros.addEventListener('click', esquerdaNumeros)
setaDireitaNumeros.addEventListener('click', direitaNumeros)

//------------------------ EVENTOS DEUTERONÔMIO----------------------------------
btnAbrirDeuteronomio.addEventListener('click', abDeuteronomio)
setaEsquerdaDeuteronomio.addEventListener('click', esquerdaDeuteronomio)
setaDireitaDeuteronomio.addEventListener('click', direitaDeuteronomio)