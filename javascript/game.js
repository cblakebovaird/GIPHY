
     // Creating a variable to hold the array 
var animals = [
    "Bear", "Dolphin", "Cat", "Dog", "Bird", "Whale", "Unicorn", "Swan", "Wolf", "Parrot", "Lemur", "Bat", "Elephant", "Panda", "Fox"];
//  creating a function to re-render the HTML to display the appropriate content
function displayAnimals(){
    var animal = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=rN0JfRZ29E6XebrinGCawK9xEnwbv1bx&q=" + animal + "&limit=10&offset=0&lang=en";

    // Creating an AJAX call for the specific animal being clicked
    $.ajax({
        url : queryUrl,
        method: "GET"
    }).then(function(response) {
        $(".animal-output").remove();
                
                  console.log(response);
                  for (var i = 0; i < response.data.length; i++){
                      var gifDiv = $("<div>").addClass("animal-output");
                      $(".container").append(gifDiv);
                

                    var rating = response.data[i].rating.toUpperCase();

                    var pOne = $("<h3>").text("Rating: " + rating);
                    gifDiv.append(pOne);
                    // Retrieve Static Image from the API
                    // var staticImage = response.data[i].images.fixed_height_small_still.url;
                    // Retreive Animated Image from the API
                   var animateImage = response.data[i].images.fixed_height_small.url;
                    // Create a div to show the gifs
                    var showImage = $("<img>");
                    
                    gifDiv.append(pOne);
                    gifDiv.append(showImage);

                  console.log(response.data[i].rating);

                  showImage.attr("src", animateImage);
                  showImage.addClass("gif");
                  // showImage.attr("data-state", "still");
                  // showImage.attr("data-still", staticImage);
                  // showImage.attr("data-animate", animateImage);

                   }
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
$(document).on("click", ".animal-btn", displayAnimals);

displayButtons();

$(document).on("click", ".gif", pausePlayGifs);
// when trying to get the pictures to animate, use booleans
 function pausePlayGifs() {
     
//    maybe try creating a new function with ajax call and calling it here when clicked

      var state = $(this).attr("data-state");
      var animate = response.data[i].images.fixed_height_small.url;
      var still = response.data[i].images.fixed_height_small_still.url;
      
      if (state === "still") {
        $(this).attr("src", $(this).attr(animate));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr(still));
        $(this).attr("data-state", "still");
      }
      
    }

    displayButtons();
  



 