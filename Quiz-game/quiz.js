const questions = [
  {
    question: "Octopuses have three hearts.",
    answers: 
    [
     { text: "True", correct: true },
     { text: "False", correct: false }
    ]
  },
  {
    question: "Canada does not have provinces.",
    answers: 
    [
     { text: "True", correct: false },
     { text: "False", correct: true }
    ]
  },
  {
    question: "Humans share about 60% of their DNA with bananas.",
    answers: 
    [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Light travels faster than sound.",
    answers: 
    [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  }
];

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextButton = document.getElementById("nextButton");
const scoreText = document.getElementById("scoreText");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreText.textContent = "";

  nextButton.textContent = "Next Question";
  nextButton.onclick = null;               
  nextButton.style.display = "none";
  showQuestion();
};

function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

  button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersContainer.appendChild(button);
});
};

function resetState() {
  nextButton.style.display = "none";
  answersContainer.innerHTML = "";
  questionText.classList.remove("finished"); 
};

function selectAnswer(button, correct) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (correct) {
    button.classList.add("correct");
    score += 1;
  } else {
    button.classList.add("wrong");
  }

  nextButton.style.display = "block";
};

  nextButton.addEventListener("click", () => {
  currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
});

function showScore() {
  resetState();
  questionText.textContent = "Quiz Finished!";
  questionText.classList.add("finished");
  scoreText.textContent = `Your score: ${score} / ${questions.length}`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
};

startQuiz();