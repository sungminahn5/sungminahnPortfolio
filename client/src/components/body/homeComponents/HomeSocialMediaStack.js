import React, {useState} from 'react';

import {faGithub, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';

export default function HomeSocialMediaStack(){
  const [showModal, setShowModal] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  const copyEmail = async () => {
    try{
      await navigator.clipboard.writeText('sungmin.sam5@gmail.com');
      setIsEmailCopied(true);
    }catch{
      setIsEmailCopied(false);
    }
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Stack 
        className='social-media-icons'
        direction='horizontal' 
        gap={4}
      >
        <a
          className='social-media-white'
          href='https://www.linkedin.com/in/sung-min-ahn/'
          rel="noreferrer"
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a
          href='https://github.com/sungminahn5'
          rel="noreferrer"
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} scale={10}/>
        </a>
        <div onClick={handleShow}>
          <FontAwesomeIcon icon={faGoogle}/>
        </div>
      </Stack>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sungmin's email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack 
            direction='horizontal'
            className='justify-content-between'
          >
            <span>sungmin.sam5@gmail.com</span>
            <Button title={
                  isEmailCopied ? 'copied': 'copy to clipboard'
                }
              variant={
                  isEmailCopied ? 'secondary' : 'primary'
                }
              onClick={copyEmail}
            >
              <FontAwesomeIcon 
                className="button-icon-label-spacing"
                icon={faCopy} 
              />
              {isEmailCopied ? 'Copied': 'Copy'}
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}
