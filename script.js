const canvas = document.getElementById("swirlCanvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let hue = 0;

let then = performance.now();
const fpsHistory = [];

// Control variables from sliders
let dropSize = document.getElementById("dropSize").value;
let speed = document.getElementById("speed").value;
let opacityDecay = document.getElementById("decay").value;
let hueChangeRate = document.getElementById("hueRate").value;
let backgroundColor = "#000000";
let maxDrops = 100; // too many drops can affect performance

const drops = [];

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener("resize", resizeCanvas);

function createDrop(x, y) {
  return {
    x: x,
    y: y,
    radius: Math.random() * dropSize + 10, // Use adjustable drop size
    hue: hue,
    speedX: (Math.random() - 0.5) * speed, // Use adjustable speed
    speedY: (Math.random() - 0.5) * speed,
    opacity: 1,
    decay: Math.random() * opacityDecay + 0.005, // Use adjustable decay
  };
}

function updateDrops() {
  for (let i = drops.length - 1; i >= 0; i--) {
    const drop = drops[i];
    drop.x += drop.speedX;
    drop.y += drop.speedY;
    drop.radius *= 0.98;
    drop.opacity -= drop.decay;

    if (drop.opacity <= 0) {
      drops.splice(i, 1);
    }
  }

  // draw the drops.length in the bottom right corner as text
  ctx.fillStyle = "#333";
  ctx.font = "15px Arial";
  ctx.fillText("drops: " + drops.length, width - 80, height - 20);

  // calculate fps
  let now = performance.now();
  let dt = now - (then || now);
  then = now;
  let fps = 1000 / dt;

  // rolling average fps every 10 frames
  fpsHistory.push(fps);
  if (fpsHistory.length > 10) {
    fpsHistory.shift();
  }
  let avgFps = fpsHistory.reduce((a, b) => a + b, 0) / fpsHistory.length;

  // draw fps in the top right corner as text
  ctx.fillStyle = "#333";
  ctx.font = "15px Arial";
  ctx.fillText(Math.floor(avgFps) + " fps", width - 60, 20);
}

function drawDrops() {
  for (const drop of drops) {
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
    const gradient = ctx.createRadialGradient(
      drop.x,
      drop.y,
      0,
      drop.x,
      drop.y,
      drop.radius
    );
    gradient.addColorStop(0, `hsla(${drop.hue}, 100%, 50%, ${drop.opacity})`);
    gradient.addColorStop(1, `hsla(${(drop.hue + 60) % 360}, 100%, 50%, 0)`);

    ctx.beginPath();
    ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

canvas.addEventListener("mousemove", (event) => {
  hue += Number(hueChangeRate); // Use adjustable hue change rate
  if (hue >= 360) hue = 0;
  const drop = createDrop(event.clientX, event.clientY);
  drops.push(drop);
  if (drops.length > maxDrops) {
    drops.shift(); // Remove the oldest drop to avoid exceeding limit
  }
});

function animate() {
  ctx.fillStyle = backgroundColor + "33"; // Use adjustable background color with slight transparency
  ctx.fillRect(0, 0, width, height);
  updateDrops();
  drawDrops();
  requestAnimationFrame(animate);
}

animate();

// Update variables when sliders are adjusted
document.getElementById("dropSize").addEventListener("input", (e) => {
  dropSize = e.target.value;
});

document.getElementById("speed").addEventListener("input", (e) => {
  speed = e.target.value;
});

document.getElementById("decay").addEventListener("input", (e) => {
  opacityDecay = e.target.value;
});

document.getElementById("hueRate").addEventListener("input", (e) => {
  hueChangeRate = e.target.value;
});
