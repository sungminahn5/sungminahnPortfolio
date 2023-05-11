import React, {useState} from 'react';

import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function LetsTalkModal(
  {
    show = false,
  }
) {
  const [showModal, setShowModal] = useState(show);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const copyEmail = async () => {
    try{
      await navigator.clipboard.writeText('sungmin.sam5@gmail.com');
      setIsEmailCopied(true);
    }catch{
      setIsEmailCopied(false);
    }
  }

  return (
    <Modal show={showModal} onHide={setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Let's Talk!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" >
          <Container>
            <Row>
              <Col>Email:</Col>
              <Col>
                <span>sungmin.sam5@gmail.com</span>
                <Button title={
                  isEmailCopied ? 'copied': 'copy to clipboard'
                  }
                  variant={
                    isEmailCopied ? 'secondary' : 'primary'
                  }
                  onClick={copyEmail}>
                  <FontAwesomeIcon icon={faCopy}/>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>LinkedIn</Col>
              <Col><a href="https://www.linkedin.com/in/sung-min-ahn/" targe="_blank">linkedin.com/in/sung-min-ahn/</a></Col>
            </Row>
          </Container>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}