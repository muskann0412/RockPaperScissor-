let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play Again!!";
  msg.style.backgroundColor = "rgb(27, 59, 59)";
};

const showWinner = (userWin, choiceId, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${choiceId}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (choiceId) => {
  console.log("choiceId = ", choiceId);
  // Generate computer choice -- modular way
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (choiceId === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (choiceId === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (choiceId === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, choiceId, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    // console.log("choice was clicked ",choiceId);
    playGame(choiceId);
  });
});
