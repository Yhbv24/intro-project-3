//*****BACK-END*****//

var numCheck = function(userInput) {
  if (!userInput || userInput <= 0) {
    alert("Please enter a valid number in the field.");
  }
};

//*****FRONT-END*****//

$(function() {
  $("#number_input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#user_input").val());

    numCheck(userInput);
  });
});
