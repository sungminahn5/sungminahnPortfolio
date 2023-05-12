import React from 'react';

import BodyContainer from '../BodyContainer';
import Stack from 'react-bootstrap/Stack';
import HomeSkillStack from './HomeSkillStack';
import HomeSocialMediaStack from './HomeSocialMediaStack';

export default function HomeContainer(){
	return (
		<BodyContainer id="home" class="home-container">
			<div class="home-content">
				<Stack direction="vertical" className="profile" gap={5}>
					<Stack gap={3}>
						<div className="profile-main">
							<h4>Hello, I'm</h4>
							<h1>Sungmin Ahn 👋</h1>
							<h5>Full Stack SWE</h5>
						</div>
						<div className='profile-text'>
							<p>I'm a full-stack SWE, who thrives to make people's lives better because everyone deserves to live a life to its fullness</p>
						</div>
					</Stack>
					<HomeSocialMediaStack/>
					<HomeSkillStack/>
				</Stack>
				<div className='profile-img-container'>
					<div className="profile-img"/>
				</div>
			</div>
		</BodyContainer>
	);
}