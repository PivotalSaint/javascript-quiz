// GIVEN I am taking a code quiz
// WHEN I click the start button
var startQuiz = document.getElementById('questionBody');
console.log(startQuiz);

// need to add button that prompts or starts code with a timer

// THEN a timer starts and I am presented with a question
// timer needs to be set function with total time and a variable to subtract that time
// Add timer function here
function startQuiz () {
    document.getElementById("questionList").style.display = value;
    prompt("would you like to take the javabean quiz?");
    var quizTime = 6000;

    var timeInterval = setInterval( function(){
        if (quizTime > 1) {
            quizTime.textContent = quizTime + 'seconds remaining';
            quizTime--;
        }

        else if (quizTime ===1) {
            quizTime.textContent= quizTime + 'seconds remaining';
            quizTime--;
        }
        else {
            quizTime.textContent = '';
            clearInterval(timeInterval);
            displayQuizScore();
        }
    });
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