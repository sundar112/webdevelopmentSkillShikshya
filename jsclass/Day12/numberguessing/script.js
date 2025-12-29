/** @format */
const inputnum = document.getElementById('num');
const guessBtn = document.getElementById('checkbtn');
const rePlayBtn = document.getElementById('playagain');
const guessedNUms = document.getElementById('guessedNUms');
const feedback = document.getElementById('feedback');
const feedbackDec = document.getElementById('feedbackDec');
const gameover = document.getElementById('gameover');

let num = randomNumbers();
let flag = 1;

console.log('num is ', num);

guessBtn.addEventListener('click', () => {
	const li = document.createElement('li');
	flag++;
	let gnum = inputnum.value;
	if (flag <= 10) {
		feedback.innerText = checkguessing(gnum);
		if (feedback.innerText == 'correct') {
			feedback.className = 'text-green-500';
			feedbackDec.innerText = 'congratulations';
		} else if (feedback.innerText == 'Too High') {
			feedback.className = 'text-red-500';
			feedbackDec.innerText = 'Wrong! you have to guess lower';
		} else {
			feedback.className = 'text-red-500';
			feedbackDec.innerText = 'Wrong! you have to guess higher';
		}

		li.textContent = gnum;
	} else {
		guessBtn.hidden = true;
		rePlayBtn.hidden = false;
		gameover.hidden = false;
	}
	guessedNUms.appendChild(li);
	inputnum.value = '';
});

rePlayBtn.addEventListener('click', () => {
	num = randomNumbers();
	console.log('num is ', num);
	guessBtn.hidden = false;
	rePlayBtn.hidden = true;
	guessedNUms.innerHTML = '';
	feedbackDec.innerText = '';
	feedback.innerText = '';
	gameover.hidden = true;
	flag = 1;
});

function randomNumbers() {
	let randomNumber = Math.floor(Math.random() * 100);
	return randomNumber;
}

function checkguessing(guessNum) {
	if (num == guessNum) {
		guessBtn.hidden = true;
		rePlayBtn.hidden = false;
		return 'correct';
	} else if (num < guessNum) {
		return 'Too High';
	} else if (num > guessNum) {
		return 'Too Low';
	}
}
