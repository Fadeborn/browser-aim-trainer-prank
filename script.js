const btn = document.getElementById("runaway-btn");
const body = document.body;

btn.addEventListener("mouseenter", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  // Размер окна и кнопки
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  // Случайные координаты, чтобы кнопка не уезжала за пределы окна
  const maxLeft = winWidth - btnWidth;
  const maxTop = winHeight - btnHeight;
  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  btn.style.left = `${left}px`;
  btn.style.top = `${top}px`;
});

setTimeout(() => {
  const btnStartGame = document.createElement("button");
  btnStartGame.textContent = "НАЖМИ МЕНЯ";
  btnStartGame.id = "btn-start-game";
  btnStartGame.className = "btn-game";
  btnStartGame.style.position = "fixed";
  btnStartGame.style.zIndex = 9999;
  btnStartGame.addEventListener("click", () => {
    // Логика
    alert("Кнопка нажата!");
  });
  document.getElementById("button-container").appendChild(btnStartGame);
}, 30000);
