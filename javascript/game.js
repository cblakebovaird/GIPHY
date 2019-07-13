// Creating a variable to hold the array 
var animals = [
    "Bear", "Dolphin", "Cat", "Dog", "Bird", "Whale", "Unicorn", "Swan", "Wolf", "Parrot"];
//  creating a function to re-render the HTML to display the appropriate content
function displayAnimals(){
    var animal = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=rN0JfRZ29E6XebrinGCawK9xEnwbv1bx" + animal;

    // Creating an AJAX call for the specific animal being clicked
    $.ajax({
        url : queryUrl,
        method: "GET"
    }).then(function(response) {

    });

}

// function to display buttons
function displayButtons () {
    // deletes buttons before adding new buttons so that it doesnt repeat buttons
    $("#buttons-view").empty();

    // Looping through the topics array
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal-btn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
        console.log(animals[i]);
    }
}
$("#add-animal").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();

    // Write code to grab the text the user types into the input field
    // Write code to add the new animal into the movies array
    var newAnimal = $("#animal-input").val();
    animals.push(newAnimal);
    console.log(animals);

    // Clears the text field after creating the new button
    $("#animal-input").val("");


    // The renderButtons function is called, rendering the list of animal buttons
    displayButtons();
  });
// console.log(topics);
displayButtons();