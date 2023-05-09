import React from 'react';

import BodyContainer from '../BodyContainer';
import AboutExperienceTimeline from './AboutExperienceTimeline';

export default function AboutContainer(){
  return (
    <BodyContainer id="experiences" backgroundColor='#f0f0f0' headerLabel='Experiences'>
      <AboutExperienceTimeline/> 
    </BodyContainer>
  );
}