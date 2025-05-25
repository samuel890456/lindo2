const text = "Desde que llegaste, mi mundo cambió. Gracias por existir. 💖";
let i = 0;
const typingText = document.getElementById("typingText");

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();
