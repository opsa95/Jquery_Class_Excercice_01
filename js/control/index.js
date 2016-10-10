/**
 * jQuery program that generates 2 divs. The first one acomplishes the function of a menu.
 * And the second one shows diferent content depending on which button you pressed.
 * There will be four buttons each one will access to a diferent function. The functions that will
 * be made are:
 *		- startApp(); This function will initialize the title div.
 *		- exMultiples(); This one prints the interface of the 1st exercise
 *		-
 *
 * @author David Oporto i Sala
 * @version 1.0
 */

/**
 *
 *
 */
$(document).ready(function() {
	$("div").hide();
	startApp();
});

/**
 *	Initial funciton, it's what will appear when started the app.
 *	Generating the content of the title div, which will provide
 *	the title of the excercice and four buttons. We'll use those
 *	buttons to execute the other functions...
 *
 *	@var {startContent} String that contains the HTML code we'll
 *																be using for the #title div.
 *	@author David Oporto i Sala
 */
function startApp() {

	$("#title").show();

	// We create all the needed interface
	var startContent = '<h2>JAVASCRIPT FIRST EXERCICES</h2>';
	startContent += '<p>by David Oporto</p></br>';
	startContent += '<button id="ex1">FA111</button>';
	startContent += '<button id="ex2">FA112</button>';
	startContent += '<button id="ex3">FA113</button>';
	startContent += '<button id="ex4">FA114</button>';

	// And print it into HTML
	$("#title").html(startContent);

	// If we press the 1st button...
	$("#ex1").click(function() {
		$("#content").hide();
		exMultiples();
	});

	// If we press the 2nd button...
	$("#ex2").click(function() {
		$("#content").hide();
		exFactorial();
	});

	// If we press the 3rd button...
	$("#ex3").click(function() {
		$("#content").hide();
		exGuess();
	});

	// If we press the 4th button...
	$("#ex4").click(function() {
		$("#content").hide();
		exCalculadora();
	});
}


/**
 *	This function will make appear the content div, changing it's content by
 *	a text saying That he will calculate all multiples of 31 inferior to 1500
 *	and adding a start button which will call another @function {calcMultiples();}
 *	It will also have a close button that will hide the div.
 *
 *	@var {multiplesContent} String that contains the HTML code we'll
 *																		be using for the #content div.
 *	@author David Oporto i Sala
 */
function exMultiples() {

	$("#content").fadeIn(500);

	// We create all the needed interface
	var multiplesContent = '<h3>MULTIPLE CALCULATOR</h3>';
	multiplesContent +=
		"<p>I will calculate all the multiples of 31 inferior to 1500</p>";
	multiplesContent += '<button id="multipleButton">Start</button>';

	// And print it into the HTML
	$("#content").html(multiplesContent);

	// When we press the Start button...
	$("#multipleButton").click(function() {
		calcMultiples();
	});

	$("#content").append('</br></br><button id="closeMultiples">Close</button>');
	$("#closeMultiples").click(function() {
		$("#content").hide();
	});

}

/**
 *	This function calculates all the multiples of 31, then prints them.
 *  Also prints the total of em and multiplies them. Then shows the results
 *	@var {res} int the result
 *	@var {count} int saves the number of multiples
 *	@var {sum} int saves the addition of numbers
 *	@var {mult} int saves the multiplied numbers
 *	@author David Oporto i Sala
 */
function calcMultiples() {
	$("#content").empty();
	$("#content").append('<h3>The multiples of 31 are: </h3></br>');
	var res = 31;
	var count = 0;
	var sum = 0;
	var mult = 1;
	$("#content").append(res + '  ');
	do {
		sum += res;
		mult *= res;
		res += 31;
		count++;
		if (res < 1500)
			$("#content").append(res + '  ');

	} while (res < 1500);
	$("#content").append('</br></br>All the multiples together are: ' + sum);
	$("#content").append('</br></br>All the increase of all numbers: ' + mult);
	$("#content").append('</br></br><button id="closeMultiples">Close</button>');
	$("#closeMultiples").click(function() {
		$("#content").hide();
	});
}


