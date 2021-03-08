//variables
var timer = 15;
var currentQuestionIndex  =0;
var score = 0;
var quizScreen = document.querySelector('#quiz-screen');
var quizTimerUpdate = document.querySelector('#timer');
var startQuizButton = document.querySelector('#start-button');
var quizTimerScreen = document.querySelector('#timer-screen');
var startScreen = document.querySelector('#start-screen');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#score');

//arrays
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
//event listeners
startQuizButton.addEventListener('click',startQuiz);

//functions
function startQuiz(){
    startScreen.setAttribute('class','hide');
    quizScreen.removeAttribute('class','hide');
    quizTimerScreen.removeAttribute('class','hide');
    countdownTimer();
    getQuestions();
};

function countdownTimer() {
    var decreaseTime = setInterval(function () {
        if (timer > 0) {
            timer--;
            quizTimerUpdate.textContent = timer;
        } else {
            quizTimerUpdate.textContent = 'Oops! Your time is up!';
            clearInterval(decreaseTime);
        };
    }, 1000);  
};

function getQuestions(){

};



