

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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		var output = [];
		var answers;

		for(var i = 0; i<questions.length; i++){
			answers = [];

			for(letter in questions[i].answers){
				answers.push(
					'<label>'
						+ '<input type="radio" name="question>' + i + '" value="' + letter + '">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer) {
		var answerContainers = quizContainer.querySelectorAll('.answers');

		var userAnswer = '';
		var numCorrect = 0; 

		for (var i = 0; i<questions.length; i++){
			// this is the line that is broken because console.log comes up undefined
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			console.log(userAnswer);
			if(userAnswer === questions[i].correctAnswer) {
				numCorrect++;
				answerContainers[i].style.color = 'green';
			} else {
				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var countdownFace = 4; 
function decreaseCountdown(event) {
	// event.preventDefault(); 
	if(countdownFace>0){
		setInterval(function(){
			countdownFace = countdownFace - 1;
			$("#countdown").html(countdownFace);
		},
	1000);
	} else {
		countdownFace = 0;
		clearInterval();
	}
}



// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
$("#newQuiz").on("click", function(event){
	event.preventDefault();
	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
	decreaseCountdown();
})