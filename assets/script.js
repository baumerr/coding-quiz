const myQuestions = [
  {
    question: "What type of data does a 'Boolean' variable represent?",
    answers: {
      a: "String",
      b: "Numbers",
      c: "True/False",
      d: "None of the above",
    },
    correctAnswer: "answerC",
  },
  {
    question: "How do you add a function to an HTML Button?",
    answers: {
      a: "document.querySelector()",
      b: "document.getElementById()",
      c: "addEventListener()",
      d: "createElement()",
    },
    correctAnswer: "answerC",
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
    correctAnswer: "answerA",
  },
  {
    question: "What type of data can a Javascript array store?",
    answers: {
      a: "strings",
      b: "numbers",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "answerD",
  },
  {
    question: "What is NOT a way to create a function in Javascript?",
    answers: {
      a: "var newFunction = function () {};",
      b: "create.function () {};",
      c: "function () {}",
      d: "none of the above",
    },
    correctAnswer: "answerC",
  },
];
var i = 0;

var timeLeft = 90;
var newTime = timeLeft;
var timerTest;

var gradingEl = document.createElement("p");
gradingEl.setAttribute("class", "text-center");
gradingEl.innerText = "";
var bodyEl = document.getElementsByTagName("BODY")[0];

// set up third column for timer
var thirdColEl = document.createElement("div");
thirdColEl.setAttribute("class", "col-3");
thirdColEl.setAttribute("id", "timer");

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
  startButtonEl.addEventListener("click", beginTest);
};

// change test to quiz
var displayQuestion = function () {
  
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

  // ask the question
  var questionH1El = document.createElement("h1");
  questionH1El.textContent = myQuestions[i].question;
  secondColEl.appendChild(questionH1El);
  // create list of answers
  var listOfAnswersEl = document.createElement("ul");
  secondColEl.appendChild(listOfAnswersEl);

  // ANSWER A
  var answerOneEl = document.createElement("input");
  answerOneEl.setAttribute("type", "button");
  answerOneEl.setAttribute("id", "answerA");
  answerOneEl.setAttribute("onclick", "answerQuestion(event)");
  answerOneEl.setAttribute("value", myQuestions[i].answers.a);
  listOfAnswersEl.appendChild(answerOneEl);
  

  // ANSWER B
  var answerTwoEl = document.createElement("input");
  answerTwoEl.setAttribute("type", "button");
  answerTwoEl.setAttribute("id", "answerB");
  answerTwoEl.setAttribute("onclick", "answerQuestion(event)");
  answerTwoEl.setAttribute("value", myQuestions[i].answers.b);
  listOfAnswersEl.appendChild(answerTwoEl);
  //answerLabelTwoEl.textContent = myQuestions[i].answers.b;

  // ANSWER C
  var answerThreeEl = document.createElement("input");
  answerThreeEl.setAttribute("type", "button");
  answerThreeEl.setAttribute("id", "answerC");
  answerThreeEl.setAttribute("onclick", "answerQuestion(event)");
  answerThreeEl.setAttribute("value", myQuestions[i].answers.c);
  listOfAnswersEl.appendChild(answerThreeEl);

  // ANSWER D
  var answerFourEl = document.createElement("input");
  answerFourEl.setAttribute("type", "button");
  answerFourEl.setAttribute("id", "answerD");
  answerFourEl.setAttribute("onclick", "answerQuestion(event)");
  answerFourEl.setAttribute("value", myQuestions[i].answers.d);
  listOfAnswersEl.appendChild(answerFourEl);

  rowEl.appendChild(secondColEl);

  thirdColEl.textContent = "You have " + newTime + " second(s) left.";
  rowEl.appendChild(thirdColEl);
};

var countDown = function (timeLeft) {
  timeLeft = newTime;
    timeLeft--;

    document.getElementById("timer").innerHTML =
      "You have " + timeLeft + " second(s) left.";

    if (timeLeft <= 0) {
      clearInterval(timerTest);
      document.getElementById("over").innerHTML =
        "You have lost the game. Pack your bags and get out of here.";
    }
    newTime = timeLeft;
};

var answerQuestion = function (event) {
    // check if answer is correct
    if(event.path[0].id === myQuestions[i].correctAnswer) {
      console.log("I am a genius");

      gradingEl.textContent = "Correct, collect your trophy.";

    } else {
      console.log("I am a dummy");

      gradingEl.textContent = "Wrong, minus 10 seconds";
      
      console.log(newTime);
      newTime -= 10;
      console.log(newTime);
      
      countDown(newTime);
    }
    
    //timeLeft = newTime;
    bodyEl.appendChild(gradingEl);
    
    
  
  // check where timer is
  i++;

  if (timeLeft <= 0 || i >= myQuestions.length) {
    endTest();
  } else {
    displayQuestion();
  }
  
};

var endTest = function () {
  clearInterval(timerTest);

  console.log(newTime);

  gradingEl.innerHTML = "";

  var mainEl = document.querySelector("#main-div");
  mainEl.innerHTML = "";

  // var overEl = document.getElementById("over");
  // mainEl.appendChild(overEl);
  var congratsEl = document.createElement("p");
  // congratsEl.setAttribute("id", "")
  congratsEl.setAttribute("class", "text-center");
  congratsEl.textContent = "Your final score is: " + newTime + ". Congratulations!";
  mainEl.appendChild(congratsEl);
  

  

  var inputDivEl = document.createElement("div");
  mainEl.appendChild(inputDivEl);
  var inputPaEl = document.createElement("p");
  inputPaEl.textContent = "Please Input your initials";
  inputDivEl.appendChild(inputPaEl);

  var inputEl = document.createElement("input");
  inputDivEl.appendChild(inputEl);
  
  console.log(inputDivEl.value);

  
  
}

var removeStart = function () {
  var removeStartButtonEl = document.getElementById("start");
  //removes start button
  removeStartButtonEl.remove();
};

var beginTest = function () {
  removeStart();
  displayQuestion();
  countDown(timeLeft);
  timerTest = setInterval(countDown, 1000);
}

startTest();