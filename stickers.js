const stickers = [
  { el: document.getElementById('hatch1'), x: 100, y: 100, angle: 0, speedX: 2, speedY: 1.5, rotationSpeed: 1 },
  { el: document.getElementById('hatch2'), x: 300, y: 200, angle: 0, speedX: -2, speedY: 2, rotationSpeed: 2 },
  { el: document.getElementById('hatch3'), x: 500, y: 400, angle: 0, speedX: 1, speedY: -2, rotationSpeed: 1.2 },
];

function animate() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  for (const sticker of stickers) {
    sticker.x += sticker.speedX;
    sticker.y += sticker.speedY;
    sticker.angle += sticker.rotationSpeed;
    // Bounce off edges
    if (sticker.x < 0 || sticker.x > w - 120) sticker.speedX *= -1;
    if (sticker.y < 0 || sticker.y > h - 120) sticker.speedY *= -1;
    sticker.el.style.transform = `translate(${sticker.x}px,${sticker.y}px) rotate(${sticker.angle}deg)`;
  }
  requestAnimationFrame(animate);
}
animate();