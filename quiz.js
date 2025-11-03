const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

//destructurin the questionobj property

({ category, id, correctAnswer, options, question } = questionObj);

const questionElement = document.getElementById("question");
questionElement.textContent = question;

const optionsElement = document.getElementById("options");
options.forEach((option) => {
  const optionbutton = document.createElement("button");
  optionbutton.textContent = option;
  optionsElement.appendChild(optionbutton);
});
