/** @format */

/*
const { model } = require('@tensorflow/tfjs');

const car = {
	type: 'BMW',
	model: 'A05',
	color: 'blue',
};

const person = {
	fName: 'sundar',
	lName: 'shrestha',
	age: 28,
	eyeColor: 'black',
};

const product = {
	id: 1,
	name: 'Laptop',
	price: 200000,
	speces: { ram: '16GB', storage: '512SSD' },
	powerOn: function () {
		return 'the computer is booting';
	},
};

console.log(
	`this is a ${car.type} car,\n model ${car.model} and \nthe color of this car is ${car.color}\n\n`
);

console.log(
	`My name is ${person.fName} ${person.lName} \ni am ${person.age} years old \nMy eye color is ${person.eyeColor}`
);

console.log(
	`\n\n\nProduct Name: ${product.name}\nprice: ${product.price}\Ram: ${
		product.speces.ram
	}\nStorage: ${product.speces.storage} \n${product.powerOn()}`
);

*/

/*
function person(name, age) {
	this.name = name;
	this.age = age;
}

const p1 = new person('sundar', 28);
console.log('this is p1', p1);

*/

function Animal(name, age) {
	this.name = name;
	this.age = age;
}

Animal.prototype.eat = function () {
	console.log(`${this.name} is eating`);
};

function dog(name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

dog.prototype = Object.create(Animal.prototype);
// dog.prototype.constructor = dog;

dog.prototype.bark = function () {
	console.log(`${this.name} barks`);
};
const myDog = new dog('seru', 'pug');
myDog.eat();
myDog.bark();
