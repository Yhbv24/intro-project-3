//*****BACK-END*****

var numbersArray = [];

var numCheck = function(userInput) { // Checks whether the user enters a number, and if so, whether it's above 0
  if (!userInput || userInput <= 0) {
    alert("Please enter a valid number in the field.");
  }
};

var returnNumbers = function(userInput) { // Adds each number up to what the user entered into an array, and shows output section
  for (var i = 0; i < userInput; i++) {
    numbersArray.push([i + 1]);
    $("#answer_section").show();
  }
};

//*****FRONT-END*****

$(function() {
  $("#number_input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#user_input").val());

    numCheck(userInput);
    returnNumbers(userInput);

    numbersArray.forEach(function(number) { // Appends each number in the array as individual list items
      $("ul").append("<li>" + number + "</li>");
    });
  });

  $("#reset_button").click(function() { // Refreshes page when the user clicks the reset button
    location.reload();
  });
});
