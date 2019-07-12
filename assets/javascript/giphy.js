// <!-- ******************** VARIABLES **************************** -->
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

function displayAnimals(){
    var topic = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=rN0JfRZ29E6XebrinGCawK9xEnwbv1bx" + topic;
    
}