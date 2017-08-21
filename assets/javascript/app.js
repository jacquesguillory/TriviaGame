$(document).ready(function(){

// for the clock
var intervalID;

// // answer variable
// var input;

// object of questions and answers
var qna =[
	{
		question: "[The Dark Knight Rises] Who was not listed on the flightplan filed with the agency?",
		options: ["Shmi Maimen", "Dr. Pavelier", "Juan Ovyu", "Bruce Wayne"],
		answer: 4
		
	},

	{
		question: "[The Dark Knight] Which actor played the role of The Joker?",
		options: ["Christian Bale", "Heath Ledger", "Jack Nicholson", "Phil Mickelson"],
		answer: 2
		
	},

	//WHEN I ADD ANOTHER PROPERTY TO THIS OBJECT IT BREAKS AND I DO NOT KNOW WHY!!!!!!
	// {
	// 	question: "[The Dark Knight] Alfred saw a boy playing with a ruby the size of a _____?",
	// 	options: ["Watermelon", "Big Guy", "Tangerine", "Pebble"],
	// 	answer: 3
		
	// }

];

console.log (qna);

// countdown timer
var countdown = 30;

// question counter
var questionCounter = 0;

// counting number of right and wrong guesses
var right = 0;

var wrong = 0;

// function to call for displaying new questions and answers
function displayQuestion() {
	console.log(questionCounter);
	// conditions for game over
	if (questionCounter >= 2){
			$("#countdown-area").html("<p> Game Over </p>");
			$("#question-area").html("<p>Correct Answers: " + right + "</p>");
			$("#answer-area").html("<p>Incorrect Answers: " + wrong + "</p>");
			return;
		}

	countdown = 30;
	// display and coundown timer
	$("#countdown-area").html("<h2>" + countdown + "</h2>");
	run();
	//display question
	$("#question-area").html("<h3>" + qna[questionCounter].question + "</h3>");

	//display answers
	$("#answer-one").html("<h4>" + qna[questionCounter].options[0] + "</h4>");
	$("#answer-two").html("<h4>" + qna[questionCounter].options[1] + "</h4>");
	$("#answer-three").html("<h4>" + qna[questionCounter].options[2] + "</h4>");
	$("#answer-four").html("<h4>" + qna[questionCounter].options[3] + "</h4>");


console.log(qna[questionCounter].answer);



// clicking the answers and checking for right or wrong
$("#answer-one").on("click", function(){
			var input = 1;
			
			console.log(qna[questionCounter].answer);
			if (input === qna[questionCounter].answer){
				correct();
			}
			else {
				incorrect();
			}
})


$("#answer-two").on("click", function(){
			var input = 2;
			if (input === qna[questionCounter].answer){
				correct();
			}
			else {
				incorrect();
			}
})

$("#answer-three").on("click", function(){
			var input = 3;
			if (input === qna[questionCounter].answer){
				correct();
			}
			else {
				incorrect();
			}
})


$("#answer-four").on("click", function(){
			var input = 4;
						console.log(qna[questionCounter].answer);

			if (input === qna[questionCounter].answer){
				correct();
			}
			else {
				incorrect();
			}
})





	

}




// when start game button clicked
$("#start-game").on("click", function(){
	
	// hide start button
	$(this).hide();

	// display new q and a's
	displayQuestion();
})






// if the clock runs out
function timeUp() {
	questionCounter++;
	$("#countdown-area").html("<p> TIME'S UP </p>");
	setTimeout(displayQuestion, 3000);
};


// correct answer guessed
function correct() {
	questionCounter++;
	stop();
	right++;
	$("#countdown-area").html("<p> CORRECT </p>");
	setTimeout(displayQuestion, 3000);
};

//incorrect answer guessed
function incorrect() {
	questionCounter++;
	
	stop();
	wrong++;
	$("#countdown-area").html("<p> INCORRECT </p>");
	setTimeout(displayQuestion, 3000);
};

// start the clock
function run() {
      intervalId = setInterval(decrement, 1000);
};
// run the clock
 function decrement() {

      countdown--;

      $("#countdown-area").html("<h2>" + countdown + "</h2>");

      if (countdown === 0) {
      	$("#countdown-area").append("<p> TIME'S UP </p>");
      	wrong++;
        stop();
        setTimeout(displayQuestion, 3000);

      }
    };
// stop clock at 0
function stop() {

      clearInterval(intervalId);
}


})









