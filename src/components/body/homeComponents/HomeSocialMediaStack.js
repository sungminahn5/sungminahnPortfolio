import React from 'react';

import {faGithub, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Stack from 'react-bootstrap/Stack';

export default function HomeSocialMediaStack(){
  return (
    <Stack direction='horizontal' gap={4} className='social-media-icons'>
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faGithub} scale={10}/>
      <FontAwesomeIcon icon={faGoogle}/>
    </Stack>
  );
}