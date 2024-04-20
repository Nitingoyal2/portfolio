import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/home.css"
import Button from 'react-bootstrap/Button';
// import resume from "../assests/resume/resume (1).pdf"
import { HashLink as Link } from 'react-router-hash-link';
import ResumeModal from './ResumeModal';

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='home-wrapper py-5' id='home'>
        <Container>
          <h4 className='py-1'>Hi, My name is</h4>
          <h1 className='py-1'>NITIN,</h1>
          <h1 className='py-1'> A WEB DEVELOPER.</h1>
          <div className="d-flex py-5 home-wrapper-buttons" >

            {/* <a href={resume} download className='navbar-link'><Button className='button' onClick={() => setModalShow(true)}>Resume</Button></a> */}
            <Button className='button' onClick={() => setModalShow(true)}>Resume</Button>
            <Link to='#project' className='navbar-link' smooth={true}><Button className='button'>Projects</Button></Link>
          </div>
        </Container>
      </div>
      <ResumeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  )
}

export default Home
