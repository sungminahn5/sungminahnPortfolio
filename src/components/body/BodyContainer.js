import React from 'react';

export default function BodyContainer({
	backgroundColor = 'white',
	children
}){
	return (
		<div style={{backgroundColor: backgroundColor}}className="page-content">
			{children}
		</div>
	);
}