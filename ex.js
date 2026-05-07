function carregarExercicio() {

const sentimento = localStorage.getItem("sentimentoEscolhido");
const conteudo = document.getElementById("conteudo");


  if (sentimento=='otimo'){ 
    conteudo.innerHTML = `
  <h2>Que incrível saber que você está se sentindo ótimo! ✨</h2>
  <p>Aproveite esse momento para reforçar sentimentos positivos.</p>

  <h3>Exercício de Gratidão</h3>

  <ul>
    <li>Abra seu aplicativo de notas ou pegue um papel</li>
    <li>Liste 3 coisas pelas quais você é grato hoje </li>
    <li>Tome um momento para sentir essa gratidão</li>
  </ul>

  <p style="margin-top:15px;">
    Guardar esses momentos ajuda seu cérebro a lembrar do que é bom. Continue assim
  </p>

  <button onclick="voltarInicio()">Voltar ao início</button>
`;
    
  } 
  else if (sentimento=='bem'){
    conteudo.innerHTML = `
  <h2>É muito bom saber que você está bem. Vamos manter esse equilíbrio! 🌿</h2>

  <h3>Meditação de 5 minutos</h3>

  <ul>
    <li>Encontre um lugar confortável para sentar</li>
    <li>Feche os olhos e respire profundamente três vezes</li>
    <li>Observe sua respiração natural por 5 minutos</li>
    <li>Se sua mente divagar, gentilmente traga a atenção de volta à respiração</li>
    <li>Abra os olhos lentamente e observe como se sente</li>
  </ul>

  <p style="margin-top:15px;">
    Pequenos momentos de pausa fazem diferença. Continue cuidando de você
  </p>

  <button onclick="voltarInicio()">Voltar ao início</button>
`;
  }
  else if (sentimento=='ok'){
    conteudo.innerHTML = `
     <h2>Está tudo bem não estar perfeito. Vamos fazer algo que pode ajudar a melhorar seu dia</h2>

  <h3>Alongamento Consciente</h3>

  <ul>
    <li>Levante-se e estique os braços acima da cabeça</li>
    <li>Respire fundo e sinta seu corpo se alongando</li>
    <li>Faça movimentos circulares com os ombros (5 vezes para cada lado)</li>
    <li>Incline a cabeça suavemente para cada lado, segurando por 10 segundos</li>
    <li>Sacuda os braços e pernas suavemente</li>
  </ul>

  <p style="margin-top:15px;">
    Pequenos movimentos podem trazer mais leveza ao seu dia. Vá com calma 🌱
  </p>

  <button onclick="voltarInicio()">Voltar ao início</button>
`;
  }
  else if (sentimento=='mal'){
    conteudo.innerHTML = `
  <h2>Sinto muito que você não esteja se sentindo bem. Você não está sozinho, e esse sentimento vai passar</h2>

  <h3>Respiração 4-7-8</h3>

  <ul>
    <li>Sente-se confortavelmente</li>
    <li>Expire completamente pela boca, soltando o ar lentamente</li>
    <li>Feche a boca e inspire pelo nariz contando até 4</li>
    <li>Segure a respiração contando até 7</li>
    <li>Expire completamente pela boca contando até 8</li>
    <li>Repita esse ciclo algumas vezes</li>
  </ul>

  <p style="margin-top:15px;">
    Respire com calma. Seu corpo pode ajudar sua mente a desacelerar 🌿
  </p>

  <button onclick="voltarInicio()">Voltar ao início</button>
`;
  }
  else if (sentimento=='ansioso'){
    conteudo.innerHTML = `
  <h2>A ansiedade é desafiadora, mas você tem força para lidar com ela. Vamos fazer um exercício juntos</h2>

  <h3>Técnica 5-4-3-2-1 (Grounding)</h3>

  <ul>
    <li>Identifique 5 coisas que você pode ver ao seu redor</li>
    <li>Identifique 4 coisas que você pode tocar</li>
    <li>Identifique 3 coisas que você pode ouvir</li>
    <li>Identifique 2 coisas que você pode cheirar</li>
    <li>Identifique 1 coisa que você pode sentir o gosto</li>
  </ul>

  <p style="margin-top:15px;">
    Foque no presente. Você está seguro neste momento 🌿
  </p>

  <button onclick="voltarInicio()">Voltar ao início</button>
`;
  }
  else {
    alert('oops')
  }
}
carregarExercicio();