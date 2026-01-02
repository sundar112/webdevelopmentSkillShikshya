/** @format */

import React, { useState } from 'react';

function CountBtn(props) {
	const [count, setCount] = useState(0);
	console.log(props);

	return (
		<>
			<button onClick={() => props.fn()}>
				{props.name} {props.count}
			</button>
		</>
	);
}

export default CountBtn;
