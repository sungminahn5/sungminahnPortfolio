import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LetsTalkModal from './LetsTalkModal';

//TODO: Align brand and collapsible button with home
function NavbarComponent (){
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Navbar bg="light" expand="lg" style={{padding:'15px 40px', position: 'fixed', width: '100%', zIndex: '5'}}>
				<Navbar.Brand href="/"><b>Sungmin.portfolio</b></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="/#home">Home</Nav.Link>
						<Nav.Link href="/#experiences">Experiences</Nav.Link>
						<Nav.Link href="/#projects">Projects</Nav.Link>
						<Nav.Link ><b>Let's Talk</b></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<LetsTalkModal show={showModal}/>
		</>
	);
}

export default NavbarComponent;