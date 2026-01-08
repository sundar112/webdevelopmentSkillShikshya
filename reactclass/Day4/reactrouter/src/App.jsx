/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
	Routes,
	Route,
	createBrowserRouter,
	RouterProvider,
} from 'react-router';
import Layout from './components/Layout';
import Card from './components/Card';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Card discription='hello this is home page' />,
			},
			{
				path: '/about',
				element: <Card discription='hello this is about page' />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