/**
 * 2.El factorial d'un nombre enter n és una operació matemàtica que consisteix a multiplicar tots els
 * factors nx (n-1) x (n-2) x ... x 1. Així, el factorial de 5 (escrit com 5!) És igual a: 5! = 5 x 4 x 3 x 2 x 1 =
 * 120. Utilitzant l'estructura for, crear un script que calculi el factorial d'un nombre enter, el nombre es
 * demana a l'usuari.
 * @author David Oporto i Sala
 */

function exFactorial() {
	$("#content").fadeIn(500);
	// We create all the needed interface
	var factorialContent = '<h3>FACTORIAL CALCULATOR</h3>';
	factorialContent +=
		"<p>Insert a number and I will calculate it's factorial.</p>";
	factorialContent +=
		'<input type ="text" id="inputBox" placeholder="Insert a number here" />';
	factorialContent += '<button id="factorButton">Enter</button>';
	// And print it into HTML
	$("#content").html(factorialContent);
	$("#factorButton").click(function() {
		calculateFactorial();
	});
	$("#content").append('</br></br><button id="closeFactorial">Close</button>');
	$("#closeFactorial").click(function() {
		$("#content").hide();
	});

}

/**
 *
 *
 */
function calculateFactorial() {
	var insertedNum = $('#inputBox').val();
	var result = insertedNum;
	var numMemory = [];
	// Check if it's a number or not
	if (isNaN(insertedNum) || insertedNum == "") {
		$("#inputBox")
			.addClass("invalidBox");
	} else {
		// If it's a number...
		$("#inputBox")
			.removeClass("invalidBox");

		for (var i = 0; i < insertedNum; i++) {
			numMemory[i] = result - i;
		}
		result = 1;
		for (i = 0; i < insertedNum; i++) {
			result *= numMemory[i];
		}
		$("#content").empty();
		$("#content").append('<h3>FACTORIAL CALCULATOR</h3></br><p>Your result:</p>' +
			result);
		$("#content").append('</br></br><button id="closeFactorial">Close</button>');
		$("#closeFactorial").click(function() {
			$("#content").hide();
		});
	}

}


/**
 *	This function generates an input textbox and a readonly textbox. In the input
 *	textbox the user will insert a number, trying to guess a random generated number.
 *	If he succeeds, will appear a text with the number of trys. If he fails the textbox
 *	will say if the correct number is higher or lower than the inputed number.
 *
 *	@var {trys} int that counts the number of tries the player has done
 *	@var {solution} int randomly generated number, that's the number the user will
 *												need to guess in order to win the game
 *	@var {guessContent} String that contains the HTML code we'll
 *																		be using for the #content div.
 *	@author David Oporto i Sala
 */
function exGuess() {
	$("#content").fadeIn(500);

	var trys = 0;
	var solution = Math.floor((Math.random() * 1000) + 1);
	var guessContent = '<h3>GUESSING GAME</h3>';

	// We create all the needed interface
	guessContent += '<p>Try to guess the number between 1 and 1000!</p>';
	guessContent += '<input type ="text" id="infoBox" readonly/></br>';
	guessContent +=
		'<input type ="text" id="inputBox" placeholder="Insert a number here" />';
	guessContent += '<button id="guessButton">Enter</button>';

	// And print it into HTML
	$("#content").html(guessContent);
	$("#infoBox").val("Welcome!");

	// If we push the button...
	$("#guessButton").click(function() {

		//checkNumber();
		var boxVal = $("#inputBox").val();

		// First we check if the inputed number is really a number...
		if (isNaN(boxVal) || boxVal == "") {
			// Turn the textbox red
			$("#inputBox")
				.addClass("invalidBox");
			$("#infoBox").val("Please, enter a number");

		} else {
			// If it's a number check if the number is higher than 0 and lower than 1000
			if (parseInt(boxVal) < 1000 && parseInt(boxVal) > 0) {

				$("#inputBox")
					.removeClass("invalidBox");

				// Check if the inputed number is equal to the solution!
				if (parseInt(boxVal) == solution) {
					// If it's equal the program will change the div to the you won screen
					trys++;
					// HTML code we are modifying from the div...
					$("#content").empty();
					$("#content").append('<h3>GUESSING GAME</h3></br><h2>You won! </h2>');
					$("#content").append('</br> Number of tries: ' + trys);
					$("#content").append('</br></br><button id="closeGuess">Close</button>');
					// Close the div
					$("#closeGuess").click(function() {
						$("#content").hide();
					});
					// If it's higher...
				} else if (parseInt(boxVal) > solution) {
					trys++;
					$("#infoBox").val("Try a lower number.");
					// If it's lower...
				} else if (parseInt(boxVal) < solution) {
					trys++;
					$("#infoBox").val("Try a higher number.")
				}
			} else { // The number is higher than 1000 or lower than 0
				$("#inputBox")
					.addClass("invalidBox");
				$("#infoBox").val("Invalid number.");
			}
		}

	});
	// Add a close button
	$("#content").append('</br></br><button id="closeGuess">Close</button>');
	$("#closeGuess").click(function() {
		$("#content").hide();
	});


}

