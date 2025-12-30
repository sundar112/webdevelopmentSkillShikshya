/** @format */

import React from 'react';
import CountBtn from './CountBtn';

function Body() {
	return (
		<>
			<h1>Vite + React</h1>
			<div className='card'>
				<CountBtn />
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
