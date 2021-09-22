const myQuestions = [
    {
        question: "What type of data does a 'Boolean' variable represent?",
        answers: {
            a: "String",
            b: "Numbers",
            c: "True/False",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you add a function to an HTML Button?",
        answers: {
            a: "document.querySelector()",
            b: "document.getElementById()",
            c: "addEventListener()",
            d: "createElement()"
        },
        correctAnswer: "c"
    },
    {
        question: "What line of code is used to dynamically create HTML Elements in Javascipt?",
        answers: {
            a: "document.createElement()",
            b: "document.setAttribute()",
            c: "appendChild()",
            d: "removeAttribute()"
        },
        correctAnswer: "a"
    },
    {
        question: "What type of data can a Javascript array store?",
        answers: {
            a: "strings",
            b: "numbers",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "What is NOT a way to create a function in Javascript?",
        answers: {
            a: "var newFunction = function () {};",
            b: "create.function () {};",
            c: "function () {}",
            d: "none of the above"
        },
        correctAnswer: "c"
    }
];


var startTest = function () {
    
    // creating container div for the start test button
    var mainEl = document.querySelector("#main-div")

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

var beginTest = function () {

    //removes start button
    var removeStartButtonEl = document.getElementById("start");
    removeStartButtonEl.remove();

    // setting up first column as click the high score
    var firstColEl = document.createElement("div");
    firstColEl.setAttribute("class", "col-3");
    firstColEl.setAttribute("id", "results");

    var mainEl = document.querySelector("#main-div")
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
    for(var i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i]);
        // ask the question
        var questionH1El = document.createElement("h1");
        questionH1El.textContent = myQuestions[i].question;
        secondColEl.appendChild(questionH1El);
        //receive inputs for the answer
        var listOfAnswersEl = document.createElement("ul");
        secondColEl.appendChild(listOfAnswersEl);

        var answersListOneEl = document.createElement("li");
        listOfAnswersEl.appendChild(answersListOneEl);

        var answerOneEl = document.createElement("input");
        answerOneEl.setAttribute("type", "checkbox");
        answerOneEl.textContent = myQuestions[i].answers.a;
        answersListOneEl.appendChild(answerOneEl);
    }

    rowEl.appendChild(secondColEl);

    // set up third column for timer
    var thirdColEl = document.createElement("div");
    thirdColEl.setAttribute("class", "col-3");
    thirdColEl.setAttribute("id", "timer");
    thirdColEl.textContent = "You have 90 second(s) left.";
    rowEl.appendChild(thirdColEl);

    var timeLeft = 90;

    var countDown = setInterval(function () {
    
        timeLeft--;
    
        document.getElementById("timer").innerHTML = "You have " + timeLeft + " second(s) left.";
    
        if(timeLeft <= 0) {
            document.getElementById("over").innerHTML = "You have lost the game. Pack your bags and get out of here.";
        };
    }, 1000);

    countDown;
}

// var questions = function () {
//     console.log("these are the questions");

//     var mainEl = document.querySelector("#main-div")
//     // creating row
//     var rowEl = document.createElement("div");
//     rowEl.setAttribute("class", "row");
//     rowEl.setAttribute("id", "over");
//     mainEl.appendChild(rowEl);

//     var secondColEl = document.createElement("div");
//     secondColEl.setAttribute("class", "col-6 text-center");
//     secondColEl.setAttribute("id", "quiz");
//     rowEl.appendChild(secondColEl);

//     var questions = document.createElement("div");
//     questions.innerHTML = "yo";
//     secondColEl.appendChild(questions);

    
// }

startTest();

{/*
            //Actual Test
            <div class="col-6" id="quiz">
                <h1>Question Here</h1>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                    </ul>
                <button type="button" class="btn btn-primary" id="submit">
                    Submit
            </div>
        </div>*/}













// var showResults = function () {
//     console.log("you did it!");
// };

// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");
// const showScores = document.getElementById("viewScores");
// var startTest = document.querySelector("#start");
// Creating countdown function


// beginTest();



// var completeTest = function () {

// };

//showScores.addEventListener("click", showResults);

