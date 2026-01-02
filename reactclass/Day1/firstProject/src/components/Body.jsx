/** @format */

import React, { useState } from 'react';
import CountBtn from './CountBtn';

function Body() {
	const [count, setCount] = useState(0);

	function increseCount() {
		setCount((prev) => prev + 1);
	}
	function decreseCount() {
		setCount((prev) => prev - 1);
	}
	return (
		<>
			<h1>Vite + React {count}</h1>
			<div className='card'>
				<CountBtn name='AddValue' count='' fn={increseCount} />
				<CountBtn name='decreseValue' count='' fn={decreseCount} />
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default Body;
