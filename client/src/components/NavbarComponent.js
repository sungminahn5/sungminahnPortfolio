import React, {useState} from 'react';

import LetsTalkModal from './LetsTalkModal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent (){
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Navbar 
				bg="light" 
				expand="lg" 
				style={{padding:'15px 40px', position: 'fixed', width: '100%', zIndex: '5'}}
			>
				<Navbar.Brand href="/"><b>Sungmin.portfolio</b></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="/#home">Home</Nav.Link>
						<Nav.Link href="/#experiences">Experiences</Nav.Link>
						<Nav.Link href="/#projects">Projects</Nav.Link>
						<Nav.Link onClick={() => {setShowModal(true)}}><b>Let's Talk</b></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<LetsTalkModal 
				showModal={showModal} 
				setShowModal={setShowModal}
			/>
		</>
	);
}