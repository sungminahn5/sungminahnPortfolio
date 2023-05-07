import React, {useState} from 'react';

import {faGithub, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function HomeSocialMediaStack(){
  const [show, setShow] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  const copyEmail = async () => {
    try{
      await navigator.clipboard.writeText('sungmin.sam5@gmail.com');
      setIsEmailCopied(true);
    }catch{
      setIsEmailCopied(false);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Stack direction='horizontal' gap={4} className='social-media-icons'>
        <a className='social-media-white' href='https://www.linkedin.com/in/sung-min-ahn/' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href='https://github.com/sungminahn5' target='_blank'>
          <FontAwesomeIcon icon={faGithub} scale={10}/>
        </a>
        <a onClick={handleShow}><FontAwesomeIcon icon={faGoogle}/></a>
      </Stack>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sungmin's email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction='horizontal' className='justify-content-between'>
            <a>sungmin.sam5@gmail.com</a>
          <Button title={
            isEmailCopied ? 'copied': 'copy to clipboard'
            }
            variant={
              isEmailCopied ? 'secondary' : 'primary'
            }
            onClick={copyEmail}><FontAwesomeIcon icon={faCopy}/></Button></Stack>
          </Modal.Body>
      </Modal>
    </>
  );
}
