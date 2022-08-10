// GIVEN I am taking a code quiz
// WHEN I click the start button
var startQuiz = document.querySelector(".questionBody");
var quizTimer= document.querySelector(".quizTimer")

// need to add button that prompts or starts code with a timer

// THEN a timer starts and I am presented with a question
// timer needs to be set function with total time and a variable to subtract that time
// Add timer function here

var quizQuestions 

function startQuiz () {

    var timeLeft = 60;

    var timerInterval = setInterval( function(){
        if (timeLeft > 1) {
            timeLeft.textContent = quizTimer + 'seconds remaining';
            timeLeft--;
        }

        else if (timeLeft ===1) {
            timeLeft.textContent= timeLeft + 'seconds remaining';
            timeLeft--;
        }
        else {
            timeLeft.textContent = '';
            clearInterval(timeLeft);
            displayQuizScore();
        }
    });
}
function displayQuizScore(){

}
    document.addEventListener("click", startQuiz)

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