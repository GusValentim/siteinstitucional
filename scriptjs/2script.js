var el = document.querySelector("#texto");
var text = "#faleconosco";
var interval = 450;

function showtext(el, text, interval) {
  var charIndex = 0;
  var currentText = "";

  function typeNextChar() {
    currentText += text[charIndex];

    // Adicione o próximo caractere apenas se não for '#' ou se a div já não contiver '#'
    if (text[charIndex] !== ' ' || el.innerHTML.indexOf(' ') === -1) {
      el.innerHTML = currentText;
    }

    charIndex++;

    if (charIndex === text.length) {
      // Reinicie o índice para a próxima iteração
      charIndex = 0;
      currentText = "";
    }
  }

  // Inicie a animação usando setInterval
  setInterval(function() {
    // Inicie a digitação
    typeNextChar();
  }, interval);
}

// Inicie a animação
showtext(el, text, interval);
