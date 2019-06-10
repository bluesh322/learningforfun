//create secretNumber
var secretNumber = 4;

var guess = prompt("Guess a number");

if(Number(guess) === secretNumber) {
	alert("You got it Right!")
}
else if(Number(guess) > secretNumber) {
	alert("Too High, Guess Again");
}
else {
	alert("Too Low, Guess Again");
}