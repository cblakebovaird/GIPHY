// Creating a variable to hold the array 
var topics = [
    "Bear",
    "Dolphin",
    "Cat",
    "Dog",
    "Bird",
    "Whale",
    "Unicorn",
    "Swan",
    "Wolf",
    "Parrot"
];
//  creating a function to re-render the HTML to display the appropriate content
function displayAnimals(){
    var topic = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=rN0JfRZ29E6XebrinGCawK9xEnwbv1bx" + topic;

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
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}