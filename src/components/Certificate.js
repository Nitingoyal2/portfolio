import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../styles/certificate.css"
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const Certificate = () => {
    return (
        <div className='certificate-wrapper'>
            <Container>
                <p className='certificate-wrapper-wrapper'>Certificate</p>
                <Row className='certificate-wrapper-row'>
                    <Col className='certificate-wrapper-row-col'>
                        <CardMembershipIcon />
                        <p className='certificate-wrapper-row-col-name m-0'> NIELIT Certificate : Augmented Bache Reality Virtual Reality( Online Webinar)</p>
                    </Col>
                    <Col className='certificate-wrapper-row-col'>
                        <CardMembershipIcon />
                        <p className='certificate-wrapper-row-col-name m-0'> NIELIT Certificate: Insight in Block Chain Technologies (Online Webinar)</p>
                    </Col>
                    <Col className='certificate-wrapper-row-col'>
                        <CardMembershipIcon />
                        <p className='certificate-wrapper-row-col-name m-0'> Web Development Training from Internshala</p>
                    </Col>
                    <Col className='certificate-wrapper-row-col'>
                        <CardMembershipIcon />
                        <p className='certificate-wrapper-row-col-name m-0'> Full stack Web Development Training from Sun Soft Technologies
                        </p>
                    </Col>
                    <Col className='certificate-wrapper-row-col'>
                        <CardMembershipIcon />
                        <p className='certificate-wrapper-row-col-name m-0'>Front-End Developer Intern Trainee from Destm Technology Pvt. Ltd. </p>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Certificate
