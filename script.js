// Arquivo JavaScript vazio para futura implementação

const bioStart = "🎀 ";
const bioText = "escritora, modelo e doida";
const bioEnd = " 🎀";
let bioElement = document.getElementById("bio");
let index = 0;
let isDeleting = false;
let delay = 3000; // Tempo que o texto fica completo antes de começar a apagar

function typeEffect() {
  if (!isDeleting && index <= bioText.length) {
    bioElement.textContent = bioStart + bioText.slice(0, index) + bioEnd;
    index++;
    if (index > bioText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delay); // Espera antes de começar a apagar
      return;
    }
    setTimeout(typeEffect, 100); // Velocidade da digitação
  } else if (isDeleting && index >= 0) {
    bioElement.textContent = bioStart + bioText.slice(0, index) + bioEnd;
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(typeEffect, 500); // Pequena pausa antes de recomeçar
      return;
    }
    setTimeout(typeEffect, 50); // Velocidade do apagamento
  }
}

// Inicia a animação quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  bioElement.textContent = bioStart + bioEnd; // Começa apenas com os emojis
  setTimeout(typeEffect, 1000); // Pequeno delay inicial
});
