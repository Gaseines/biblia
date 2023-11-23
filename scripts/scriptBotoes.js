const home = document.querySelector('.casinha')
const btnIrBiblia = document.querySelector('.btn-biblia')
const topicos = document.querySelector('.btn-topicos')
const casinha = document.querySelector('.casinha')
const htmlBiblia = document.getElementById('html-biblia')
const luaSol = document.querySelector('#btn-light-mode-p')
const html = document.html
const bolinha = document.querySelector('bolinha')




const irParaHome = () => {
    window.location.href = '../index.html'  

}



const abrirBiblia = () => {
    window.location.href = 'paginas/biblia.html';


}

const abrirTopicos = () => {
    window.location.href = 'paginas/topicos.html';

    

}



casinha.addEventListener('click', irParaHome);
topicos.addEventListener('click', abrirTopicos);
btnIrBiblia.addEventListener('click', abrirBiblia);
home.addEventListener('click', irParaHome);
