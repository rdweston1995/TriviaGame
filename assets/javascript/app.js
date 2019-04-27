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

console.log(q[1].q);

//Initially the page will only have the game title and a button for starting the game
//$("#start").on("click", startPage());
$("#start").on("click", function(){
    $("button").remove();
    startPage();
    
    //startPage(); WORKING

}); 
    //After the start button is pressed make the rest of the page visible and ask the first question

//Called after the start button is pressed and makes the question elements visible and hides start button
function startPage(){
    if(position >= 6){
        scoreScreen();
    } else {
        //Clearing the page
        $(".container").empty();
        //Thirty second itmer
        time = 30;

        var timer = document.createElement("div");
        timer.setAttribute("id", "timer");
        thirty = setInterval(countThirty, 1000);

        var question = document.createElement("div");
        writeQuestion(question, position);
        question.setAttribute("id", "question");

        var choices = document.createElement("div");
        writeChoices(choices, position);
        choices.setAttribute("class", "choices");

        //Adding the new divs to the container div
        $(".container").append(timer, question, choices);
        onClick();
        
    }
    
        
}

//Function to write a question to the page and list all the choices in an ordered list
function writeQuestion(question, position){
    question.innerHTML = q[position].q;
}

//Function to write the choices for the current question
function writeChoices(choices, position){
    //Give them the same ID and set the values to what they say
    var list = document.createElement("ol");
    list.setAttribute("type", "A");
    //For loop to run through the objects options array to write them to the page
    for (var i = 0; i < q[position].o.length; i++){
        var listChoice = document.createElement("li");
        listChoice.setAttribute("class", "listChoices");
        $(".listChoices").attr("value", q[position].o[i]);
        //listChoice.setAttribute("value", q[position].o[i]);

        listChoice.innerHTML = i + 1 + ". " + q[position].o[i];
        list.append(listChoice);
    }
    choices.append(list);
}
//Timer function to display to the page and to restart the page when the timer gets to 0
function countThirty(){
    if(time === 0){
        clearInterval(thirty);
        showAnswer();
    }
    $("#timer").text(time);
    time--;
}

function countTen(){
    if(time === 0){
        //Incrementing the position
        position++;

        clearInterval(ten);
        startPage();
    }
    $("#timer").text(time);
    time--;
}
    //Timer 30 seconds for the time to choose an answer
    //Timer 5 seconds for after a answer is picked and displaying the image and fun facts and if they got it right or not

//On click functions for starting the game and resetting the game
    //Start button will make its self hidden and make all the other elements on the page visible
    //Resetting function will make its self hidden and reset all the variables and the page back to its original state

//On click function for selecting the answer
function onClick(){
    $(".listChoices").on("click", function(){
        console.log($(this).val());
        alert($(this).val());
    });
}
    //When a element in the ordered list of the choices is clicked on

//Function for when the correct answer is selected or time runs out
function showAnswer(){
    $(".container").empty();
    time = 10;

    var timer = document.createElement("div");
    timer.setAttribute("id", "timer");
    ten = setInterval(countTen, 1000);

    var answer = document.createElement("div");
    answer.setAttribute("id", "answer");
    console.log(q[position].a);
    answer.innerHTML = q[position].a;

    $(".container").append(answer);
}   
    //Display an image and maybe some fun facts about whatever the fuck

//After all the questions have been asked display the amount the user got right and wrong
function scoreScreen(){
    $(".container").empty();
    $(".container").text("test");

    //Show which questions that they got wrong
    //Button made visible to reset the game without a page reset
}
    


});