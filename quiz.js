const questions = [
  "The capital of Australia is Sydney.",
  "Elephants are the largest land animals.",
  "The Great Wall of China is visible from space.",
  "The sun rises in the east and sets in the west.",
  "The human body has 206 bones",
  "The human body has 206 bones",
];
const answers = [false, true, false, true, true, true];

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

let currentQuestion = 0;
let score = 0;

quizContainer.style.display = "none"; // hide quiz container
resultsContainer.style.display = "none"; // hide results container

startBtn.addEventListener("click", () => {
  quizContainer.style.display = "flex"; // show quiz container
  document.getElementById("quiz-container").style.display = "none"; // hide welcome container
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
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.innerText = question;
  progressEl.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(answer) {
  const correctAnswer = answers[currentQuestion];
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

function showResults() {
  quizContainer.style.display = "none";
  resultsContainer.style.display = "flex";
  scoreEl.innerText = `You got ${score} out of ${questions.length} questions`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultsContainer.style.display = "none";
  quizContainer.style.display = "none"; // hide quiz container
  document.getElementById("quiz-container").style.display = "flex"; // show welcome container
}
