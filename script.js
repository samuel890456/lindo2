const loveButton = document.getElementById("loveButton");
const bgMusic = document.getElementById("bgMusic");

loveButton.addEventListener("click", () => {
  // Reproduce la música si no está sonando aún
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {
      // Por si el navegador bloquea la reproducción automática
      // You can add a fallback here, e.g., show a message to the user
      // if playback fails.
    });
  }

  // Aquí tu código para lanzar corazones
  for (let i = 0; i < 100; i++) {
    setTimeout(() => hearts.push({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: 10 + Math.random() * 15,
      speed: 2 + Math.random() * 2,
      opacity: 0.6 + Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }), i * 20);
  }
});
