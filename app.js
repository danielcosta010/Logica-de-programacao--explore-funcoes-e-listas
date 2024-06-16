let titulo = document.querySelector('h1')

titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 a 10'

let numeroUsuario = document.querySelector('.container__input')

function verificarChute() {
  console.log(numeroUsuario.value);
}