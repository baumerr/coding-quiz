const myQuestions = [
  {
    question: "What type of data does a 'Boolean' variable represent?",
    answers: {
      a: "String",
      b: "Numbers",
      c: "True/False",
      d: "None of the above",
    },
    correctAnswer: "c",
  },
  {
    question: "How do you add a function to an HTML Button?",
    answers: {
      a: "document.querySelector()",
      b: "document.getElementById()",
      c: "addEventListener()",
      d: "createElement()",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What line of code is used to dynamically create HTML Elements in Javascipt?",
    answers: {
      a: "document.createElement()",
      b: "document.setAttribute()",
      c: "appendChild()",
      d: "removeAttribute()",
    },
    correctAnswer: "a",
  },
  {
    question: "What type of data can a Javascript array store?",
    answers: {
      a: "strings",
      b: "numbers",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "What is NOT a way to create a function in Javascript?",
    answers: {
      a: "var newFunction = function () {};",
      b: "create.function () {};",
      c: "function () {}",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
];
var i = 0;

var timeLeft = 90;
var newTime = timeLeft;

var startTest = function () {
  // creating container div for the start test button
  var mainEl = document.querySelector("#main-div");

  // creating row
  var rowEl = document.createElement("div");
  rowEl.setAttribute("class", "row");
  mainEl.appendChild(rowEl);

  // creating center column
  var firstColEl = document.createElement("div");
  firstColEl.setAttribute("class", "col-12 text-center");
  rowEl.appendChild(firstColEl);

  // creating button start test
  var startButtonEl = document.createElement("button");
  startButtonEl.setAttribute("type", "button");
  startButtonEl.setAttribute("class", "btn btn-primary");
  startButtonEl.setAttribute("id", "start");
  startButtonEl.textContent = "Start Test";
  firstColEl.appendChild(startButtonEl);

  // when startButtonEl is clicked, we begin the test
  startButtonEl.addEventListener("click", beginTest, removeStart);
};

// change test to quiz
var beginTest = function () {
    countDown(timeLeft);
  var mainEl = document.querySelector("#main-div");
  mainEl.innerHTML = "";

  // setting up first column as click the high score
  var firstColEl = document.createElement("div");
  firstColEl.setAttribute("class", "col-3");
  firstColEl.setAttribute("id", "results");

  // creating row
  var rowEl = document.createElement("div");
  rowEl.setAttribute("class", "row");
  rowEl.setAttribute("id", "over");
  mainEl.appendChild(rowEl);
  rowEl.appendChild(firstColEl);

  var highScoreButtonEl = document.createElement("button");
  highScoreButtonEl.setAttribute("type", "button");
  highScoreButtonEl.setAttribute("class", "btn btn-link");
  highScoreButtonEl.setAttribute("id", "viewScores");
  highScoreButtonEl.textContent = "View High Scores";
  firstColEl.appendChild(highScoreButtonEl);

  // set up middle column for actual test
  var secondColEl = document.createElement("div");
  secondColEl.setAttribute("class", "col-6 text-center");
  secondColEl.setAttribute("id", "quiz");

  // loop through questions
  //for(var i = 0; i < myQuestions.length; i++) {

  console.log(myQuestions[i]);
  // ask the question
  var questionH1El = document.createElement("h1");
  questionH1El.textContent = myQuestions[i].question;
  secondColEl.appendChild(questionH1El);
  // create list of answers
  var listOfAnswersEl = document.createElement("ul");
  secondColEl.appendChild(listOfAnswersEl);

  // ANSWER A
  // encompasses each answer in an label
  var answerLabelOneEl = document.createElement("label");
  answerLabelOneEl.textContent = myQuestions[i].answers.a;
  listOfAnswersEl.appendChild(answerLabelOneEl);
  // creates an input for them to click
  var answerOneEl = document.createElement("input");
  answerOneEl.setAttribute("type", "button");
  answerOneEl.setAttribute("name", "answerA");
  answerOneEl.setAttribute("onclick", "answerQuestion()");
  answerLabelOneEl.appendChild(answerOneEl);

  // ANSWER B
  // encompasses each answer in an label
  // var answerLabelTwoEl = document.createElement("label");
  // answerLabelTwoEl.textContent = myQuestions[i].answers.b;
  // listOfAnswersEl.appendChild(answerLabelTwoEl);
  // creates an input for them to click
  var answerTwoEl = document.createElement("input");
  answerTwoEl.setAttribute("type", "button");
  answerTwoEl.setAttribute("id", "answerB");
  answerTwoEl.setAttribute("onclick", "answerQuestion()");
  answerTwoEl.setAttribute("value", myQuestions[i].answers.b);
  listOfAnswersEl.appendChild(answerTwoEl);
  //answerLabelTwoEl.textContent = myQuestions[i].answers.b;

  // ANSWER C
  // encompasses each answer in an label
  var answerLabelThreeEl = document.createElement("label");
  answerLabelThreeEl.textContent = myQuestions[i].answers.c;
  listOfAnswersEl.appendChild(answerLabelThreeEl);
  // creates an input for them to click
  var answerThreeEl = document.createElement("input");
  answerThreeEl.setAttribute("type", "button");
  answerThreeEl.setAttribute("id", "answerC");
  answerThreeEl.setAttribute("onclick", "answerQuestion()");
  answerLabelThreeEl.appendChild(answerThreeEl);

  // ANSWER D
  // encompasses each answer in an label
  var answerLabelFourEl = document.createElement("label");
  answerLabelFourEl.textContent = myQuestions[i].answers.d;
  listOfAnswersEl.appendChild(answerLabelFourEl);
  // creates an input for them to click
  var answerFourEl = document.createElement("input");
  answerFourEl.setAttribute("type", "button");
  answerFourEl.setAttribute("id", "answerD");
  answerFourEl.setAttribute("onclick", "answerQuestion()");
  answerLabelFourEl.appendChild(answerFourEl);
  //}

  rowEl.appendChild(secondColEl);

  // set up third column for timer
  var thirdColEl = document.createElement("div");
  thirdColEl.setAttribute("class", "col-3");
  thirdColEl.setAttribute("id", "timer");
  thirdColEl.textContent = "You have " + newTime + " second(s) left.";
  rowEl.appendChild(thirdColEl);
};

var countDown = function (timeLeft) {;
    console.log("hello", timeLeft);
  setInterval(function () {
    timeLeft--;

    document.getElementById("timer").innerHTML =
      "You have " + timeLeft + " second(s) left.";

    if (timeLeft <= 0) {
      document.getElementById("over").innerHTML =
        "You have lost the game. Pack your bags and get out of here.";
    }
    newTime = timeLeft;
  }, 1000);
};

var answerQuestion = function () {
  i++;
  beginTest();
    console.log(newTime);
    countDown(newTime);
  // check if answer is correct
  // check where timer is
};

var removeStart = function () {
  var removeStartButtonEl = document.getElementById("start");
  //removes start button
  //var timeLeft = 90;
    //countDown(timeLeft);
  removeStartButtonEl.remove();
};

startTest();
