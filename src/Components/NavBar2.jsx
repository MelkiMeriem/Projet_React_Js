import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';



export function NavBar2() {
    return (

        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>
                <Navbar.Brand href="/">Wassalni.tn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link  className={"li"} to={"/Covoiturage"}>Home</Link>
                        <Link className={"li"} to={"/Covoiturage"}>Profile</Link>
                        <Link className={"li"} to={"/Login"}>Log out</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

