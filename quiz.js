const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
const totalScore = quesJSON.length;
let currentQuestion = 0;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
// show initial score
scoreEl.textContent = `Score: ${score} / ${totalScore}`;
function showQuestion() {
  // Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  //Setting question text content
  questionEl.textContent = question;

  // clone the options array before shuffling so original data isn't mutated
  const shuffledOptions = shuffleOptions([...options]);

  //Populating the Options div with the buttons.
  // clear previous options
  optionEl.textContent = "";

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
      // compare trimmed strings to avoid issues with stray spaces
      if (String(opt).trim() === String(correctAnswer).trim()) {
        score++;
      } else {
        score -= 0.25;
      }
      // update score and move to next question
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextQuestion);
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= quesJSON.length) {
    optionEl.textContent = "";
    nextButton.style.display = "none";
    questionEl.textContent = "Quiz Completed!!";
    scoreEl.textContent = `Final Score: ${score}`;
  } else {
    showQuestion();
  }
}

//Shuffling the Options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    // correct Fisher-Yates index: random int from 0..i
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

//   shuffleOptions([1, 2, 3, 4, 5]);

// Start the quiz by showing the first question
showQuestion();
