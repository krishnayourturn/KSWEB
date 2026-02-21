// ================= FLOATING MENU =================
const menu = document.createElement("div");
menu.style.position = "fixed";
menu.style.left = "20px";
menu.style.bottom = "20px";
menu.style.background = "rgba(0,0,0,0.6)";
menu.style.padding = "15px";
menu.style.borderRadius = "15px";
menu.style.boxShadow = "0 0 20px rgba(255,0,255,0.6)";
menu.style.zIndex = "999";

menu.innerHTML = `
<button onclick="openCreations()">🎨 My Creations</button><br><br>
<button onclick="startQuiz()">❓ Fun Q&A</button><br><br>
<button onclick="secretMode()">🧩 Secret</button>
`;

document.body.appendChild(menu);

// ================= CLICKABLE PROFILE =================
window.addEventListener("load", () => {
  const profile = document.querySelector("img");
  if (profile) {
    profile.style.cursor = "pointer";
    profile.onclick = () => alert("Hey! That's Krishna — focused & unstoppable 🚀");
  }
});

// ================= MY CREATIONS PANEL =================
function openCreations() {
  const panel = document.createElement("div");
  panel.style.position = "fixed";
  panel.style.top = "50%";
  panel.style.left = "50%";
  panel.style.transform = "translate(-50%, -50%)";
  panel.style.background = "#000";
  panel.style.padding = "20px";
  panel.style.borderRadius = "15px";
  panel.style.boxShadow = "0 0 30px cyan";
  panel.style.textAlign = "center";

  panel.innerHTML = `
    <h2 style="color:cyan;">My Creations</h2>
    <p>Add your images below 👇</p>
    <img src="creation1.jpg" width="120" style="margin:10px;border-radius:10px;">
    <img src="creation2.jpg" width="120" style="margin:10px;border-radius:10px;">
    <br><br>
    <button onclick="this.parentElement.remove()">Close</button>
  `;

  document.body.appendChild(panel);
}

// ================= FUN QUIZ =================
function startQuiz() {
  const quiz = document.createElement("div");
  quiz.style.position = "fixed";
  quiz.style.top = "50%";
  quiz.style.left = "50%";
  quiz.style.transform = "translate(-50%, -50%)";
  quiz.style.background = "#000";
  quiz.style.padding = "20px";
  quiz.style.borderRadius = "15px";
  quiz.style.boxShadow = "0 0 30px magenta";
  quiz.style.textAlign = "center";

  quiz.innerHTML = `
    <h3 style="color:magenta;">Who is more focused?</h3>
    <img src="quiz.jpg" width="200" style="border-radius:10px;"><br><br>
    <button onclick="alert('Correct! 😎'); this.parentElement.remove()">Krishna</button>
    <button onclick="alert('Try again 😅')">Someone else</button>
  `;

  document.body.appendChild(quiz);
}

// ================= SECRET MODE =================
function secretMode() {
  document.body.style.background = "black";
  alert("Secret Mode Activated 😎");
}
