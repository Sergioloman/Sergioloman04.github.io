//variables
var timer = 25;
var currentQuestionIndex = 0;
var clock;

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
startQuizButton.addEventListener('click', startQuiz);

//functions
function startQuiz() { 
    startScreen.setAttribute('class', 'hide');
    quizScreen.removeAttribute('class', 'hide');
    quizTimerScreen.removeAttribute('class', 'hide');
    endScreen.setAttribute('class','hide');
    clock = setInterval(countdownTimer,1000);
    getQuestions();
};

function countdownTimer() {
            timer--;
            quizTimerUpdate.textContent = timer;
        if(timer <= 0){
            quizTimerUpdate.textContent = 'Time is up!';
            quizEnd()
        }    
    };

function getQuestions() {
        var currentQuestion = quizQuestions[currentQuestionIndex];
        console.log(currentQuestion);
        var questionTitle = document.querySelector('.question-title');
        questionTitle.textContent = currentQuestion.Title;
        console.log(currentQuestion.Title);
        var questionOptions= document.querySelector ('.options');
        questionOptions.innerHTML = "";
        currentQuestion.Options.forEach(function(option){
            var qContent = document.createElement('button');
            qContent.setAttribute('class','option');
            qContent.setAttribute('value',option)
            qContent.textContent= option;
            qContent.onclick= OptionClick;
            questionOptions.appendChild(qContent);
        })
    };

function OptionClick() {    
    if(this.value === quizQuestions[currentQuestionIndex].Answer){
        console.log('correct!');
        timer += 5;
    }else{
        console.log('wrong!');
        timer -= 5;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex === quizQuestions.length){
        quizEnd();
    }else{ 
       getQuestions(); 
    }
};

function quizEnd() {
    endScreen.removeAttribute('class', 'hide');
    quizScreen.setAttribute('class', 'hide');
    clearInterval(clock);
    currentQuestionIndex=0;  
};

replayQuizButton.addEventListener('click',startQuiz);
