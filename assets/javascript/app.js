$(document).ready(function() {
//Objects for the questions, choices, and right answers
var q = [
    {
        q: "What planet in our solar system has the longest day?",
        o: ["Earth", "Saturn", "Mercury", "Venus"],
        a: "Venus",
        i: "A day on Venus last's 5,832 hours",
        src: "assets/Images/planetVenus.jpg"
    },
    {
        q: "How many moons are there in the entire solar system?",
        o: ["167", "103", "181", "205"],
        a: "181",
        i: "Both Venus and Mercury don't have moons. Earth is the only planet to have one moon",
        src: "assets/Images/earthMoon.jpg"
    },
    {
        q: "Jupiter has the most moons with: ",
        o: ["60", "32", "67", "5"],
        a: "67",
        i: "Jupiters moon Europa has the smoothest surface of any known solid object in the Solar System. The cause of the smooth surface is " 
            + " thought to be of a water ocean beneath the surface. Making the moon to be the best chance of extraterrestial life in the Solar System.",
        src: "assets/Images/jupiter.jpg"
    },
    {
        q: "How far away is the Moon from Earth?",
        o: ["238,900 Miles", "201,500 Miles", "250,720 Miles", "189,200 Miles"],
        a: "238,900 Miles",
        i: "You could fit every planet in our Solar System between the Earth and the Moon and have room to spare.",
        src: "assets/Images/moon.jpg"
    },
    {
        q: "What was the first planet that we laned a probe on?",
        o: ["Mars", "Venus", "Mercury", "Saturn"],
        a: "Venus",
        i: "The USSR's Venera 3 impacted on the surface of Venus on March 1st, 1966. It wasn't until the Venera 7 probe in 1970 that they landed on the surface " 
            + " and transmitted from the surface for 23 minutes before the probe was crushed from the atmospheric pressure. ",
        src: "assets/Images/venus.jpg"
    },
    {
        q: "Who was the first man in space?",
        o: ["Yuri Gagarin", "Alan Bartlett Shepard Jr.", "Neil Armstrong", "Buzz Aldrin"],
        a: "Yuri Gagarin",
        i: "On April 12th, 1961 Yuri completed on orbit of the Earth. ",
        src: "assets/Images/yuri.jpg"
    },
    {
        q: "What space agenecy was the first to launch and land a orbital rocket",
        o: ["NASA", "SpaceX", "Roscosmos (Russia)", "ESA (Europe)"],
        a: "SpaceX",
        i: "December 22nd, 2015 SpaceX landed orbital rocket at Cape Canaveral.",
        src: "assets/Images/spaceX.jpg"
    },
];

var time = 30;
var thirty;
var ten;
//Position in the array of objects to be incremented after a question has been asked
var position = 0;
//int's for questions answered correctly and incorrectly
var correct = 0, incorrect = 0;

//Initially the page will only have the game title and a button for starting the game

$("#start").on("click", function(){
    $("button").remove();
    startPage();   
});
    
//Called after the start button is pressed and makes the question elements visible and hides start button
function startPage(){
    if(position >= 7){
        scoreScreen();
    } else {
        //Clearing the page
        $(".container").empty();
        //Thirty second itmer
        time = 30;

        $(".container").append("<div class='timer'>Time Remaining: 30s</div>");
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
    var list = $("<ul class='listChoices list-group'></ul>");
    //For loop to run through the objects options array to write them to the page
    for (var i = 0; i < q[position].o.length; i++){
        var Choice = $("<li class='list-group-item'>" + q[position].o[i] + "</li>");

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
    $(".timer").text("Time Remaining: " + time + "s");
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
    $(".timer").text("Time till next question: " + time + "s");
    time--;
}
    
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
    time = 10;

    $(".container").append("<div class='timer'>Time till next question: 10s</div>");
    ten = setInterval(countTen, 1000);
    //console.log(userGuess + " = " + q[position].a); 
    if(userGuess === q[position].a){
        $(".container").append($("<div class='answer'>Correct!</div>"));
        correct++;
        console.log("correct = " + correct);
    }else{
        $(".container").append($("<div class='answer'>Incorrect</div>"));
        $(".container").append($("<div class='answer'>Correct answer was " + q[position].a + "</div>"));
        incorrect++;
        console.log("incorrect = " + incorrect);
    }
    $(".container").append($("<div class='fact'>" + q[position].i + "</div>"));
    $(".container").append($("<img src=" + q[position].src + ">"));
}   
    //Display an image and maybe some fun facts about whatever the fuck

//After all the questions have been asked display the amount the user got right and wrong
function scoreScreen(){
    //Show which questions that they got wrong
    //Button made visible to reset the game without a page reset
    $(".container").empty();

    $(".container").append($("<div class='score'></div>"));

    $(".score").append($("<div>Correct = " + correct + "</div>"));
    $(".score").append($("<div>Incorrect = " + incorrect + "</div>"));
    $(".container").append($("<button class='reset btn btn-dark'>Reset</button>"))
    
    $(".reset").on("click", function(){
        position = 0, correct = 0, incorrect = 0;
        startPage();
    });
}
});