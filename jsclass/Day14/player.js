/** @format */

const playBtn = document.querySelector('.playbtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');

// 🎵 Song list
const songs = [
	'./assets/song1.mp3',
	'./assets/song2.mp3',
	'./assets/song3.mp3',
];

let audio = new Audio();
let isPlaying = false;

// 🎲 Pick random song
function playRandomSong() {
	const randomIndex = Math.floor(Math.random() * songs.length);
	audio.src = songs[randomIndex];
	audio.load(); // 🔥 IMPORTANT
	audio.play().catch((err) => console.log('Play error:', err));
	isPlaying = true;
}

// ▶️ Play / Pause
playBtn.addEventListener('click', () => {
	if (!isPlaying) {
		if (!audio.src) playRandomSong();
		else audio.play();
		isPlaying = true;
		console.log('playbtn clicked');
	} else {
		audio.pause();
		isPlaying = false;
	}
});

audio.addEventListener('timeupdate', () => {
	const progress = (audio.currentTime / audio.duration) * 100;
	progressBar.value = progress;

	currentTimeEl.textContent = formatTime(audio.currentTime);
	totalTimeEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
	const seekTime = (progressBar.value / 100) * audio.duration;
	audio.currentTime = seekTime;
});

function formatTime(time) {
	if (isNaN(time)) return '00:00';

	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0');

	return `${minutes}:${seconds}`;
}

audio.addEventListener('ended', () => {
	playRandomSong();
});
