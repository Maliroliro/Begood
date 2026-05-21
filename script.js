function atualizarSaudacao() {
  const hora = new Date().getHours();
  const saudacao = document.getElementById("saudacao");

  if (!saudacao) return;

  if (hora < 12) {
    saudacao.innerText = "Bom dia!";
  } else if (hora < 18) {
    saudacao.innerText = "Boa tarde!";
  } else {
    saudacao.innerText = "Boa noite!";
  }
}

function irParaSentimentos() {
  window.location.href = "sentimentos.html";
}

function irParaAjuda() {
  window.location.href = "ajuda.html";
}

function irParaExercicio(sentimento) {
  localStorage.setItem("sentimentoEscolhido", sentimento);
  window.location.href = "exercicio.html";
}

function voltarInicio() {
  window.location.href = "index.html";
}
atualizarSaudacao();