import React from 'react';

import AboutExperienceTimeline from './AboutExperienceTimeline';
import BodyContainer from '../BodyContainer';

export default function AboutContainer(){
  return (
    <BodyContainer id="experiences" backgroundColor='#f0f0f0' headerLabel='Experiences'>
      <AboutExperienceTimeline/> 
    </BodyContainer>
  );
}