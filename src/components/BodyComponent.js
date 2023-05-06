import React from 'react';

import AboutContainer from './body/aboutComponents/AboutContainer';
import ContactComponent from './body/ContactComponent';
import HomeContainer from './body/homeComponents/HomeContainer';
import ProjectsContainer from './body/ProjectsContainer';

export default function BodyComponent(){
	return (
		<div class="body-container">
			<HomeContainer/>
			<AboutContainer/>
			<ProjectsContainer/>
			<ContactComponent/>
		</div>
	);
}