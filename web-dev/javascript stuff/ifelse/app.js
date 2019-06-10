var age = Number(prompt("Excuse me what is your age?"));
if(age < 18) {
	console.log("Sorry, you are not old enough to enter the venue");
}
else if (age === 21) {
	console.log("Happy Birfday, go get a free shot");
}
else if (age < 21) {
	console.log("You can enter, but cannot drink, have an X");
}
else if (age < 0) {
	console.log("Error, uhh ur a fetus, sorta");
}
else if ((age % 2) === 1) {
	console.log("Your age is odd");
}
else if (age % (Math.sqrt(age)) === 0) {
	console.log("Your age is a perfect square");
} 
else {
	console.log("Welcome to EL VENUE BOIIIIS");
}