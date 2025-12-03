const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

const quizData = [
  {
    question: "What is the correct syntax to delcare a variable in JavaScript?",
    answers: [
      { text: "let myVariable;", correct: true },
      { text: "let = myVariable;", correct: false },
      { text: "let myVariable;", correct: false },
      { text: "myVariable let;", correct: false },
    ],
  },
  {
    question: "Which array method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "How do you write a conditional statement in JavaScript?",
    answers: [
      { text: "if (condition){}", correct: true },
      { text: "if condition {}", correct: false },
      { text: "if condition then {}", correct: false },
      { text: "if {condition}", correct: false },
    ],
  },
  {
    question:
      "Which loop will execute at least once even if the condition is false?",
    answers: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do...while loop", correct: true },
      { text: "foreach loop", correct: false },
    ],
  },
  {
    question: "How do you create an array in JavaScript?",
    answers: [
      { text: "var arr = [];", correct: true },
      { text: "var arr = {};", correct: false },
      { text: "var arr = ();", correct: false },
      { text: "var arr = <>;", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  nextButton.disabled = true;
  nextButton.classList.remove("hidden");
  nextButton.textContent = "Next Question"; // reset label on start
  loadQuestion(quizData[currentQuestionIndex]);
}

function loadQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", () => selectAnswer(button, answer));
    answerButtonsElement.appendChild(button);
  });

  if (currentQuestionIndex === quizData.length - 1) {
    nextButton.textContent = "Show Results";
  } else {
    nextButton.textContent = "Next Question";
  }

  nextButton.disabled = true;
}

function selectAnswer(button, answer) {
  if (answer.correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");

    const buttons = answerButtonsElement.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
    });
  }

  const allButtons = answerButtonsElement.querySelectorAll("button");
  allButtons.forEach((btn) => (btn.disabled = true));

  nextButton.disabled = false;
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion(quizData[currentQuestionIndex]);
    nextButton.disabled = true;
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  nextButton.disabled = true;
  nextButton.classList.add("hidden");
  scoreElement.innerText = `${score} out of ${quizData.length}`;
}

function restartQuiz() {
  startQuiz();
}

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);

startQuiz();
