var introEl = document.getElementById("intro");
var timeEl = document.getElementById("time");
var quizEl = document.getElementById("quiz");
var answerEl = document.getElementById("answers");
var infoEl = document.getElementById("info");
var initalEl = document.getElementById("initals");
var rightOrWrongEl = document.getElementById("right-or-wrong");

var restartBtn = document.getElementById("restart");
var exitBtn = document.getElementById("exit");
var nextQuestBtn = document.getElementById("next");
var saveNameBtn = document.getElementById("name");
var startQuizBtn = document.getElementById("start-quiz");

var questionTitle = document.getElementById("question");
var currentQuestion = 0;

var answer1 = document.getElementById("answers-1");
var answer2 = document.getElementById("answers-2");
var answer3 = document.getElementById("answers-3");
var answer4 = document.getElementById("answers-4");

var time = moment().format("hh:mm:ss");
  $("#myTime").text(time);

var today = moment();
$("#myDay").text(today.format("MMM Do, YYYY"));

var totalTime = 120;
var interval;
var timeLeftEl = document.getElementById("time-left");

//TODO: create an array of objects that has three properties `questions:string`, `answers:array`, `rightAnwers:number`
var questions = [
  {
    question: "Arrays in Javascript can be used to store _______.",
    answer: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the Above"
    ],
    rightAnswer: "All of the Above"
  },
  {
    question: "The condition in an if I else statement is enclosed within _______.",
    answer: [
      "Quotes",
      "Curly Brackets",
      "Parenthesis",
      "Square Brackets"
    ],
    rightAnswer: "Parenthesis"

  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is _______.",
    answer: [
      "Javascript",
      "Terminal/Bash",
      "For Loops",
      "Console.log"

    ],
    rightAnswer: "Console.log"

  },
  {
    question: "Commonly used data types DO NOT include:",
    answer: [
      "Strings",
      "Booleans",
      "Alerts",
      "Numbers"

    ],
    rightAnswer: "Alerts"
  }
];



// 1) Click Start 
// // Start the Quiz which begins the timer
// Write Questions and answers
// Work on Timer

// 2) Questions are submitted 
// Questions are reviewed
//update quiz score 

// 3) Go to next question 

// 4) Finish quiz
// Log score
// Build function to save top scores in local storage

// 5) given option to play again or exit
// Build restart quiz button
// Build Exit Quiz Function 


function startQuiz (event) {
  event.preventDefault();
  // start timer function
  startTimer(); 

// hide the intro card
  introEl.style.display="none";

  // show the section
  quizEl.style.display="block";

  // display questions
  displayQuestions ();

}

function startTimer () {
  interval = setInterval(() => {
  // totalTime = 120;
  totalTime--;
  if(totalTime <= 0 ){
    totalTime= 120;
    clearInterval(interval);
    quizEl.style.display="none";
    infoEl.style.display="block";
  }
  timeLeftEl.textContent=totalTime;
  },1000)


}

function displayQuestions () {
  questionTitle.textContent = questions[currentQuestion].question;
  answer1.textContent = questions[currentQuestion].answer[0];
  answer2.textContent = questions[currentQuestion].answer[1];
  answer3.textContent = questions[currentQuestion].answer[2]
  answer4.textContent = questions[currentQuestion].answer[3];
}


function checkAnswer (event) {
  event.preventDefault();
  //create a variable to fetch the data of the answer that the user selects
  var textAnswer = event.target.innerText;
  //compare if the answer selected by the user(textanswer) === right answer
  if(textAnswer === questions.currentQuestion.rightAnswer)
  // if condition is true the display right on the browser
  

}

function onNextBtnClick () {

}

function storeInfo () {

}

function exitQ () {

}

function restartQ () {

}

//Event Listeners

startQuizBtn.addEventListener("click", startQuiz);
answerEl.addEventListener("click", checkAnswer);
nextQuestBtn.addEventListener("click", onNextBtnClick);
saveNameBtn.addEventListener("click", storeInfo);
exitBtn.addEventListener("click", exitQ);
restartBtn.addEventListener("click", restartQ);
