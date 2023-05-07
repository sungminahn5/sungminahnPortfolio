import React from 'react';

import SkillCard from '../SkillCard';
import Stack from 'react-bootstrap/esm/Stack';
import { TechStack } from '../../../tempData/experiences';

export default function HomeSkillStack() {
	return (
		<Stack className="tech_stack_home" direction="horizontal" gap={4}>
			<div className="tech_stack_home_label">Tech Stack on Portfolio</div>
			<Stack gap={3} direction='horizontal' content="center">
				<SkillCard
					skill={TechStack.REACT}
				/>
				<SkillCard
					skill={TechStack.JS}
				/>
				<SkillCard
					skill={TechStack.BOOTSTRAP}
				/>
				<SkillCard
					skill={TechStack.NODE}
				/>
			</Stack>
		</Stack>
    );
}