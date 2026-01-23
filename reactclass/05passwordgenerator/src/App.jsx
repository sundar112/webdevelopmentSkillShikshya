/** @format */

import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setpassword] = useState('');
	const [copied, setCopied] = useState(false);

	const passwordRef = useRef(null);

	const copyPasswordToClipboard = () => {
		window.navigator.clipboard.writeText(password);
		passwordRef.current?.select();

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	const generatePassword = useCallback(() => {
		let pass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

		if (numberAllowed) str += '0123456789';
		if (charAllowed) str += '!@#$%^&*_+()';

		for (let i = 1; i <= length; i++) {
			const char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}

		setpassword(pass);
	}, [length, numberAllowed, charAllowed]);

	useEffect(() => {
		generatePassword();
	}, [length, numberAllowed, charAllowed]);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900'>
			<div className='w-full max-w-md rounded-lg px-3 my-8 bg-gray-800 text-orange-500'>
				<h1 className='text-white text-center my-3'>Password Generator</h1>

				<div className='flex shadow rounded-lg overflow-hidden mb-4'>
					<input
						type='text'
						value={password}
						className='outline-none w-full py-1 px-3 bg-white text-gray-800 font-medium'
						placeholder='Password'
						readOnly
						ref={passwordRef}
					/>
					<button
						onClick={copyPasswordToClipboard}
						className='bg-blue-600 text-white px-2'>
						Copy
					</button>
				</div>
				{copied && (
					<p className='text-green-400 text-sm mt-2 text-center'>
						Copied to clipboard!
					</p>
				)}
				<div className='flex text-sm gap-6'>
					<div className='flex items-center gap-x-1'>
						<input
							type='range'
							min={6}
							max={20}
							value={length}
							className='cursor-pointer'
							onChange={(e) => setLength(e.target.value)}
							name=''
							id=''
						/>
						<label htmlFor='length'>Length: {length}</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							type='checkbox'
							defaultChecked={numberAllowed}
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
							name=''
							id=''
						/>
						<label htmlFor='number'>Numbers</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							type='checkbox'
							defaultChecked={charAllowed}
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
							name=''
							id=''
						/>
						<label htmlFor='charInput'>Symbols</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
