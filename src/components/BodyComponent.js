import React from 'react';

import AboutContainer from './body/aboutComponents/AboutContainer';
import ContactComponent from './body/ContactComponent';
import HomeContainer from './body/homeComponents/HomeContainer';
import ProjectsComponent from './body/ProjectsComponent';

export default function BodyComponent(){
	return (
		<div class="body-container">
			<HomeContainer/>
			<AboutContainer/>
			<ProjectsComponent/>
			<ContactComponent/>
		</div>
	);
}