/** @format */

const { math, log } = require('@tensorflow/tfjs');

function addsquare(x) {
	return Math.pow(35, x) + 2;
}

console.log(`this is the output : ${addsquare(2)}`);

/***************** ifelsepart*****************/

function returnGreeting() {
	const time = new Date().getHours();
	let greeting;

	if (time < 10) {
		greeting = 'Good Morning';
	} else if (time < 20) {
		greeting = 'Good Day';
	} else {
		greeting = 'good good evening';
	}
	return greeting;
}

console.log(`Hello Sundar : ${returnGreeting()}`);

// calculator

console.log('from this calculator begins \n');

function cal(x, operator, y) {
	let ans;
	switch (operator) {
		case '+':
			ans = x + y;
			break;
		case '-':
			ans = x - y;
			break;
		case '*':
			ans = x * y;
			break;
		case '/':
			ans = x / y;
			break;
		default:
			return 'Error: Invalid operator provided';
	}
	return ans;
}

console.log(`your answer is ${cal(5, 'l', 0)}`);
