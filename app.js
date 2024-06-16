let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
  responsiveVoice.speak(texto, "Portuguese Female", { rate: 1.3 });
};


function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}
exibirMensagemInicial()

function seInputVazio() {
  const input = document.querySelector('input');
  const botao = document.getElementById('chutar');
  input.addEventListener('input', function () {
    if (input.value.trim() === '' || isNaN(input.value)) {
      botao.setAttribute('disabled', true);
    } else {
      botao.removeAttribute('disabled');
    }
  });
}

function verificarChute() {
  let chute = document.querySelector('input').value
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  let mensagemTentativas = `O numero secreto era ${chute}, e voçê acertou com ${tentativas} ${palavraTentativa}`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!!!')
    exibirTextoNaTela('p', mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor que ' + chute)

    } else {
      exibirTextoNaTela('p', 'O número secreto é maior que ' + chute)
    }
  }
  tentativas++;
  limpaCampo();

}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1)
  let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length
  if (quantidadeDeNumerosSorteados == numeroMaximo) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido
  }
};

function limpaCampo() {
  chute = document.querySelector('input').value = ''
  document.querySelector('input').focus()
  document.getElementById('chutar').setAttribute('disabled', true);
};

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  exibirMensagemInicial()
  limpaCampo()
  tentativas = 1
  document.getElementById('reiniciar').setAttribute('disabled', true)

}

// Chama a função para habilitar/desabilitar o botão conforme o input
document.addEventListener('DOMContentLoaded', seInputVazio);