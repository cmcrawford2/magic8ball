$(document).ready(function(){
 
// Object declaration, data, method.
     
var magic8ball = {};
magic8ball.answers = ["Obviously not", "Of Course", "Not in a million years", "Looks Promising", "It depends", "Only if you really believe", "Doubtful", "For Sure"];
    //console.log(magic8ball.answers);
magic8ball.prediction = function(question) {
	var index = Math.floor(this.answers.length * Math.random());
	$("#answer").text(this.answers[index]);
};

// Button function

var onClick = function() {
	$("#answer").hide();
	// Show the 8 side
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	// Wait before showing prompt
	setTimeout(
		function() {
			var question = prompt("ASK A YES/NO QUESTION!");
			magic8ball.prediction(question);
		}, 500);
	// Show the back
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
};

// Code

$("#answer").hide();
$("#questionButton").click( onClick );
    
});