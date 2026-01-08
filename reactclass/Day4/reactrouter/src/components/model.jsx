/** @format */

import React, { Children } from 'react';
import { createPortal } from 'react-dom';

const Model = ({ children }) => {
	return createPortal(
		<div>
			<div>{children}</div>
		</div>,
		document.getElementById('portal-div')
	);
};

export default Model;
