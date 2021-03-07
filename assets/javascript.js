
var timer = 30;
var quizTimerUpdate = document.getElementById('timer');
var score =  0; 
var questionsArray = [
    {},
    {},
    {},
]
var questionOptionsUno= [
    { q: "1=1", a: true },
    { q: "1+2+3=123", a: false },
    { q: "1x2=12", a: false }];

var questionsOptionsDos= [
    { q: "asdfgh = asdfi", a: false },
    { q: "asdfgh = asdfgh", a: true },
    { q: "asdfgh = aSdfgh", a: false }];
        
var questionsOptionsTres= [
    { q: "x+1=5; x=6 ", a: false },
    { q: "(x-2)5=25; x=5 ", a: false },
    { q: "2(x-2)/2=2; x=4 ", a: true }];    

var startQuizButton = document.createElement('button');
startQuizButton.textContent= 'click here to begin quiz';
startQuizButton.addEventListener('click',countdownTimer);
document.body.appendChild(startQuizButton);

function countdownTimer(){
    var decreaseTime = setInterval(function(){
        if(timer > 0){
            timer--;
            quizTimerUpdate.textContent=timer;
        }else{
            quizTimerUpdate.textContent='Time is up!';
            clearInterval(decreaseTime);
        };
    },1000);
};
