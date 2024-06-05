
// // 1) Descobrir como detectar os cliques do mouse nos botões
// dica: existe a possibilidade de criar uma função para detectar todos ao mesmo tempo.

// 2) Descobrir como detectar o pressionamento das teclas equivalentes no teclado
// dica: existe a possibilidade de criar uma função para detectar todos os pressionamentp
// mesmo tempo.

// 3) Criar uma função chamada "fazerSom" e nessa função, usando o laço 
// "if/else" ou "switch/case" para verificar se o usuario 
// clicou a letra minuscula ou maiscula (caps lock ativado). Apos verificação ao clicar o som 
// equivalente a tecla tem que ser acionado.

// 4) Criar uma função chamado botaoAnimacao para usarmo a estilização "pressed" criada
// para que quando o usuario clicar no botão ele seja estilizado.



window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
});

const buttons = document.querySelectorAll('.drum');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');
    });

    button.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});

