import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PlaceIcon from '@mui/icons-material/Place';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section className='contact-wrapper' id='contact'>
            <Container className='contact-wrapper-container'>
                <h2 className='contact-wrapper-header'>Contact</h2>
                <div className='contact-wrapper-bottom'>
                    <p className='header'>You can reach out via email or by phone. Let's work together!</p>
                    <Row className='contact-wrapper-bottom-row'>
                        <Col>
                            <div className='contact-wrapper-bottom-row-col'>
                                <PhoneInTalkIcon />
                                <p className='m-0'>+91 9779311902</p>
                            </div>
                            <div className='contact-wrapper-bottom-row-col'>
                                <ContactMailIcon />
                                <p className='m-0'>nitingoyal658930@gmail.com</p>
                            </div>
                            <div className='contact-wrapper-bottom-row-col'>
                                <PlaceIcon />
                                <p className='m-0'>Bhikhi, District Mansa (151504), Punjab</p>
                            </div>
                        </Col>
                        <Col>
                            <iframe
                                title="Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.649086096171!2d75.51798509801777!3d30.060882770244262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391102cc65e9d0f5%3A0x7761e8562ad6c6dc!2sBhikhi%2C%20Punjab%20151504!5e0!3m2!1sen!2sin!4v1713268012172!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0, borderRadius: "10px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
