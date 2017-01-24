//*****BACK-END*****

var userInputCheck = function(userNumberInput) { // Checks whether the user enters a number, and if so, whether it's above 0
  if (!userNumberInput || userNumberInput <= 0) {
    alert("Please enter a valid number in the field.");
  }
};

var returnNumbers = function(userNumberInput) { // Adds each number up to and including what the user entered into an array, and shows output section
  var numbers = [];

  for (var i = 0; i < userNumberInput; i++) {
    numbers.push([i + 1]);
    $("#answer_section").show();
  }

  numbers.forEach(function(number) { // Runs through numbersArray to determine which return special strings
    if (number % 15 === 0) { // If number is divisible by fifteen, return "ping-pong"
      number = "ping-pong"
    } else if (number % 3 === 0) { // If number is divisible by three, return "ping"
      number = "ping"
    } else if (number % 5 === 0) { // If number is divisible by five, return "pong"
      number = "pong"
    }

    $("ul").append("<li>" + number + "</li>");
    $("#answer").text(userNumberInput);
  });
};

//*****FRONT-END*****

$(function() {
  $("#number_input").submit(function(event) {
    event.preventDefault();

    $("ul").empty();

    var userNumberInput = parseInt($("#user_input").val());

    userInputCheck(userNumberInput);
    returnNumbers(userNumberInput);
  });
});
