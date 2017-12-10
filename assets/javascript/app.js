

const questionSet = [
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

const quizContainer = $("#quiz");
const submitButton = $("#submit");
const resultsContainer = $("#results");
console.log(quizContainer);

function quizInitiate(event) {
	// event.preventDefault();
	const output = []; 
	questionSet.forEach(
		(currentQuestion, questionNumber) => {
			const answers = [];
			for (letter in currentQuestion.answers){
				// answers.push(
				// 	'<label><input type="radio" name="question${questionNumber}" value ="${letter}">${letter}:${currentQuestion.answers[letter]}</label>'
				// );
				answers.push(
					'<label><input type="radio" name="question' + questionNumber + '" value ="' + letter + '">' + letter + ':' + currentQuestion.answers[letter] + '</label>'
				);				
			}

			output.push(
				'<div class="question">'+ currentQuestion.question + '</div><div class="answers">' + answers.join('') + '</div>'	
			);
		}	
	);

	// quizContainer.innerHTML = output.join("");
	// $("#quiz").html(output.join(""));
	document.getElementById("quiz").innerHTML = output.join("");
	console.log("output.join", output.join(""));
}

function displayResults(event) {
	// event.preventDefault();
	console.log("hello");

}

quizInitiate();
// submitButton.addEventListener("click", displayResults);
$("#submit").on("click",displayResults());


console.log(questionSet);