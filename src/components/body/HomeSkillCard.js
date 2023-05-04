import React from 'react';

import Card from 'react-bootstrap/Card';

function getSkillInfo(skill){
	switch(skill){
		case 'BOOTSTRAP':
			return {
				logo: "assets/img/bootstrap_icon.png",
				label: 'Bootstrap'
			}
		case 'JS':
			return {
				logo: "assets/img/js_icon.png",
				label: 'JavaScript'
			}
		case 'NODE':
			return {
				logo: "assets/img/node_js_icon.svg",
				label: 'Node JS'
			}
		case 'REACT':
			return {
				logo: "assets/img/logo192.png",
				label: 'React JS'
			}
		default:
			return {
				logo: null,
				label: 'undefined',
			}
	}
}

export default function HomeSkillCard({skill}) {
	const {logo, label} = getSkillInfo(skill);

	return (
      <Card title={label} style={{ width: '3rem', boxShadow: '0 0 8px rgb(0,0,0,0.15)', overflow: 'hidden' , border: 'none'}}>
        <Card.Img variant="top" src={logo}/>
    	</Card>
		);
}