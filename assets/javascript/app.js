$(document).ready(function() {
//Variables
    //Objects for the questions and the right answers
        //Questions will be asked randomly and the order the choices are will be random
    //int's for questions answered correctly and incorrectly
    //String array for remembering which questions were answered incorrectly

//Initially the page will only have the game title and a button for starting the game
//$("#start").on("click", startPage());
$("#start").on("click", function(){
    $("div:hidden").show("fast");
}); 
    //After the start button is pressed make the rest of the page visible and ask the first question

//Called after the start button is pressed and makes the question elements visible and hides start button
function startPage(){
    /*
    $("#timer").css("visibility", "visible");
    $("#question").css("visibility", "visible");
    $("#options").css("visibiltiy", "visible");
    $("#start").css("visibility", "hidden");
    */

    $("#time").show(100);
    $("#question").show(100);
    $("#options").show(100);
    $("#start").hidden(100);
}

//Function to write a question to the page and list all the choices in an ordered list

//Set Timers
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