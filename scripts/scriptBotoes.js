const home = document.querySelector('.casinha')
const biblia = document.querySelector('.btn-biblia')
const topicos = document.querySelector('.btn-topicos')
const bibliaMenu = document.querySelector('.bibliaMenu')
const casinha = document.querySelector('.casinha')
const htmlBiblia = document.getElementById('htmlBiblia')
const luaSol = document.querySelector('#btn-light-mode-p')
const html = document.html
const bolinha = document.querySelector('bolinha')


const irParaHome = () => {
    window.location.href = '../index.html';

    
        alert('deu certo')
        document.addEventListener('DOMContentLoaded', function () {
            html.classList.toggle('light-mode');
        });
    


   
}



const abrirBiblia = () => {
    window.location.href = 'paginas/biblia.html';
}

const abrirTopicos = () => {
    window.location.href = 'paginas/topicos.html';
}

casinha.addEventListener('click', irParaHome);
bibliaMenu.addEventListener('click', abrirBiblia);
topicos.addEventListener('click', abrirTopicos);
biblia.addEventListener('click', abrirBiblia);
home.addEventListener('click', irParaHome);
