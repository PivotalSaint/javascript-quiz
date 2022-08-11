// GIVEN I am taking a code quiz
// WHEN I click the start button
window.alert("would you like to try this madness?")

var timeLeft = 80;
var penalty= 10;
var text = document.querySelector("h3")
var answerA=document.querySelector("#answerA")
var answerB=document.querySelector("#answerB")
var answerC=document.querySelector("#answerC")
var answerD=document.querySelector("#answerD")
var currentQuestion = 0
var questions= [
    
    // question 1
    {
        text:"What is a good way to trace your work in the browser?",
        choices:["console.log","javaBean","bootCamp", "no idea"],
        answers:"console.log"
    },
    // question 2
    {
        text:"Doing _____ is a good way of storing important coding for reffering to later.",
        choices:["pull-request", "commits", "merge-request", "no idea"],
        answers:"commits"
    },
    //question 3
    {
        text:"This scripting helps with giving the user an interacting experience.",
        choices:["style.css", "javaBean", "script.js", "no idea"],
        answers:"script.js"
    },
    //question 4
    {
        text:"git ______ -b allows a user to create another branch to work in without effecting the main coding?",
        choices:["push", "pull", "checkout", "no idea"],
        answers:"checkout"
    },
    //question 5
    {
        text:"_____ refers to which it came from?",
        choices:["who", "what", "no idea", "this"],
        answers:"this"
    },
];

function quizTimer () {
    var quizTimer= document.querySelector(".quizTimer")
    quizTimer.textContent="The quiz will end in" + timeLeft + "seconds remaining";
    var startTime = setInterval( function(){

        if (timeLeft > 1) {
            quizTimer.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        }

        else if (timeLeft ===1) {
            quizTimer.textContent= timeLeft + "seconds remaining";
            timeLeft--;
        }
        else {
            quizTimer.textContent = "";
            clearInterval(startTime);
            displayQuizScore();
        }

    }, 1000);
};
quizTimer();
text.textContent=questions[currentQuestion].text[0]
answerA.textContent=questions[currentQuestion].choices[0];
answerB.textContent=questions[currentQuestion].choices[1];
answerC.textContent=questions[currentQuestion].choices[2];
answerD.textContent=questions[currentQuestion].choices[3];


// need to add button that prompts or starts code with a timer
// THEN a timer starts and I am presented with a question
// timer needs to be set function with total time and a variable to subtract that time
// Add timer function here
function checkAnswer(event){
    var target=event.target
    console.log(target)
    if (target.textContent===questions[0].answers){
        currentQuestion++
    } else {
        currentQuestion++ 
        timeLeft = timeLeft - penalty
    }
    answerA.textContent=questions[currentQuestion].choices[0];
    answerB.textContent=questions[currentQuestion].choices[1];
    answerC.textContent=questions[currentQuestion].choices[2];
    answerD.textContent=questions[currentQuestion].choices[3];
}
answerA.addEventListener("click", checkAnswer);
answerB.addEventListener("click", checkAnswer);
answerC.addEventListener("click", checkAnswer);
answerD.addEventListener("click", checkAnswer);

// we need to keep track of which question were on, use this variable 