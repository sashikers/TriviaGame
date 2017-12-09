var questionSet = [
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
		}
		correctAnswer: "a",
	}
]

var quizContainer = $("#quiz");
// var quizContainer = document.getElementById('quiz');
var submitButton = $("#submit");
var resultsContainer = $("#results");
console.log(quizContainer);

function quizInitiate() {}

function displayResults() {
	console.log("hello");
}

quizInitiate();
// submitButton.addEventListener("click", displayResults);
$("#submit").on("click",displayResults());


console.log(questionSet);