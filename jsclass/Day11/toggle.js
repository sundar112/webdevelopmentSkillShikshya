/** @format */

const tglswitch = document.getElementById('switch');
const body = document.body;

loadTheme();

tglswitch.addEventListener('change', () => {
	themeChange();
});

function themeChange() {
	if (tglswitch.checked) {
		body.classList.remove('bg-white', 'text-black');
		body.classList.add('bg-gray-900', 'text-white');
		saveTheme('dark');
	} else {
		body.classList.remove('bg-gray-900', 'text-white');
		body.classList.add('bg-white', 'text-black');
		saveTheme('light');
	}
}

function saveTheme(thememood) {
	localStorage.setItem('theme', thememood);
}

function loadTheme() {
	const savedTheme = localStorage.getItem('theme');

	if (savedTheme === 'dark') {
		body.classList.add('bg-gray-900', 'text-white');
		tglswitch.checked = true;
	} else {
		body.classList.add('bg-white', 'text-black');
	}
}
