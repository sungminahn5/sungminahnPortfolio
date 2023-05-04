import React from 'react';

import BodyContainer from './BodyContainer';
import Stack from 'react-bootstrap/Stack';
import HomeSkillStack from './HomeSkillStack';

export default function HomeComponent(){
	return (
		<BodyContainer>
			<div className="home-container">
				<Stack direction="vertical" gap={5} className="home-content">
					<div className="profile-content">
						<div className="profile-text">
							<h1>Hello, I'm Sungmin 👋</h1>
							<p>I'm a 👨‍💻full-stack developer based out in 📍Pasadena, CA</p>
						</div>
						<div className="profile-img"/>
					</div>
					<HomeSkillStack/>
				</Stack>
			</div>
		</BodyContainer>
	);
}