/**
 *	This function generates three input text boxes, a protected textbox and a "Calculate" button.
 *	Then it calls the calculateResult function which will make the checks and if everything it's correct
 *	makes the chosen operation.
 */

function exCalculadora() {
	$("#content").fadeIn(500);
	var calculatorContent = '<h3>CALCULATOR</br></h3>';

	// First number textBox
	calculatorContent += '<p>Give me the first number:</p>';
	calculatorContent += '<input type ="text" id="numberBox"/>';
	// Operation textBox ( +,-,*,/)
	calculatorContent += '<p>Which is the operation that you want to do?</p>';
	calculatorContent += '<input type ="text" id="operationBox"/>';
	// Second number textBox
	calculatorContent += '<p>Give me the second number:</p>';
	calculatorContent += '<input type ="text" id="numberBox2"/>';
	// Result textBox
	calculatorContent += '<p>Result:</p>';
	calculatorContent += '<input type ="text" id="resultBox" readonly/></br>';
	// Calculate button
	calculatorContent += '<button id="calculateButton">Calculate</button>';

	$("#content").html(calculatorContent);
	// When we push the result button...
	$("#calculateButton").click(function() {
		calculateResult();
	});
	$("#content").append('</br></br><button id="closeCalculator">Close</button>');
	$("#closeCalculator").click(function() {
		$("#content").hide();
	});
}

/**
 *	Here the program checks if the inserted inputs are numbers or the operator
 *	if it's correct it proceeds to make the operation... If it's not it turns red
 *	the textbox.
 *
 *	@author David Oporto i Sala
 */
function calculateResult() {

	var numVal = $("#numberBox").val();
	var numVal2 = $("#numberBox2").val();
	var opVal = $("#operationBox").val();
	var validNum = false;
	var validNum2 = false;
	var result = 0;

	// We have to check if the number boxes have the correct input...
	if (isNaN(numVal) || numVal == "") {
		validNum = false;
		$("#numberBox")
			.addClass("invalidBox");
		$("#resultBox").val("Wrong value");
	} else {
		validNum = true;
		$("#numberBox")
			.removeClass("invalidBox");
	}
	// Second number box check...
	if (isNaN(numVal2) || numVal2 == "") {
		validNum2 = false;
		$("#numberBox2")
			.addClass("invalidBox");
		$("#resultBox").val("Wrong value");
	} else {
		validNum2 = true;
		$("#numberBox2")
			.removeClass("invalidBox");
	}
	// If the two numberbox are correct...
	if (validNum && validNum2) {
		// Now we manage the operationBox...
		switch (opVal) {
			case "+":
				$("#operationBox")
					.removeClass("invalidBox");

				result = ((parseInt(numVal)) + (parseInt(numVal2)));
				$("#resultBox").val(result);

				break;

			case "-":
				$("#operationBox")
					.removeClass("invalidBox");
				result = ((parseInt(numVal)) - (parseInt(numVal2)));
				$("#resultBox").val(result);
				break;

			case "*":
				$("#operationBox")
					.removeClass("invalidBox");
				result = ((parseInt(numVal)) * (parseInt(numVal2)));
				$("#resultBox").val(result);
				break;

			case "/":
				$("#operationBox")
					.removeClass("invalidBox")
				if (numVal2 == "0") {
					$("#numberBox2")
						.addClass("invalidBox");
					$("#resultBox").val("Wrong value");
				} else {
					result = ((parseInt(numVal)) / (parseInt(numVal2)));
					$("#resultBox").val(result);
				}
				break;

				// If it's a wrong input then...
			default:
				$("#operationBox")
					.removeClass("validBox")
					.addClass("invalidBox");
				$("#resultBox").val("Wrong value");
				break;
		}

	}
}
