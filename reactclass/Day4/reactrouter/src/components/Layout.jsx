/** @format */

import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
	return (
		<>
			<header>
				<h1>hi this is heather</h1>
			</header>
			<Outlet />
			<footer>
				<h1>hi this is footer</h1>
			</footer>
		</>
	);
}

export default Layout;
