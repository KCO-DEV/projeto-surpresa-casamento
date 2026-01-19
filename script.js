// CONTADOR DE DIAS
const startDate = new Date("2024-08-16"); // ALTERE A DATA
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("days").innerText = diffDays;

// CARTA
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  music.play().catch(err => {
    console.log("Erro ao tocar música:", err);
  });
});




closeBtn.onclick = () => {
  overlay.style.display = "none";
};

// CORAÇÕES
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 12 + Math.random() * 20 + "px";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);


document.getElementById("openLetter").addEventListener("click", () => {
  music.play();
});