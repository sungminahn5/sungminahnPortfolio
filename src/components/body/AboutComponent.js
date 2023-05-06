import React from 'react';

import BodyContainer from './BodyContainer';
import ExperienceTimeline from './aboutComponents/ExperienceTimeline';

export default function AboutComponent(){
  return (
    <BodyContainer backgroundColor='#f0f0f0'>
      <ExperienceTimeline/>
    </BodyContainer>
  );
}