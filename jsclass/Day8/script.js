/** @format */

import fName, { lName, fullname } from './script2.js';

// console.log('Fullname : ', fullname('asona', 'shrestha'));

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);

// const element = document.querySelectorAll('li');
// console.log(element);

// for (let i = 0; i < element.length; i++) {
// 	console.log(element[i].innerHTML);

// 	element[i].style.color = element[i].dataset.color;
// }

const btn = document.getElementById('changecolor');

btn.addEventListener('click', function () {
	const change = document.getElementsByTagName('li');

	change.style.color = change.dataset.color;
});
