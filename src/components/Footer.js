import React from 'react'
import "../styles/footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assests/images/logonew.png"

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Container>
                <Row className='footer-wrapper-row'>
                    <Col className='footer-wrapper-row-col'>
                        <img src={logo} alt="" />
                    </Col>
                    <Col className='footer-wrapper-row-col2'>
                        <p>© 2024 Portfolio</p>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Footer
