const home = document.querySelector('.casinha')
const biblia = document.querySelector('.btn-biblia')
const topicos = document.querySelector('.btn-topicos')

const irParaHome = () => {
    window.location.href = 'principal.html'
}

const abrirBiblia = () => {
    window.location.href = 'paginas/biblia.html'
}

const abrirTopicos = () => {
    window.location.href = 'paginas/topicos.html'
}





















topicos.addEventListener('click', abrirTopicos)
biblia.addEventListener('click', abrirBiblia)
home.addEventListener('click', irParaHome)