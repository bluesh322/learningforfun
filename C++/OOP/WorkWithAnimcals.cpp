#include <iostream>
#include <string>
#include "Animal.h"
#include "Dog.h"
#include "Cat.h"

using namespace std; 

int main () {
	Dog fido;

	fido.setName("Fido");
	cout << fido.getName() << endl;

	fido.digHole();

	fido.setWeight(-1);
}