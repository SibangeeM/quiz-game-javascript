const questions = [
  {
    question: "Javascript is an _______ language?",
    optionA: "Object-Oriented",
    optionB: "Object-based",
    optionC: "Procedural",
    optionD: "None of the above",
    correctOption: "optionA",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    optionA: "var",
    optionB: "let",
    optionC: "Both A and B",
    optionD: "None of the above",
    correctOption: "optionC",
  },
  {
    question: " How can a datatype be declared to be a constant type?",
    optionA: "const",
    optionB: "let",
    optionC: "var",
    optionD: "Both A and C",
    correctOption: "optionA",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    optionA: "getElementById(",
    optionB: "getElementByClassName()",
    optionC: "Both A and B",
    optionD: "None of the above",
    correctOption: "optionC",
  },
  {
    question:
      "Which of the following is the property that is triggered in response to JS errors?",

    optionA: "onclick",
    optionB: "onerror",
    optionC: "onmessage",
    optionD: "onexception",
    correctOption: "optionB",
  },
  {
    question:
      "Which of the following number object function returns the value of the number? ",
    optionA: "toString() ",
    optionB: "valueOf()    ",
    optionC: "toLocaleString()    ",
    optionD: "toPrecision()",
    correctOption: "optionB",
  },
];
const m = document.getElementsByClassName("game-details-container");
const scoreDisplay = document.getElementById("player-score");
const questionNumDisplay = document.getElementById("question-number");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("display-question");
const a_text = document.getElementById("option-one-label");
const b_text = document.getElementById("option-two-label");
const c_text = document.getElementById("option-three-label");
const d_text = document.getElementById("option-four-label");
const nextquesbtn = document.getElementById("nextquestion");
let currentQuiz = 0;
let score = 0;
let QuestionsAttempted = 0;
let wrongAnswer = 0;
loadQuiz();

function loadQuiz() {
  scoreDisplay.textContent = score;
  questionNumDisplay.textContent = currentQuiz + 1;
  deselectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.optionA;
  b_text.innerText = currentQuizData.optionB;
  c_text.innerText = currentQuizData.optionC;
  d_text.innerText = currentQuizData.optionD;
  if (currentQuiz == questions.length - 1) {
    btnDiv = document.getElementById("nextquestion");
    btnDiv.innerText = "Submit";
  }
}
function deselectAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
  let answer;
  console.log(answerEls);
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

nextquesbtn.addEventListener("click", function () {
  const ans = getSelected();

  if (ans) {
    QuestionsAttempted += 1;
    if (ans === questions[currentQuiz].correctOption) {
      score++;
    } else {
      wrongAnswer += 1;
    }
  }

  currentQuiz += 1;
  if (currentQuiz < questions.length) {
    loadQuiz();
  } else {
    {
      gameQuizContainerdiv = document.getElementsByClassName(
        "game-quiz-container"
      )[0];
      gameQuizContainerdiv.innerHTML = `<div class="modal-container" id="score-modal">
      <div class="modal-content-container">
        <h1>Congratulations, Quiz Completed.</h1>

        <div class="grade-details">
          <p>Attempts : ${QuestionsAttempted} / ${questions.length}</p>
          <p>Wrong Answers : ${wrongAnswer}  <span id="wrong-answers"></span></p>
          <p>Right Answers : ${score} <span id="right-answers"></span></p>
          <p>Grade : ${
            (score / questions.length) * 100
          }<span id="grade-percentage"></span>%</p>
          <p><span id="remarks"></span></p>
        </div>

        <div class="modal-button-container">
          <button onclick="location.reload()">Continue</button>
        </div>
      </div>
    </div>`;
    }
  }
});
