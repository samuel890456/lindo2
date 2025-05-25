const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
let hearts = [];

const colors = ["#ff69b4", "#ff1493", "#ff4d6d", "#e75480", "#d291bc", "#ff6ec7"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: 10 + Math.random() * 30,
    speed: 0.5 + Math.random() * 1.5,
    opacity: 0.6 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)]
  };
}

function drawHeart(x, y, size, color, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 100, size / 100);
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;

  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let h of hearts) {
    drawHeart(h.x, h.y, h.size, h.color, h.opacity);
    h.y -= h.speed;
  }
  hearts = hearts.filter(h => h.y + h.size > 0);
  while (hearts.length < 30) {
    hearts.push(createHeart());
  }
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();
