//Define the Trivia Bank
//What does it contain?
//A question
//Options
//Correct Answer
//User Answer
//Correct?
var triviaBank = [{
    question: "What is commonly believe to be The Black Widow's previous occupation before becoming a Russian spy?",
    options: ["A ballerina", "A military pilot", "A thief", "An athlete"],
    correctAnswer: 0
}, {
    question: "Peter Parker works as a photographer for:  ",
    options: ["The Daily Planet", "The Daily Bugle", "The New York Times", "The Rolling Stone"],
    correctAnswer: 1
}, {
    question: "Iceman is a member of which team?",
    options: ["The X-Men", "The Fantastic Four", "The Invaders", "The Liberators"],
    correctAnswer: 0
}, {
    question: "Captain America was frozen in which war?",
    options: ["World War I", " World War II", " Cold War", "American Civil War"],
    correctAnswer: 1
}, {
    question: "The vampire hunter Blade is a:  ",
    options: ["Mutant", "Human", "Vampire", "Half vampire"],
    correctAnswer: 3
}, {
    question: "Dr. Doom went to the same college as:  ",
    options: ["Tony Stark", " Peter Parker", "Reed Richards", "Bruce Banner"],
    correctAnswer: 2
}, {
    question: "What vehicle is the Avengers primary mode of transport?",
    options: ["A bus", "The Quinjet", "The Blackbird", "The Blackhawk"],
    correctAnswer: 1

}, {
    question: "What is the weapon Thor used in Infinity War?",
    options: ["Stormbreaker", "Mjolnir", "Thunder", "Rifle"],
    correctAnswer: 0

}, {
    question: "Which Infinity Stone created vision?",
    options: ["Soul Stone", "Time Stone", "Mind Stone", "Space Stone"],
    correctAnswer: 2
}];
//define global variables
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelection;
var correctGifArray = ['blackwidow.gif', 'dailybugle.gif','xmen.gif', 'captainamerica.jpg', 'blade.gif', 'mrfantastic.gif', 'quinjet2.gif', 'stormbreaker.gif', 'mindstone.gif'];


//start button on click function
$('#startBtn').on('click', function () {
    //hide the start button
    $(this).hide();
    //start new game
    newGame();
});

$('#startOverBtn').on('click', function(){
  //hide the start over button
  $(this).hide();
  //start new game
  newGame();
});


//New Game Function
function newGame() {
    //empty DOM elements
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    //Initialize counters
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();
    answered = true;

    //Questions & Options
    $('.question').html('<h2>' + triviaBank[currentQuestion].question + '</h2>');
    //4 is the number of options...
    for (var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaBank[currentQuestion].options[i]);
       //index number of corresponding data 
        choices.attr({
            'data-index': i
        });
        choices.addClass('thisChoice');
        $('.options').append(choices);
    }
    countdown();
    //on click to pause the time and call answerPage function
    $('.thisChoice').on('click', function () {
        userSelection = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 15;
    $('#timeRemaining').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $('#timeRemaining').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage() {
    $('#currentQuestion').empty();
    $('.thisChoice').empty();
    $('.question').empty();

    var rightAnswerText = triviaBank[currentQuestion].options[triviaBank[currentQuestion].correctAnswer];
    var rightAnswerIndex = triviaBank[currentQuestion].correctAnswer;
    //displays the gif
    console.log( "assets/images/" + correctGifArray[currentQuestion]);
    $('#gif').html('<img src = "assets/images/'+ correctGifArray[currentQuestion] +'" width = "400px">');

    if ((userSelection == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;

        $('#message').html("Yes!  Your answer is correct!");
    } else if ((userSelection != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $('#message').html("No.  Your answer is incorrect!");
        $('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
    } else {
        unanswered++;
        $('#message').html("Sorry!  You Ran Out Of Time!");
        $('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
        answered = true;
    }
    //end game indicator....we've gone through the array (i screwed this up...remember 0 index ugh)
    if (currentQuestion == (triviaBank.length - 1)) {
        setTimeout(summary, 3000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
    }
}


function summary() {
    $('#correctedAnswer').empty();
    $('#gif').empty();
    $('#message').empty();
    $('#timeRemaining').empty();



    $('#finalMessage').html("Let's see how much of a Marvel fan you are...");
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Play Again?');
}