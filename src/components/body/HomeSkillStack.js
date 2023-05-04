import React from 'react';

import HomeSkillCard from './HomeSkillCard';
import Stack from 'react-bootstrap/esm/Stack';

export default function HomeSkillStack() {
	return (
		<Stack className="tech_stack_home" direction="horizontal" gap={4} style={{alignSelf: 'unset'}}>
			<div className="tech_stack_home_label">Tech Stack on Portfolio</div>
			<Stack gap={3} direction='horizontal' content="center">
				<HomeSkillCard
					skill="REACT"
				/>
					<HomeSkillCard
					skill="JS"
				/>
					<HomeSkillCard
					skill="BOOTSTRAP"
				/>
					<HomeSkillCard
					skill="NODE"
				/>
			</Stack>
		</Stack>
    );
}