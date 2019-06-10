window.setTimeout(function() {
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {

	if(input === "list") {
		console.log(todos);
	}
	else if(input === "new") {
		//ask new todo
		var newTodo = prompt("Enter new todo");
		//add new todo
		todos.push(newTodo);
	}
	else {
	console.log("This is not a valid option");
	}
	//ask again
	input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

}, 500);