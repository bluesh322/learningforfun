#include "Animal.h"
class Dog: public Animal {
	public:
		void digHole() {
			cout << "Dug a hole" << endl;
		}

	public Dog() {
		setSound("Bark");
	}
}