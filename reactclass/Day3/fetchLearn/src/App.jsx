/** @format */

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider } from './components/Context';
function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchPhotos();
	});

	async function fetchPhotos() {
		const ACCESS_KEY = 'ulMGs2qgpU7daRK9ja0FWSQGjozhJY_WpTEq4bkF8lE';
		try {
			const res = await fetch(
				'https://api.unsplash.com/photos/random?count=12',
				{
					headers: {
						Authorization: `Client-ID ${ACCESS_KEY}`,
					},
				}
			);
			const data = await res.json();
			setData(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<ThemeProvider>
				<themedComponent />
			</ThemeProvider>
			<div className='p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-black min-h-screen'>
				<div key={data.id} className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition">
					<img src={data} alt='' />
				</div>
			</div>
		</>
	);
}

export default App;
