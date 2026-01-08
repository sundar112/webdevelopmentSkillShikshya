/** @format */

import React from 'react';
import { Link } from 'react-router';
import Model from './model';

function Card({ discription }) {
	return (
		<div>
			<Link to='/about'>
				<h3>About</h3>
			</Link>
			<a href='/about'>about</a>
			<Link to='/'>
				<h3>Home</h3>
			</Link>
			<Model>hello this is model</Model>

			<h2>{discription}</h2>
		</div>
	);
}

export default Card;
