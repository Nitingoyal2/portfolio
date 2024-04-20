import React from 'react'
import "../styles/education.css"
import { Col, Container, Row } from 'react-bootstrap'

const Education = () => {
    return (
        <div className='education-wrapper'>
            <Container>
                <p className='education-wrapper-header'>Education</p>
                <Row className='education-skill-wrapper'>
                    <Col className='education-skill-wrapper-col'>
                        <p className='year'>2020 - 2023</p>
                        <p className='name'>Master Of Computer Application</p>
                        <p className="university">Punjabi University Patiala</p>
                    </Col>
                    <Col className='education-skill-wrapper-col'>
                        <p className='year'>2017 - 2020</p>
                        <p className='name'>Bachelor Of Science (Computer Application)</p>
                        <p className="university">Punjabi University Patiala</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Education
