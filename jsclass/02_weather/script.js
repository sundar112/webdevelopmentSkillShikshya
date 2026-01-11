/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const cityInput = document.getElementById('city-input');
	const getWeatherBtn = document.getElementById('get-weather-btn');
	const weatherInfo = document.getElementById('weather-info');
	const temperatureDisplay = document.getElementById('temperature');
	const feelslikeDisplay = document.getElementById('feelslike');
	const cityNameDisplay = document.getElementById('city-name');
	const humidityDisplay = document.getElementById('humidity');
	const seaLevelDisplay = document.getElementById('sea_level');
	const descriptionDisplay = document.getElementById('description');
	const errorMsg = document.getElementById('error-message');

	const API_KEY = '57502d4bc5582b105273c8765e384a8d'; //env veriable

	getWeatherBtn.addEventListener('click', async () => {
		const city = cityInput.value.trim();
		if (!cityInput === '') return;

		cityInput.value = '';

		try {
			const weatherData = await fetchWeatherData(city);
			displayWeatherData(weatherData);
		} catch (error) {
			showError();
		}
	});

	async function fetchWeatherData(city) {
		//getdata
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

		const responce = await fetch(url);

		if (!responce.ok) {
			throw new Error('city Not found');
		}

		const data = await responce.json();
		return data;
	}

	function displayWeatherData(data) {
		//display
		console.log(data);
		const { name, main, weather } = data;
		cityNameDisplay.textContent = name;
		temperatureDisplay.textContent = `Temperature : ${main.temp}`;
		descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
		feelslikeDisplay.textContent = `Feels like : ${main.feels_like}`;
		humidityDisplay.textContent = `Humidity : ${main.humidity}`;
		seaLevelDisplay.textContent = `Sea level : ${main.sea_level}`;

		//unlock the display
		weatherInfo.classList.remove('hidden');
		errorMsg.classList.add('hidden');
	}

	function showError() {
		weatherInfo.classList.add('hidden');
		errorMsg.classList.remove('hidden');
	}
});
