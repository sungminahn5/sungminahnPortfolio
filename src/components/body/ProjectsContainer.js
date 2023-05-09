import React from 'react';

import BodyContainer from './BodyContainer';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';

export default function ProjectsContainer(){
	return (
		<BodyContainer id="projects" headerLabel='Projects'>
			<Card style={{width: '300px'}}>
				<Card.Img variant='top' src='assets/img/work_in_progress.png'/>
				<Card.Text>Work in progress</Card.Text>
			</Card>
		</BodyContainer>
	);
}