var introEl = document.getElementById("intro");
var timeEl = document.getElementById("time");
var quizEl = document.getElementById("quiz");
var timeLeftEl = document.getElementById("time-left");
var answerEl = document.getElementById("answers");
var startQuizBtn = document.getElementById("start-quiz");
var infoEl = document.getElementById("info");
var initalEl = document.getElementById("initals");
var rightOrWrongEl = document.getElementById("right-or-wrong");

var restartBtn = document.getElementById("restart");
var exitBtn = document.getElementById("exit");
var nextQuestBtn = document.getElementById("next");
var saveNameBtn = document.getElementById("name");

var questionTitle = document.getElementById("question");

var answer1 = document.getElementById("answers-1");
var answer2 = document.getElementById("answers-2");
var answer3 = document.getElementById("answers-3");
var answer4 = document.getElementById("answers-4");

var time = moment().format("hh:mm:ss");
  $("#myTime").text(time);
  
var today = moment();
$("#myDay").text(today.format("MMM Do, YYYY"));

