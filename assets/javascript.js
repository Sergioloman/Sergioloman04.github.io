//variables
var timer;
var currentQuestionIndex = 0;
var clock;

var quizScreen = document.querySelector('#quiz-screen');
var startScreen = document.querySelector('#start-screen');
var endScreen = document.querySelector('#end-screen');

var quizTimerUpdate = document.querySelector('#timer');
var quizTimerScreen = document.querySelector('#timer-screen');

var startQuizButton = document.querySelector('#start-button');
var replayQuizButton = document.querySelector('#replay-button');


var submitScore = document.querySelector('#submit')

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

},
{
    Title: "What does API stands for?",
    Options: ["Application Programing Interface","Applied Programs Interexchange","Appliying Programing to the Internet ","As Program Intents"],
    Answer: "Application Programing Interface",
},
{
    Title: "What symbol do we use to call back functions?",
    Options: [" # "," $() "," () "," @() "],
    Answer: " () ",
},
{
    Title: "Choose the statement that most resembles the definition of 'boolean' ",
    Options: [" if/or "," while/else "," true/false "," valid/invalid "],
    Answer: " true/false ",
},


];
//event listeners
startQuizButton.addEventListener('click', startQuiz);

//functions
function startQuiz() { 
    startScreen.setAttribute('class', 'hide');
    quizScreen.removeAttribute('class', 'hide');
    quizTimerScreen.removeAttribute('class', 'hide');
    endScreen.setAttribute('class','hide');
    timer = 25;
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
        alert("Nice! +5 seconds to the timer! ");
        timer += 5;
    }else{
        console.log('wrong!');
        alert("Wrong! -5 seconds to the timer")
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
    quizTimerUpdate.textContent = 'Time is up!'; 
    console.log(timer); 

    var highScore = document.querySelector('#player-score')
    highScore.textContent= timer;

    var lastScore = document.querySelector('#last-player-innitials');
    lastScore.textContent = localStorage.getItem('player-innitials', innitials);

    var lastPlayer = document.querySelector('#last-high-score');
    lastPlayer.textContent= localStorage.getItem('last-score', timer);
};



submitScore.addEventListener('click',function(event){
    event.preventDefault();

    var innitials = document.querySelector('#innitials').value;

    if(innitials === ''){
        alert('error! Innitials cannot be blank');
    }else{
        alert('success! You have entered the scoreboard!');
        localStorage.setItem('player-innitials', innitials);
        localStorage.setItem('last-score',timer);
    };
});

replayQuizButton.addEventListener('click',startQuiz);

