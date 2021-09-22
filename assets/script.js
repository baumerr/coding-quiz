// Creating countdown function
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

var beginTest = function () {

    console.log("start test button clicked");

    // var countDown = setInterval(function () {
    
    //     var timeLeft = 90;
    
    //     timeLeft--;
    
    //     document.getElementById("timer").innerHTML = "You have " + timeLeft + " second(s) left.";
    
    //     if(timeLeft <= 0) {
    //         document.getElementById("over").innerHTML = "You have lost the game. Pack your bags and get out of here.";
    //     };
    // }, 1000);
}




const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const showScores = document.getElementById("viewScores");
var startTest = document.querySelector("#start");

startTest.addEventListener("click", beginTest);

// var completeTest = function () {

// };

var showResults = function () {
    console.log("you did it!");
};

showScores.addEventListener("click", showResults);

