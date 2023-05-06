import React from 'react';

import AboutComponent from './body/AboutComponent';
import ContactComponent from './body/ContactComponent';
import HomeComponent from './body/HomeComponent';
import ProjectsComponent from './body/ProjectsComponent';

export default function BodyComponent(){
	return (
		<div class="body-container">
			<HomeComponent/>
			<AboutComponent/>
			<ProjectsComponent/>
			<ContactComponent/>
		</div>
	);
}