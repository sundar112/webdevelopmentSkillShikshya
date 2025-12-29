/**
 * topic promise
 *
 * @format
 */

let myPromise = new Promise((resolve, reject) => {
	let result = true;

	if (result == true) {
		setTimeout(() => {
			resolve('promise 1 OK');
		}, 1000);
	} else {
		setTimeout(() => {
			reject('promise 1 Error');
		}, 1000);
	}
});

const myPromise2 = new Promise((resolve, reject) => {
	let result = true;

	if (result == true) {
		setTimeout(() => {
			resolve('Promise 2 OK');
		}, 5000);
	} else {
		setTimeout(() => {
			reject('Promise 2Error');
		}, 5000);
	}
});

console.log(myPromise);

// myPromise
// 	.then((message) => {
// 		console.log('then:', message);
// 	})
// 	.catch((error) => {
// 		console.log('error: ', error);
// 	})
// 	.finally(() => {
// 		console.log('promise has been setteld ether resolve or rejected');
// 	});

// Promise.allSettled([myPromise, myPromise2])
// 	.then((message) => {
// 		console.log('then:', message);
// 	})
// 	.catch((error) => {
// 		console.log('error: ', error);
// 	})
// 	.finally(() => {
// 		console.log('promise has been setteld ether resolve or rejected');
// 	});

// async function handlepromise() {
// 	try {
// 		const message = await myPromise;
// 		const message2 = await myPromise2;

// 		console.log('then:', message);
// 		console.log('then:', message2);
// 		throw Error('this is manually thrown error');
// 	} catch (error) {
// 		console.log('error: ', error);
// 	} finally {
// 		console.log('promise has been settled (ether success or rejected)');
// 	}
// }
// handlepromise();

async function handlepromise() {
	try {
		const message = await fetch('https://randomuser.me/api/');
		const data = await message.json();
		console.log(data.results[0].name.first);
		//console.log('then:', data);
		const username = data.results[0].name.first;
		alert('hello ' + username);
	} catch (error) {
		console.log('error: ', error);
	} finally {
		console.log('promise has been settled (ether success or rejected)');
	}
}

function allert(name) {
	alert('hello', name);
}
handlepromise();
