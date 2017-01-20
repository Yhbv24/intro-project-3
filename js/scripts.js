//*****BACK-END*****//

var numbersArray = [];

var numCheck = function(userInput) {
  if (!userInput || userInput <= 0) {
    alert("Please enter a valid number in the field.");
  }
};

var returnNumbers = function(userInput) {
  for (var i = 0; i < userInput; i++) {
    numbersArray.push([i + 1]);
  }
};

//*****FRONT-END*****//

$(function() {
  $("#number_input").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var userInput = parseInt($("#user_input").val());

    numCheck(userInput);
    returnNumbers(userInput);

    $("#answer_section").show();
    $("ul").append("<li>" + numbersArray + "</li>");
  });

  $("#reset_button").click(function() {
    $("#answer_section").hide();
  });
});
