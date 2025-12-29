/** @format */

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

const hrEl = document.getElementById('hr');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const countEl = document.getElementById('count');

const lapList = document.getElementById('lapList');
const clearBtn = document.getElementById('clearBtn');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');

startBtn.addEventListener('click', () => {
	timer = true;
	startBtn.disabled = true;
	lapBtn.disabled = false;
	stopWatch();
});

stopBtn.addEventListener('click', () => {
	timer = false;
	startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
	timer = false;
	startBtn.disabled = false;

	hr = 0;
	min = 0;
	sec = 0;
	count = 0;

	hrEl.textContent = '00';
	minEl.textContent = '00';
	secEl.textContent = '00';
	countEl.textContent = '00';
});

lapBtn.addEventListener('click', () => {
	clearBtn.hidden = false;
	const li = document.createElement('li');
	li.textContent =
		'0' + hr + ' : ' + '0' + min + ' : ' + '0' + sec + ' : ' + count;
	li.className = 'bg-gray-200 px-3 py-2 rounded';
	lapList.appendChild(li);
});

clearBtn.addEventListener('click', () => {
	// location.reload();
	lapList.innerHTML = '';
	clearBtn.hidden = true;
});

function stopWatch() {
	if (timer) {
		count++;

		if (count === 100) {
			sec++;
			count = 0;
		}
		if (sec === 60) {
			min++;
			sec = 0;
		}
		if (min === 60) {
			hr++;
			min = 0;
		}

		if (hr < 10) {
			hrEl.textContent = '0' + hr;
		} else {
			hrEl.textContent = hr;
		}
		if (min < 10) {
			minEl.textContent = '0' + min;
		} else {
			minEl.textContent = min;
		}
		if (sec < 10) {
			secEl.textContent = '0' + sec;
		} else {
			secEl.textContent = sec;
		}
		if (count < 10) {
			countEl.textContent = '0' + count;
		} else {
			countEl.textContent = count;
		}

		setTimeout(stopWatch, 10);
	}
}
