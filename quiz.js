const questions = [
  "The capital of Australia is Sydney.",
  "Elephants are the largest land animals.",
  "The Great Wall of China is visible from space.",
  "The sun rises in the east and sets in the west.",
  "The human body has 206 bones",
];
const answers = [false, true, false, true, true];

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");
const false2Btn = document.getElementById("false2-btn");
const progressEl = document.getElementById("progress");
const resultsContainer = document.getElementById("results");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const resultBtn = document.getElementById("result-btn");
const tableBody = document.querySelector("#answers-table tbody");

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

quizContainer.style.display = "none";
resultsContainer.style.display = "none";

startBtn.addEventListener("click", () => {
  quizContainer.style.display = "flex"; // show quiz container
  document.querySelector('.quiz-container').style.display = 'none'; // hide welcome container
  startQuiz();
});

trueBtn.addEventListener("click", () => {
  checkAnswer(true);
});

falseBtn.addEventListener("click", () => {
  checkAnswer(false);
});

false2Btn.addEventListener("click", () => {
  checkAnswer(false);
});

restartBtn.addEventListener("click", () => {
  restartQuiz();
});

function startQuiz() {
  resultsContainer.style.display = "none";
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.innerText = question;
  progressEl.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(answer) {
  const correctAnswer = answers[currentQuestion];
  userAnswers[currentQuestion] = answer;
  if (answer === correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function calculateScore() {
  const percentage = (score / questions.length) * 100;
  return percentage.toFixed(0);
}


function showResults() {
  quizContainer.style.display = "none";
  resultsContainer.style.display = "flex";
  const percentage = calculateScore();
  const scorePercentage = document.createElement("p");
  resultsContainer.appendChild(scorePercentage);
  scoreEl.innerText = `You got ${score} out of ${questions.length} questions and got ${percentage} out of 100`;
  for (let i = 0; i < questions.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = questions[i];
    const td2 = document.createElement("td");
    const icon = document.createElement("i");
    icon.classList.add("fas");
    if (userAnswers[i] === answers[i]) {
      icon.classList.add("fa-check-circle");
      icon.style.color = "green";
    } else {
      icon.classList.add("fa-times-circle");
      icon.style.color = "red";
    }
    td2.appendChild(icon);
    const td3 = document.createElement("td");
    td3.innerText = answers[i] ? "true" : "false";
    if (answers[i]) {
      td3.style.color = "white";
    } else {
      td3.style.color = "white";
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableBody.appendChild(tr);
  }
}




function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultsContainer.style.display = "none";
  quizContainer.style.display = "none"; // hide quiz container
  document.querySelector('.quiz-container').style.display = 'flex'; // show welcome container
}



