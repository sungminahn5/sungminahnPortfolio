import React from 'react';

export default function s({
	backgroundColor = 'white',
	children,
	headerLabel,
	id,
}){
	return (
		<div id={id} style={{backgroundColor: backgroundColor}} className="page-content">
			{headerLabel != null && <div className="page-header"><h4>{headerLabel}</h4></div>}
			{children}
		</div>
	);
}