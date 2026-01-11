/** @format */

import React, { useRef } from 'react';

function FormUnControlled() {
	const inputRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputRef.current.value);
		console.log(inputRef.current);

		allert(`a name was submited ${inputRef.current.value}`);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>
				Name:
				<input type='text' ref={inputRef} defaultValue='Initial Name' />
			</label>
			<button type='submit'>submit</button>
		</form>
	);
}

export default FormUnControlled;
