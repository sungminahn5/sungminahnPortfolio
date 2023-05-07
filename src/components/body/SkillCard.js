import React from 'react';
import { TechStack } from '../../tempData/experiences';

import Card from 'react-bootstrap/Card';

function getSkillInfo(skill){
	switch(skill){
		case TechStack.BOOTSTRAP:
			return {
				logo: "assets/img/bootstrap_icon.png",
				label: 'Bootstrap'
			}
		case TechStack.CSHARP:
			return {
				logo: "assets/img/csharp_icon.png",
				label: 'C#'
			}
		case TechStack.GRAPHQL:
			return {
				logo: "assets/img/graphQL_icon.png",
				label: 'GraphQL'
			}
		case TechStack.JQUERY:
			return {
				logo: "assets/img/jquery_icon.png",
				label: 'jQuery'
			}
		case TechStack.JS:
			return {
				logo: "assets/img/js_icon.png",
				label: 'JavaScript'
			}
		case TechStack.MYSQL:
			return {
				logo: "assets/img/mySQL_icon.png",
				label: 'MySQL'
			}
		case TechStack.NODE:
			return {
				logo: "assets/img/node_js_icon.svg",
				label: 'Node JS'
			}
		case TechStack.PHP:
				return {
					logo: "assets/img/php_icon.png",
					label: 'PHP'
				}
		case TechStack.REACT:
			return {
				logo: "assets/img/logo192.png",
				label: 'React JS'
			}
		case TechStack.RELAY:
				return {
					logo: "assets/img/relay_icon.png",
					label: 'Relay'
				}
		default:
			return {
				logo: null,
				label: 'undefined',
			}
	}
}

export default function HomeSkillCard({
	skill,
	isPreview = false
}) {
	const {logo, label} = getSkillInfo(skill);
	return (
      <Card title={label} style={{ width: '2rem', boxShadow: '0 0 8px rgb(0,0,0,0.15)', overflow: 'hidden' , border: 'none'}}>
        <Card.Img variant="top" src={logo}/>
    	</Card>
		);
}