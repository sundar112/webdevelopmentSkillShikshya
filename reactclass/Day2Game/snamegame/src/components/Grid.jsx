/** @format */

import '../css/Grid.css';
import { useEffect, useRef, useState } from 'react';

const Grid = ({ size }) => {
	const [snake, setSnake] = useState([
		[10, 10],
		[10, 9],
		[10, 8],
	]);

	const directionRef = useRef('RIGHT');
	const intervalRef = useRef(null);

	const [food, setFood] = useState(() => generateFood(snake));
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	function generateFood(snakeBody) {
		let newFood;

		while (true) {
			newFood = [
				Math.floor(Math.random() * size),
				Math.floor(Math.random() * size),
			];

			const onSnake = snakeBody.some(
				([r, c]) => r === newFood[0] && c === newFood[1]
			);

			if (!onSnake) break;
		}

		return newFood;
	}

	useEffect(() => {
		const handleKey = (e) => {
			if (gameOver) return;

			if (e.key === 'ArrowUp' && directionRef.current !== 'DOWN')
				directionRef.current = 'UP';
			if (e.key === 'ArrowDown' && directionRef.current !== 'UP')
				directionRef.current = 'DOWN';
			if (e.key === 'ArrowLeft' && directionRef.current !== 'RIGHT')
				directionRef.current = 'LEFT';
			if (e.key === 'ArrowRight' && directionRef.current !== 'LEFT')
				directionRef.current = 'RIGHT';
		};

		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, [gameOver]);

	useEffect(() => {
		intervalRef.current = setInterval(moveSnake, 200);
		return () => clearInterval(intervalRef.current);
	}, [snake, food, gameOver]);

	const moveSnake = () => {
		if (gameOver) return;

		const head = snake[0];
		let newHead = [...head];

		switch (directionRef.current) {
			case 'UP':
				newHead[0]--;
				break;
			case 'DOWN':
				newHead[0]++;
				break;
			case 'LEFT':
				newHead[1]--;
				break;
			case 'RIGHT':
				newHead[1]++;
				break;
		}

		// wall collision
		if (
			newHead[0] < 0 ||
			newHead[0] >= size ||
			newHead[1] < 0 ||
			newHead[1] >= size
		) {
			endGame();
			return;
		}

		// food collision
		if (newHead[0] === food[0] && newHead[1] === food[1]) {
			const newSnake = [newHead, ...snake];
			setSnake(newSnake);
			setFood(generateFood(newSnake));
			setScore((s) => s + 1);
			return;
		}

		// normal move
		setSnake([newHead, ...snake.slice(0, -1)]);
	};

	const endGame = () => {
		clearInterval(intervalRef.current);
		setGameOver(true);
	};

	return (
		<>
			<h3>Score: {score}</h3>

			<div
				className='board'
				style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
				{Array.from({ length: size * size }).map((_, index) => {
					const row = Math.floor(index / size);
					const col = index % size;

					const isSnake = snake.some(([r, c]) => r === row && c === col);

					const isFood = food[0] === row && food[1] === col;

					return (
						<div
							key={`${row}-${col}`}
							className={`cell ${isSnake ? 'snake' : isFood ? 'food' : ''}`}
						/>
					);
				})}
			</div>

			{gameOver && <h2 className='game-over'>Game Over</h2>}
		</>
	);
};

export default Grid;
