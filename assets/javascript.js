//variables
var timer = 5;
var currentQuestionIndex  =0;

var quizScreen = document.querySelector('#quiz-screen');
var startScreen = document.querySelector('#start-screen');
var endScreen = document.querySelector('#end-screen');

var quizTimerUpdate = document.querySelector('#timer');
var quizTimerScreen = document.querySelector('#timer-screen');

var startQuizButton = document.querySelector('#start-button');
var replayQuizButton = document.querySelector('#replay-button');

//arrays
var quizQuestions = [{
    Title: "How can you define a variable so it's value stays the same?",
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
            quizTimerUpdate.textContent = 'Time is up!';
            clearInterval(decreaseTime);
            quizEnd()
        };
    }, 1000); 
};

function getQuestions(){

    for ( i=0; i< quizQuestions.length; i++){
        
        var currentQuestion = quizQuestions[currentQuestionIndex];
    
        var questionTitle = document.querySelector('.question-title');
        questionTitle.textContent= currentQuestion.Title;
    
        //var questionOptions = document.querySelector('.options');


        // var userAnswer =       
    }

    
    // var questionOptions = document.querySelector('.options');
    // questionOptions.textContent="";

    // currentQuestion.Options.forEach(function(Options,i){
    //     var Opt =document.createElement('button');
    //     Opt.setAttribute('value',Options);
    //     Opt.textContent = i + 1+ "."+ Options;
    //     Opt.onclick = OptionClick;
    // })

     };
 

function OptionClick(){
    console.log("this is the user's answer");
    //if right answer, time + 5 seconds + prompt ( you got the right answer!)
    //if wrong answer, time -5 seconds + promt ( WRONG!)
    //when click, move +1 in index.
};

function quizEnd(){
    endScreen.removeAttribute('class','hide');
    quizScreen.setAttribute('class','hide');
    quizTimerScreen.setAttribute('class','hide');
};


