$(document).ready(function() {
//Variables
    //Objects for the questions and the right answers
        //Questions will be asked randomly and the order the choices are will be random
    //int's for questions answered correctly and incorrectly
    //String array for remembering which questions were answered incorrectly

var q = [
    {
        q: "What planet in our solar system has the longest day?",
        o: ["Earth", "Saturn", "Mercury", "Venus"],
        a: "Venus",
    },
    {
        q: "How many moons are there in the entire solar system?",
        o: [160, 100, 181, 200],
        a: 181,
    },
    {
        q: "Jupiter has the most moons with there being: ",
        o: [60, 32, 67, 5],
        a: 67,
    },
    {
        q: "How far away is the Moon from Earth?",
        o: ["238,900 Miles", "201,500 Miles", "250,720 Miles", "189,200 Miles"],
        a: "238,900 Miles",
    },
    {
        q: "What was the first planet that we laned a rover on?",
        o: ["Venus", "Mars", "Mercury", "Saturn"],
        a: "Venus"
    },
    {
        q: "Who was the first man in space?",
        o: ["Yuri Gagarin", "Alan Bartlett Shepard Jr.", "Neil Armstrong", "Buzz Aldrin"],
        a: "Yuri Gagarin"
    },
];

var time = 30;
var thirty;
var ten;
var position = 0;
var correct = 0, incorrect = 0;

//console.log(q[1].q);

//Initially the page will only have the game title and a button for starting the game

$("#start").on("click", function(){
    $("button").remove();
    startPage();   
});
    
//Called after the start button is pressed and makes the question elements visible and hides start button
function startPage(){
    if(position >= 6){
        scoreScreen();
    } else {
        //Clearing the page
        $(".container").empty();
        //Thirty second itmer
        time = 30;

        $(".container").append("<div class='timer'>30</div>");
        thirty = setInterval(countThirty, 1000);

        $(".container").append("<div class='question'></div>");
        writeQuestion(position);

        $(".container").append("<div class='choices' value='choices'></div>")
        writeChoices(position); 
    }
}

//Function to write a question to the page and list all the choices in an ordered list
function writeQuestion( position){
    $(".question").text(q[position].q);
}

//Function to write the choices for the current question
function writeChoices(position){
    //Give them the same ID and set the values to what they say  
    var list = $("<ol class='listChoices'></ol>");
    //For loop to run through the objects options array to write them to the page
    for (var i = 0; i < q[position].o.length; i++){
        var Choice = $("<li>" + q[position].o[i] + "</li>");

        list.append(Choice);   
    }   

    $(".choices").append(list);
    
    onClick();
}
//Timer function to display to the page and to restart the page when the timer gets to 0
function countThirty(){
    if(time === 0){
        clearInterval(thirty);
        showAnswer();
    }
    $(".timer").text(time);
    time--;   
}

//After user guesses run this timer for inbetween questions
function countTen(){
    if(time === 0){
        //Incrementing the position
        position++;

        clearInterval(ten);
        startPage();
    }
    $(".timer").text(time);
    time--;
}
    
//On click functions for starting the game and resetting the game
    //Start button will make its self hidden and make all the other elements on the page visible
    //Resetting function will make its self hidden and reset all the variables and the page back to its original state

//On click function for selecting the answer
function onClick() {    
    $("li").on('click', function(){
        var userGuess = $(this).text();

        clearInterval(thirty);
        showAnswer(userGuess);
    });
}

//Function for when the correct answer is selected or time runs out
function showAnswer(userGuess){
    $(".container").empty();
    time = 1;

    $(".container").append("<div class='timer'>10</div>");
    ten = setInterval(countTen, 1000);
    console.log(userGuess + " = " + q[position].a); 
    if(userGuess === q[position].a){
        $(".container").append($("<div class='answer'>Correct!</div>"));
        correct++;
        console.log("correct = " + correct);
    }else{
        $(".container").append($("<div class='answer'>Incorrect</div>"));
        incorrect++;
        console.log("incorrect = " + incorrect);
    }
}   
    //Display an image and maybe some fun facts about whatever the fuck

//After all the questions have been asked display the amount the user got right and wrong
function scoreScreen(){
    //Show which questions that they got wrong
    //Button made visible to reset the game without a page reset
    $(".container").empty();

    $(".container").append($("<div class='score'></div>"));
    $(".score").text("Correct = " + correct + "<br>" + "Incorrect = " + incorrect);

    $(".container").append($("<button class='reset'>Reset</button>"))

    $(".reset").on("click", function(){
        position = 0, correct = 0, incorrect = 0;
        startPage();
    });
}
});