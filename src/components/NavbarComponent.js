import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//TODO: Align brand and collapsible button with home
function NavbarComponent (){
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Sungmin.portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/projects">Projects</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;