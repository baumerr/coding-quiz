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

    console.log("start test button clicked");

    // setting up first column as click the high score
    var firstColEl = document.createElement("div");
    firstColEl.setAttribute("class", "col-3");
    firstColEl.setAttribute("id", "results");

    var mainEl = document.querySelector("#main-div")
    mainEl.appendChild(firstColEl);

    var highScoreButtonEl = document.createElement("button");
    highScoreButtonEl.setAttribute("type", "button");
    highScoreButtonEl.setAttribute("class", "btn btn-link");
    highScoreButtonEl.setAttribute("id", "viewScores");
    highScoreButtonEl.textContent = "View High Scores";
    firstColEl.appendChild(highScoreButtonEl);


    // var countDown = setInterval(function () {
    
    //     var timeLeft = 90;
    
    //     timeLeft--;
    
    //     document.getElementById("timer").innerHTML = "You have " + timeLeft + " second(s) left.";
    
    //     if(timeLeft <= 0) {
    //         document.getElementById("over").innerHTML = "You have lost the game. Pack your bags and get out of here.";
    //     };
    // }, 1000);
}

startTest();

{/*<div class="row text-center" id="over">
            // View High Scores Button
            <div class="col-3" id="results">
                <button type="button" class="btn btn-link" id="viewScores">View High Scores</button>
            </div>
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
            //This shows the time left for the quiz
            <div class="col-3" id="timer">
                You have 90 second(s) left.
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

