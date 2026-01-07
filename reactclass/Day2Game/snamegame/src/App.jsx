/** @format */

import './App.css';
import Grid from './components/Grid';

const GRID_SIZE = 20;

function App() {
	return (
		<div className='app'>
			<h1>Snake Game</h1>
			<Grid size={GRID_SIZE} />
		</div>
	);
}

export default App;
