// set of questions
var myQuestions = [
	{
		question: "What is Earth's largest continent?",
		answers: {
			a: "Antarctica",
			b: "Africa",
			c: "Europe",
			d: "Asia",
		},
		correctAnswer: "d",
	},
	{
		question: "What razor-thin country accounts for more than half of the western coastine of South America?",
		answers: {
			a: "Bolivia",
			b: "Equador",
			c: "Peru",
			d: "Chile",
		},
		correctAnswer: "d",
	},
	{
		question: "What river runs through Baghdad?",
		answers: {
			a: "Jordan",
			b: "Tigris",
			c: "Euphrates",
			d: "Karun",
		},
		correctAnswer: "b",
	},
	{
		question: "What country has the most natural lakes?",
		answers: {
			a: "Canada",
			b: "United States",
			c: "Australia",
			d: "India",
		},
		correctAnswer: "a",
	},
	{
		question: "What is the only sea without any coasts?",
		answers: {
			a: "Sargasso Sea",
			b: "Adriatic Sea",
			c: "Celebes Sea",
			d: "Mediterranean Sea",
		},
		correctAnswer: "a",
	},
];

// grabs the DOM elements from the HTML
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// generates the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	// displays the questions
	// questions and quizContainer get passed in from the generateQuiz function
	function showQuestions(questions, quizContainer) {
		// creates an empty array for the output
		var output = [];
		var answers;

		// iterates through the questions array, and for each question...
		for(var i = 0; i<questions.length; i++){
			// creates an empty array for the answer options
			answers = [];

			// for every answer option for an individual question
			for(letter in questions[i].answers){
				// creates a radio button with the name of question number, a value of its letter, and a label of its answer, and pushes it into the answers array
				answers.push(
					'<label>'
						+ '<input type="radio" name="question' + i + '" value="' + letter + '">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// all of the individual questions and their answer arrays are pushed into the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// output is then pushed into the quizContainer
		quizContainer.innerHTML = output.join('');
	}

	// function shows the results
	function showResults(questions, quizContainer, resultsContainer) {
		// grab all the answer divs
		const answerContainers = quizContainer.querySelectorAll('.answers');

		// set up the initial constants 
		var userAnswer = '';
		var numCorrect = 0; 

		// for each question...
		for (var i = 0; i<questions.length; i++){
			// set the user answer to the value of whatever radio button is checked
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			// if the radio button matches the correct answer...
			if(userAnswer === questions[i].correctAnswer) {
				// increase the number of wins by 1
				numCorrect++;
				// change the answer color to green
				answerContainers[i].style.color = 'green';
			// and if it doesn't, change to red
			} else {
				answerContainers[i].style.color = 'maroon';
			}
		}
		// displays results to the user
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// runs function that shows the questions to the user
	showQuestions(questions, quizContainer);

	// assigning the showresults function to the submit button
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

	// sets the countdown max (first number to be shown will be 30)
	var countdownFace = 31; 
	// function that will start countdown when quiz is generated 
	function decreaseCountdown(event) {
		// sets the interval function for 1 sec
		var x = setInterval(function() {
			// decreases visibile timer by 1
			countdownFace = countdownFace - 1;
			// shows decreased time
			$("#countdown").html(countdownFace);
			// if the timer hits 0, time is up 

			if (countdownFace === 0) {
				// timer is stopped
				clearInterval(x);
				// time displays "time is up" to user
				$("#timer").html("Time's up!");
				// and results are shown regardless of completion
				showResults(questions, quizContainer, resultsContainer);
			}
		},
		1000); 
	}

	// the start of the decreasing function
	decreaseCountdown();
}

// button that will start the game
$("#newQuiz").on("click", function(event){
	// will not run by default
	event.preventDefault();
	// quiz function is called, which calls the showQuestions and decreaseCountdown functions within it
	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
})