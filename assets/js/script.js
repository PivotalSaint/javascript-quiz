// GIVEN I am taking a code quiz
// WHEN I click the start button
var startQuiz=document.querySelector("#questionBody");
var quizTimer= document.querySelector("#quizTimer");
var answers= document.querySelectorAll("#button");
var questionList=0;
var displayQuizScore=0;

var questions = [
    // question 1
    {
        question:"",
        choices:"",
        answers:""
    },
    // question 2
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 3
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 4
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 5
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 6
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 7
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 8
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 9
    {
        question:"",
        choices:"",
        answers:""
    },
    //question 10
    {
        question:"",
        choices:"",
        answers:""
    },
];

// need to add button that prompts or starts code with a timer
// THEN a timer starts and I am presented with a question
// timer needs to be set function with total time and a variable to subtract that time
// Add timer function here
var timeLeft = 80;
var noTime=0;
var timeOff= 10;

quizTimer.addEventListener("click", startQuiz);
function quizTimer () {
    var noTime = setInterval( function(){
        console.log(quizTimer)
        if (timeLeft > 1) {
            timeLeft.textContent = quizTimer + 'seconds remaining';
            timeLeft--;
        }

        if (timeLeft ===1) {
            timeLeft.textContent= timeLeft + 'seconds remaining';
            timeLeft--;
        }
        else {
            timeLeft.textContent = '';
            clearInterval(quizTimer);
            displayQuizScore();
        }
    var startQuiz=setInterval(quizTimer, 1000);

    });
};
function generateQuestions(){
    

}

// WHEN I answer a question
// Need to add function that logs data and keeps the data stored by the window
// this variable will effect timer as well if not true and is false



// THEN I am presented with another question
// so variable has to loop with continuous timer and function for questions has to continue





// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// add function to subtract time in milliseconds from overall time left




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score