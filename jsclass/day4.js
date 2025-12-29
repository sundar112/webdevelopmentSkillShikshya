/** @format */

// function arrowfuncall(x = 9, y = (() => x * 2)()) {
// 	console.log('calling arrow function ', x, y);
// 	//bellow will rint the arguements
// 	console.log('this is arguments', arguments);
// }

// arrowfuncall();

// //this will rplace the x value in function (parameter of x)
// arrowfuncall(20);
// //this will pass the parameter in function
// arrowfuncall(20, 10);

// function yy(x, y) {
// 	for (let i = 0; i < arguments.length; i++) {
// 		console.log('arguments value', arguments[i]);
// 	}
// }

// yy(6,7);

// function yy(x, y) {
// 	for (let i in arguments) {
// 		console.log('arguments value', arguments[i]);
// 	}
// }

// yy(6, 7);

// const obj = {
// 	0: 6,
// 	1: 7,
// 	a: 'myname',
// 	b: 8,
// 	2: 'hello',
// };

// console.log(obj.a);
// console.log(obj[1]);
// console.log(obj.b);
// console.log(obj[2]);

// function yy(x, y) {
// 	for (let i of arguments) {
// 		console.log('arguments value', i);
// 	}
// }

// yy(6, 7);

// function yy(...x) {
// 	//this is rest operator used in parameter
// 	for (let i of x) {
// 		console.log('arguments value', i);
// 	}
// }

// yy(6, 7, 8, 9);

// let arr = [6, 7, 8, 9];
// yy(...arr); //this is spred operater to call function by passing arrays

// function yy(msg, ...x) {
// 	console.log('this is massage', msg);

// 	for (let i of x) {
// 		console.log('arguments value', i);
// 	}
// }

// let arr = [6, 7, 8, 9];
// yy('hi there', ...arr);


// array destructure*****************************

// function yy(...x) { //array destructure
// 	const [a, b, c, d] = x;

// 	console.log('this is a', a);
// 	console.log('this is b', b);
// 	console.log('this is c', c);
// 	console.log('this is d', d);
// }

// let arr = [6, 7, 8, 9];
// yy(...arr);


// object destructure**********************************

function yy(x) {
	//object destructure
	const { a, b, c, d } = x;

	console.log('this is a', a);
	console.log('this is b', b);
	console.log('this is c', c);
	console.log('this is d', d);
}

let arr = { a: 6, b: 7, c: 8, d: 9 };
yy(arr);
