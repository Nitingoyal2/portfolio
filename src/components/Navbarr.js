import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assests/images/logonew.png"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "../styles/navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import ResumeModal from './ResumeModal';

const Navbarr = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="d-inline-block align-top logo-img"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', gap: "20px" }}
                            navbarScroll
                        >
                            <Link to='#home' className='navbar-link' smooth={true}>Home</Link>
                            <Link to='#about' className='navbar-link' smooth={true}>About </Link>
                            <Link to='#project' className='navbar-link' smooth={true}>Projects</Link>
                            <Link to='#skills' className='navbar-link' smooth={true}>Skills</Link>
                            <Link className='navbar-link' onClick={() => setModalShow(true)}>Resume</Link>

                        </Nav>


                        <Link to='#contact' className='navbar-link' smooth={true}><Button className='button'>Contact</Button></Link>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <ResumeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </>
    )
}

export default Navbarr
