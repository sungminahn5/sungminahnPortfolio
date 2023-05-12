import React, {useState} from 'react';

import {faCopy, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

export default function LetsTalkModal({
    showModal,
    setShowModal,
}) {
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
    <Modal
      dialogClassName="modal-90w"
      show={showModal} 
      onHide={()=>{setShowModal(false)}}
    >
      <Modal.Header closeButton>
        <Modal.Title>Let's Talk!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" >
          <Container>
            <Row style={{paddingBottom: "10px"}}>
              <Col className="col-3"><b>Email:</b></Col>
              <Col className="col-6">
                <span>sungmin.sam5@gmail.com</span>
              </Col>
              <Col className="col-3">
                <Button 
                  title={
                    isEmailCopied ? 'copied': 'copy to clipboard'
                    }
                  variant={
                      isEmailCopied ? 'secondary' : 'primary'
                    }
                  onClick={copyEmail}
                >
                  <FontAwesomeIcon 
                    className='button-icon-label-spacing'
                    icon={faCopy} 
                  />
                  {isEmailCopied? "Copied": "Copy"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-3"><b>LinkedIn:</b></Col>
              <Col className="col-6">
                <a 
                  href="https://www.linkedin.com/in/sung-min-ahn/"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/sung-min-ahn/
                </a>
              </Col>
              <Col className="col-3">
                <Button title="Open in new tab"
                  variant="primary"
                  href="https://www.linkedin.com/in/sung-min-ahn/"
                  target="_blank">
                  <FontAwesomeIcon
                    className='button-icon-label-spacing'
                    icon={faArrowUpRightFromSquare}
                  />
                  Open
                </Button>
              </Col>
            </Row>
          </Container>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}