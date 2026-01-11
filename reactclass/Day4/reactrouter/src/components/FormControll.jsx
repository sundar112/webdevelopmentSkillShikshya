/** @format */

import React, { useState } from 'react';

function FormControll() {
	let flag;
	const [inputVal, setInputVal] = useState('');
	const [person, setPerson] = useState({ name: 'bibake' });
	const handleSubmit = (e) => {
		setPerson((prev) => {
			return { ...prev, age: 20 };
		});
	};

	console.log(person);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>
					username
					<input type='text' onChange={(e) => setInputVal(e.target.value)} />
				</label>
				<label htmlFor=''>{inputVal}</label>
				<button>submit</button>
				<label htmlFor=''>{person}</label>
			</form>
		</>
	);
}

export default FormControll;
