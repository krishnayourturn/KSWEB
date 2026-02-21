// ===== Floating Control Panel =====
const panel = document.createElement("div");
panel.style.position = "fixed";
panel.style.bottom = "20px";
panel.style.right = "20px";
panel.style.background = "rgba(0,0,0,0.6)";
panel.style.padding = "15px";
panel.style.borderRadius = "15px";
panel.style.boxShadow = "0 0 20px rgba(0,255,255,0.5)";
panel.style.zIndex = "999";

panel.innerHTML = `
<button onclick="showQuote()">🎯 Motivation</button><br><br>
<button onclick="focusMode()">🎵 Focus Mode</button><br><br>
<button onclick="startGame()">🎮 Mini Game</button><br><br>
<button onclick="resetPage()">🔁 Reset</button>
`;

document.body.appendChild(panel);

// ===== Motivation Quotes =====
function showQuote() {
  const quotes = [
    "Discipline beats motivation.",
    "Focus creates freedom.",
    "Small steps daily → massive results.",
    "Stay consistent. Stay unstoppable."
  ];
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
}

// ===== Focus Mode =====
function focusMode() {
  document.body.style.background = "radial-gradient(circle, #000000, #050505)";
  alert("Focus Mode Activated");
}

// ===== Reset Page =====
function resetPage() {
  location.reload();
}

// ===== Mini Reaction Game =====
function startGame() {
  const gameBtn = document.createElement("button");
  gameBtn.textContent = "Click Me Fast!";
  gameBtn.style.position = "fixed";
  gameBtn.style.top = "50%";
  gameBtn.style.left = "50%";
  gameBtn.style.transform = "translate(-50%, -50%)";
  gameBtn.style.padding = "20px";
  gameBtn.style.fontSize = "18px";
  gameBtn.style.borderRadius = "12px";
  gameBtn.style.background = "cyan";
  gameBtn.style.border = "none";
  gameBtn.style.cursor = "pointer";

  document.body.appendChild(gameBtn);

  let startTime = Date.now();

  gameBtn.onclick = () => {
    const reaction = Date.now() - startTime;
    alert("Your reaction time: " + reaction + " ms");
    gameBtn.remove();
  };
}
