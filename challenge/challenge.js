//Questions array
const questions = [
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Module", "Digital Output Manager"],
      answer: "Document Object Model"
    },
    {
      question: "Which method adds an event listener?",
      options: ["addEventListener", "listenTo", "onClick"],
      answer: "addEventListener"
    },
  
    {
      question: "What keyword is used to declare a variable?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "How do you log something to the console?",
      options: ["print()", "console.log()", "log.console()", "debug.log()"],
      answer: "console.log()"
    },
    {
      question: "Which symbol is used for single-line comments?",
      options: ["<!--", "//", "/*", "**"],
      answer: "//"
    },
    {
      question: "What will '5' + 3 return in JavaScript?",
      options: ["8", "53", "NaN", "Error"],
      answer: "53"
    },
    {
      question: "Which loop is best for going through an array?",
      options: ["forEach", "while", "do while"],
      answer: "forEach"
    },
    {
      question: "Which property changes the background color of an element?",
      options: ["element.color", "element.style.backgroundColor", "element.background", "element.style.color"],
      answer: "element.style.backgroundColor"
    },
    {
      question: "What does `===` check for?",
      options: ["Value only", "Type only", "Value and type", "Nothing"],
      answer: "Value and type"
    },
    {
      question: "What does `innerText` do?",
      options: ["Gets the CSS style", "Gets or sets the text of an element", "Creates an HTML element", "Adds an event listener"],
      answer: "Gets or sets the text of an element"
    }
  ];
  
  
  //Your Quiz game code here

  let question = document.getElementById('question');
  let answers = document.getElementById('answers');
  let score = document.getElementById('score');
  const nextButton = document.getElementById('next');
  
  let currentQuestion = {};
  let currentScore = 0;
  let askedQuestions = [];

function showRandomQuestion () {
answers.innerHTML = '';

const remainingQuestions = questions.filter(q => !askedQuestions.includes(q));

if (remainingQuestions.length ===0) {
  question.innerText = "Quiz Finished!";
  answers.innerHTML = "";
  nextButton.style.display = "none";
  return;
}

const randomQuestion = Math.floor(Math.random() * remainingQuestions.length);
currentQuestion = remainingQuestions[randomQuestion];
askedQuestions.push(currentQuestion);

question.innerText = currentQuestion.question;

currentQuestion.options.forEach(option => {
  const btn = document.createElement('button');
  btn.innerText = option;
  btn.addEventListener('click', () => checkAnswer(option));
  answers.appendChild(btn);
});
}

function checkAnswer (selectedOption) {
  const isCorrect = selectedOption === currentQuestion.answer;
  if (isCorrect) {
    currentScore++;
    score.innerText = `Score: ${currentScore}`;
  }

   // Disable buttons after answer
   Array.from(answers.children).forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === currentQuestion.answer) {
      btn.style.backgroundColor = '#b2f2bb'; // green
    } else {
      btn.style.backgroundColor = '#ffc9c9'; // red
    }
  });
}


nextButton.addEventListener('click', () => {
  showRandomQuestion();
});

showRandomQuestion();