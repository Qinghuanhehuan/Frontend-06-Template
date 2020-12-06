class Human{
	Hurt(damage){
		console.log(`${damage}`);
	}
}
class Dog{
	bite(){
		return 'bite';
	}
}

let person = new Human();
let dog = new Dog();
person.Hurt(dog.bite());