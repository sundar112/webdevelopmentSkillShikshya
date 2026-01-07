/** @format */

import React, { useContext } from 'react';
import { ThemeContext } from './Context';

const ThemedComponent = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			style={{
				background: theme === 'dark' ? 'black' : 'white',
				color: theme === 'dark' ? 'white' : 'black',
			}}>
			<p>Current theme: {theme}</p>
			<button onClick={toggleTheme}>toggle theme</button>
		</div>
	);
};

export default ThemedComponent;
