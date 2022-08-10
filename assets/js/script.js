// GIVEN I am taking a code quiz
// WHEN I click the start button
questionList=0;
displayQuizScore=0;
var timeLeft = 80;
var noTime=0;
var timeOff= 10;
var questionList
var quizTimer= document.querySelector(".quizTimer").textContent="The quiz will end in"+timeLeft+"seconds remaining";

function quizTimer () {
    window.prompt("would you like to try this madness?")
    var displayQuizScore = setInterval( function(){
        console.log(quizTimer)
        if (timeLeft > 1) {
            timeLeft.textContent = quizTimer + "seconds remaining";
            timeLeft--;
        }

        if (timeLeft ===1) {
            timeLeft.textContent= timeLeft + "seconds remaining";
            timeLeft--;
        }
        else {
            timeLeft.textContent = noTime;
            clearInterval(displayQuizScore);
            displayQuizScore();
        }

    }, 1000);
};
function questionList(text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;

    correctAnswer= function(choices){
        return choices === this.answer;
    }

var questions= [
    
    // question 1
    {
        text:"What is a good way to trace your work in the browser?",
        choices:"console.log,javaBean,bootCamp, no idea",
        answer:"console.log"
    },
    // question 2
    {
        text:"Doing _____ is a good way of storing important coding for reffering to later.",
        choices:"pull-request, commits, merge-request, no idea",
        answer:"commits"
    },
    //question 3
    {
        text:"This scripting helps with giving the user an interacting experience.",
        choices:"style.css, javaBean, script.js, no idea",
        answer:"script.js"
    },
    //question 4
    {
        text:"git ______ -b allows a user to create another branch to work in without effecting the main coding?",
        choices:"push, pull, checkout, no idea",
        answer:"checkout"
    },
    //question 5
    {
        text:"_____ refers to which it came from?",
        choices:"who, what, no idea, this",
        answer:"this"
    },
];
}
window.addEventListener("click", startQuiz);
function displayQuizScore(){
    if (startQuiz(quizTimer <=0)
}
// need to add button that prompts or starts code with a timer
// THEN a timer starts and I am presented with a question
// timer needs to be set function with total time and a variable to subtract that time
// Add timer function here
