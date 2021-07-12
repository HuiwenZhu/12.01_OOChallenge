
class Vehicle{
	// constructor can be used for 1. assign property and validate data
	constructor( make, model,year){
		this.make=make;
		this.model=model;
		this.year=year;
	}
	honk(){
		return "Beep";
	}
	toString(){
		return `The Vehicle is a ${this.make}, ${this.model} from ${this.year}`;
	}
	}


class Car extends Vehicle{
	constructor(make,model, year, numWheels){
	super(make,model,year);
	this.numwheels=4;
}

}

class Motorcycle extends Vehicle{
	constructor(make,model, year, numWheels){
		super(make,model,year);
		this.numwheels=2;
	}
	revEngine(){
		return "Beep";

}
	toString(){
	return `The Motocycle is a ${this.make}, ${this.model} from ${this.year}`;
}

}

class Garage {
	constructor(capacity){
		this.vehicles=[];//????? why we dont put 2 parameters here?
		this.capacity=capacity;
}

add(newVehicle){
	if(!(newVehicle instanceof Vehicle)){
		return "Only vehicle are allowed in here";

	}
	if(this.vehicles.length>=this.capacity){
		return "Sorry we are full";

	}
	this.vehicles.push(newVehicle);
	return "Vehicle added!";
}
}