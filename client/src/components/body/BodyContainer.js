import React from 'react';

export default function s({
	backgroundColor = 'white',
	children,
	headerLabel,
	id,
}){
	return (
		<div 
			className="page-content"
			id={id} 
			style={{backgroundColor: backgroundColor}} 
		>
			{
				headerLabel != null && 
				<div className="page-header">
					<h4>{headerLabel}</h4>
				</div>
			}
			{children}
		</div>
	);
}