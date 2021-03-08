var timer = 15;
var currentQuestionIndex =0;

var quizTimerUpdate = document.querySelector('#timer');
var startQuizButton = document.querySelector('#start-button');
var revealQuestions = document.querySelector('#quiz-screen');
var score = 0;

var quizQuestions = [{
    Title: "How can you define a variable in a way its value stays the same?",
    Options: ["var", "let", "const", "if"],
    Answer: "const",
},
{
    Title: "Which method allows you to select an item in your html file",
    Options: [".querySelector", ".addTo", ".setInterval", ".setHTML"],
    Answer: ".querySelector",
}, 
{
    Title: "Choose the most appropiate way to declare two statements are identical to each other",
    Options: ["=", "!=", "<=>", "==="],
    Answer: "===",

}];

startQuizButton.addEventListener('click',startQuiz);
function startQuiz(){
    revealQuiz.removeAttribute('class');

};

function countdownTimer() {
    var decreaseTime = setInterval(function () {
        if (timer > 0) {
            timer--;
            quizTimerUpdate.textContent = 'you have ' + timer + ' seconds left';
        } else {
            quizTimerUpdate.textContent = 'Oops! Your time is up!';
            clearInterval(decreaseTime);
        };
    }, 1000);
    
};

