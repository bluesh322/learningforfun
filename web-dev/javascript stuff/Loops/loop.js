var i;
for(i=0; i < 10; i++) {
	alert(i);
}

var x = 10;

while (x > 0) {
	console.log(x);
	x--;
	if(x === 0) {
		console.log("Blastoff");
	}
}

x = -10;

while (x < 20) {
	console.log(x);
	x++;
}

x = 10;

while (x <= 40) {
	console.log(x);
	x += 2;
}

x = 301;

while (x < 334) {
	console.log(x);
	x +=2;
}

x = 5;

while (x < 50) {
	if (x % 5 === 0 && x % 3 === 0) {
		console.log(x);
	}
	x++;
}