/** @format */

const { valueAndGrad } = require("@tensorflow/tfjs");

class project {
	constructor(name) {
		this.name = name;
		console.log('this is the project name', name);
	}
	getter() {
		console.log('name value', this.name);
	}
	static printValues() {
		console.log(this.name);
	}
	setter(x) {
		this.name = x;
	}
}

// const newProject = new project('react');
// const newProject2 = new project('next');

// newProject.time = '10 days';
// newProject2.run = function () {
// 	console.log(`${this.name} is installing`);
// };

// console.log(newProject);
// console.log(newProject2);
// console.log(newProject2.run());
// console.log(newProject.getter === project.prototype.getter);

// newProject.getter();
// newProject.setter('Angular');
// project.printValues();


// argument 
// method 
// parametr
// value
// key


class Next extends project {
    constructor(parameters) {
        
    }
}