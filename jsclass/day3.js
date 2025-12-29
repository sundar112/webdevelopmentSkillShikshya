/** @format */

function mainfun(x) {
	if (x > 3) {
		return fun1(x);
	} else if (x >= -2 && x <= 2) {
		return fun2(x);
	} else if (x < -3) {
		return fun3(x);
	} else {
		return `the value if x = ${x} is not eligible`;
	}
}
function fun1(x) {
	return 3 * x - 2;
}
function fun2(x) {
	return x * x - 2;
}
function fun3(x) {
	return 2 * x + 1;
}

let nums = [4, 2.5, -4, 0, -7];

for (let i = 0; i < nums.length; i++) {
	console.log(`if value is ${nums[i]} then answer is: ${mainfun(nums[i])}`);
}

// console.log(`if value is 4 then answer is: ${mainfun(4)}`);
// console.log(`if value is 2.5 then answer is: ${mainfun(2.5)}`);
// console.log(`if value is -4 then answer is: ${mainfun(-4)}`);
// console.log(`if value is 0 then answer is: ${mainfun(0)}`);
// console.log(`if value is -7 then answer is: ${mainfun(-7)}`);

console.log(1 == true);

