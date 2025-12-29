/** @format */

console.log('=== Equality Comparisons (==) ===');

console.log('"" == 0 :', '' == 0);
console.log('"" == false :', '' == false);
console.log('0 == false :', 0 == false);
console.log('null == undefined :', null == undefined);
console.log('"0" == false :', '0' == false);
console.log('"0" == 0 :', '0' == 0);
console.log('false == 0 :', false == 0);

console.log('\n=== Strict Equality (===) ===');

console.log('"" === 0 :', '' === 0);
console.log('null === undefined', null === undefined);

console.log('\n=== Array Coercion ===');

console.log('[] == 0 :', [] == 0);
console.log('[] == "" :', [] == '');
console.log('[] == ![] :', [] == ![]);
console.log('[1] == 1 :', [1] == 1);
console.log('[1,2] == "1,2" :', [1, 2] == '1,2');

console.log('\n=== Addition vs Concatenation ===');

console.log('1 + 2 :', 1 + 2);
console.log('1 + "2" :', 1 + '2');
console.log('"1" + 2 :', '1' + 2);
console.log('"1" + "2" :', '1' + '2');
console.log('1 + 2 + "3" :', 1 + 2 + '3');
console.log('"1" + 2 + 3 :', '1' + 2 + 3);
console.log('1 + +"2" :', 1 + +'2');

console.log('\n=== Arrays and Objects ===');

console.log('[] + [] :', [] + []);
console.log('[] + {} :', [] + {});
console.log('{} + [] :', {} + []);
console.log('{} + {} :', {} + {});
