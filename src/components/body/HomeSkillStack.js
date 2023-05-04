import React from 'react';

import HomeSkillCard from './HomeSkillCard';
import Stack from 'react-bootstrap/esm/Stack';

export default function HomeSkillStack() {
    return (
			<div style={{justifyItems: 'center'}}>
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
			</div>
    );
}