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
    Options: [" # "," $( ) "," ( ) "," @( ) "],
    Answer: " ( ) ",
},
{
    Title: "Choose the statement that most resembles the definition of 'boolean' ",
    Options: [" if/or "," while/else "," true/false "," valid/invalid "],
    Answer: " true/false ",
},
];
//variables
var timer = quizQuestions.length * 5;
var currentQuestionIndex = 0;
var clock;

var quizScreen = document.querySelector('#quiz-screen');
var startScreen = document.querySelector('#start-screen');
var endScreen = document.querySelector('#end-screen');
var scoreScreen = document.querySelector('#score-screen')

var quizTimerUpdate = document.querySelector('#timer');
var quizTimerScreen = document.querySelector('#timer-screen');

var startQuizButton = document.querySelector('#start-button');
var replayQuizButton = document.querySelector('#replay-button');

var displayAnswer = document.querySelector('#question-answers');

var submitScore = document.querySelector('#submit');

var clear = document.querySelector('#clear-scores');

var playerInnitials = document.querySelector('#innitials')
var highScore = document.querySelector('#player-score')


//functions
function startQuiz() { 
    startScreen.setAttribute('class', 'hide');
    quizScreen.removeAttribute('class', 'hide');
    quizTimerScreen.removeAttribute('class', 'hide');
    endScreen.setAttribute('class','hide');
    scoreScreen.setAttribute('class','hide');
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
        var questionTitle = document.querySelector('.question-title');
        questionTitle.textContent = currentQuestion.Title;
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
        
        displayAnswer.textContent = "Nice! +5 seconds to the timer!";
        resultHandler()
        displayAnswer.removeAttribute('class','hide');
        timer += 5;
    }else{
        displayAnswer.textContent = "Wrong! -5 seconds to the timer";
        resultHandler();
        displayAnswer.removeAttribute('class','hide');
        timer -= 5;
    };

    currentQuestionIndex++;
    if(currentQuestionIndex === quizQuestions.length){
        quizEnd();
    }else{ 
       getQuestions(); 
    }
};
  
function resultHandler(){ 
    setTimeout(function(){displayAnswer.setAttribute('class','hide')},1500);
    clearTimeout();
};

function quizEnd() {
    endScreen.removeAttribute('class', 'hide');
    quizScreen.setAttribute('class', 'hide');
    scoreScreen.setAttribute('class', 'hide');
    clearInterval(clock);
    currentQuestionIndex=0; 
    playerInnitials.value= "";
    quizTimerUpdate.textContent = 'Time is up!'; 
    highScore.textContent= timer;
};
//this fetches from local storage.
var scoresArray = JSON.parse(localStorage.getItem('playerinfo')) || [];

if (JSON.parse(localStorage.getItem('playerinfo')) !== null){
    scoresArray = JSON.parse(localStorage.getItem('playerinfo'));}

function scoreHandler (){
    var innitials = document.querySelector('#innitials').value;
    if(innitials === '' || innitials.length > 3 ){
        alert('Nope, you must enter up to 3 characters');
        quizEnd()
        ////how can i make it so it goes back to quizEnd?           
    }else{
        alert('Success! Your score is now saved!');
    
    };
    var playerInformation = {
        innitials : innitials,
        timer : timer,
    }
    
    scoresArray.push(playerInformation);
    localStorage.setItem('playerinfo',JSON.stringify(scoresArray));
    
}
//this function renders ( or should render) results on the page need to pass in an array to render.
function displayHighScores(){
    scoreScreen.removeAttribute('class','hide');
    endScreen.setAttribute('class','hide');
    quizTimerScreen.setAttribute('class','hide');

    var scoresContainer = document.querySelector('#high-scores');
    
    console.log(scoresArray)

    for (var i = 0; i < scoresArray.length; i++){
        

        var innitialsItem = document.createElement('p');
        innitialsItem.setAttribute('class','user-innitials');
        innitialsItem.textContent= scoresArray[i].innitials;
        innitialsItem = scoresContainer.appendChild(innitialsItem);
        console.log(scoresArray[i].innitials);
        
        var scoresItem = document.createElement('p');
        scoresItem.setAttribute('class','user-scores');
        scoresItem.textContent = scoresArray[i].timer;
        scoresItem = scoresContainer.appendChild(scoresItem);
        console.log(scoresArray[i].timer); 
            
    }
    
}
submitScore.addEventListener('click',scoreHandler)

function clearScores(){
    localStorage.clear();
    location.reload();
    alert('Your play history has been deleted :(');
}

startQuizButton.addEventListener('click', startQuiz);

submitScore.addEventListener('click', displayHighScores);

clear.addEventListener('click',clearScores)

replayQuizButton.addEventListener('click',startQuiz);



