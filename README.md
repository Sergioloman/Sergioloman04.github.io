# Javascript Basics Quiz

Hello there,

This quiz is a one page application that uses .setAttribute/.getAttribute metehods to cleverly display different screens as the user moves through the quiz.

We do it by giving certain areas the 'display: hide' attribute on CSS and linking it to our DOM using JS. 

# Functionality

Once the Quiz has started. The timer is set to 5 seconds per question. When the user selects a question, it is awared with +5 seconds added to their timer if Correct ,or -5 seconds deducted from their timer if Incorrect.

Users are able to see their score at the end of the game and compare it to their previous one.

# Tech

We are mostly using DOM methods here, as we are focused on functionality rather than looks.

## Screens

Our HTML is divided into sections:

**Start screen** = holds the start button and sets timer countdown.

**Quiz screen** = displays all the questions with the aid of the **OptionClick** function, which displays the correct andswer and adds time to the timer.

**Timer screen** =  this the subsection that holds the timer display. Its value acts as a score and its displayed on the End Screen.
**End screen** = displays the final score of the player and promts them to submit their innitials. The submit button saves those innitials and score to localStorage.
**Score screen** = Here we display the users past score. User has the option to start the game again or clear the localStorage and returning to the main screen,
__________________________


I hope you enjoy the quiz, and find the code easy to follow.

Best

Sergioloman

__________________________

