import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand to="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/teacher">Teacher</Nav.Link>
                    <Nav.Link as={Link} to="/student">Student</Nav.Link>
                </Nav>
            </Navbar>  
        </>
    )
}
