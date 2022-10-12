(function () {
  // Dom selection
  const p1score = document.getElementById("p1score");
  const p2score = document.getElementById("p2score");
  const playingFor = document.querySelector("p span");
  const form = document.querySelector("form");
  const input = document.getElementById("tScore");
  const valid = document.querySelector(".valid");
  const p1btn = document.getElementById("p1btn");
  const p2btn = document.getElementById("p2btn");
  const resetBtn = document.getElementById("reset");
  const winer = document.querySelectorAll(".winer");
  const toss = document.querySelector("#toss");
  const tossMsg = document.querySelector(".tossMsg");
  const players = document.querySelectorAll(".player");
  // required variables and their default value
  let winingScore = Math.floor(Math.random() * (20 - 10) + 10);
  let player1 = 0;
  let player2 = 0;
  let gameOver = false;
  // default wining score showing in dom
  playingFor.textContent = winingScore;
  // player buttons disabled by default
  p1btn.setAttribute("disabled", "disabled");
  p2btn.setAttribute("disabled", "disabled");
  // function for operation after wining
  function winner(pScore, wScore, i) {
    if (pScore >= wScore) {
      gameOver = true;
      reset();
      winer[i].textContent = "Congratulation! You have won the game!";
    }
  }
  // function for reset
  function reset() {
    player1 = 0;
    player2 = 0;
    gameOver = false;
    p1score.textContent = player1;
    p2score.textContent = player2;
    input.value = "";
    valid.textContent = "";
    p1btn.setAttribute("disabled", "disabled");
    p2btn.setAttribute("disabled", "disabled");
    toss.removeAttribute("disabled");
    tossMsg.textContent = `Toss before start playing`;
    winer.forEach((winer) => (winer.textContent = ""));
  }
  // event handler for toss button
  toss.addEventListener("click", () => {
    const i = Math.floor(Math.random() * 2);
    players[i].removeAttribute("disabled");
    tossMsg.textContent = `Player ${i + 1} won the toss`;
    toss.setAttribute("disabled", "disabled");
    winer.forEach((winer) => (winer.textContent = ""));
    valid.textContent = "";
  });
  // event handler for reset button
  resetBtn.addEventListener("click", () => {
    reset();
    winingScore = Math.floor(Math.random() * (20 - 10) + 10);
    playingFor.textContent = winingScore;
  });
  // event handler for form submition
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (input.value) {
      winingScore = Number(input.value);
      playingFor.textContent = input.value;
      reset();
    } else {
      valid.textContent =
        "You didn't submit any wining score. You can submit a valid wining score. Otherwise you have to play for default wining score!";
      playingFor.textContent = winingScore;
      p1btn.setAttribute("disabled", "disabled");
      p2btn.setAttribute("disabled", "disabled");
    }
  });
  // event handler for player-1 button
  p1btn.addEventListener("click", () => {
    if (!gameOver) {
      player1 += Math.floor(Math.random() * (winingScore / 2));
      p1btn.setAttribute("disabled", "disabled");
      p2btn.removeAttribute("disabled");
      winner(player1, winingScore, 0);
      p1score.textContent = player1;
    }
  });
  // event handler for player-2 button
  p2btn.addEventListener("click", () => {
    if (!gameOver) {
      player2 += Math.floor(Math.random() * (winingScore / 2));
      p2btn.setAttribute("disabled", "disabled");
      p1btn.removeAttribute("disabled");
      winner(player2, winingScore, 1);
      p2score.textContent = player2;
    }
  });
})();
