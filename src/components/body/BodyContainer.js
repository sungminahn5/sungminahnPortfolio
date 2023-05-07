import React from 'react';

export default function BodyContainer({
	backgroundColor = 'white',
	children,
	headerLabel,
}){
	return (
		<div style={{backgroundColor: backgroundColor}} className="page-content">
			{headerLabel != null && <div className="page-header"><h4>{headerLabel}</h4></div>}
			{children}
		</div>
	);
}