const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a McDonald's Big Mac?",
};

// Destructure properties
const { correctAnswer, options, question } = questionObj;

let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const optionsElement = document.getElementById("options");

questionElement.textContent = question;
scoreElement.textContent = `Score: ${score}`;

// Shuffle the options array (Fisher–Yates)
function shuffleOptions(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr; // important!
}

const shuffledArray = shuffleOptions([...options]); // copy before shuffling

// Create and display buttons
shuffledArray.forEach((option) => {
  const optionButton = document.createElement("button");
  optionButton.textContent = option;
  optionsElement.appendChild(optionButton);

  optionButton.addEventListener("click", () => {
    if (option.trim() === correctAnswer) {
      score++;
      optionButton.style.backgroundColor = "green";
    } else {
      score -= 0.25;
      optionButton.style.backgroundColor = "red";
    }

    questionElement.textContent = "QUIZ COMPLETED!";
    scoreElement.textContent = `Score: ${score}`;

    // Disable all buttons after answering
    const allButtons = optionsElement.querySelectorAll("button");
    allButtons.forEach((btn) => (btn.disabled = true));
  });
});
