#ifndef ANIMAL_H
#define ANIMAL_H

class Animals {
private: 
	string name;
	int weight;
	string sound;
public: 
	void setName(string newName) { name = newName; }
	string getName() { return name; }
	void setWeight(int newWeight) {
		if(newWeight > 0) {
			weight = newWeight;
		} else {
			cout << "Weight must be greater than 0" << endl;
		}
	}
	string getWeight() { return weight; }

	void setSound(string newSound) { sound = newSound; }
	string getSound() { return sound; }
};

#endif 