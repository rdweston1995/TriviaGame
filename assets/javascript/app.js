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

var alreadyAsked = [];

console.log(q[1].q);

//Initially the page will only have the game title and a button for starting the game
//$("#start").on("click", startPage());
$("#start").on("click", function(){
    $("button").remove();
    startPage();

}); 
    //After the start button is pressed make the rest of the page visible and ask the first question

//Called after the start button is pressed and makes the question elements visible and hides start button
function startPage(){
    //Random Number to select what question will be asked
    var qNum = Math.floor(Math.random() * 6);
    
    alreadyAsked.push(qNum);
    
    var timer = document.createElement("div");
    //timer.innerHTML = "Test";
    setTimer(timer);
    timer.setAttribute("id", "timer");

    
    var question = document.createElement("div");
    writeQuestion(question, qNum);
    question.setAttribute("id", "question");

    var choices = document.createElement("div");
    //choices.innerHTML = "Test";
    writeChoices(choices, qNum);
    choices.setAttribute("id", "choices");

    $(".container").append(timer, question, choices);
    
}

//Function to write a question to the page and list all the choices in an ordered list
function writeQuestion(question, qNum){
    //console.log(qNum);
    alreadyAsked.push(qNum);
    //Writing the random question to the question div
    question.innerHTML = q[qNum].q;
}

function writeChoices(choices, qNum){
    //Give them the same ID and set the values to what they say
    var list = document.createElement("ol");
    list.setAttribute("type", "A");
    for (var i = 0; i < q[qNum].o.length; i++){
        var listChoice = document.createElement("li");
        listChoice.setAttribute("id", "listChoices");

        listChoice.innerHTML = i + 1 + ". " + q[qNum].o[i];
        list.append(listChoice);
    }
    choices.append(list);
}
//Set Timers
function setTimer(timer){
    thirty = setTimeout(1000 * 100);
    
    timer.innerHTML = thirty;
}
    //Timer 30 seconds for the time to choose an answer
    //Timer 5 seconds for after a answer is picked and displaying the image and fun facts and if they got it right or not

//On click functions for starting the game and resetting the game
    //Start button will make its self hidden and make all the other elements on the page visible
    //Resetting function will make its self hidden and reset all the variables and the page back to its original state

//On click function for selecting the answer
    //When a element in the ordered list of the choices is clicked on

//Function for when the correct answer is selected
    //Display an image and maybe some fun facts about whatever the fuck

//After all the questions have been asked display the amount the user got right and wrong
    //Show which questions that they got wrong
//Button made visible to reset the game without a page reset

});