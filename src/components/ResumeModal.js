import React from 'react'
import Modal from 'react-bootstrap/Modal';
import resume from "../assests/resume/latest_resume.pdf"
import CloseIcon from '@mui/icons-material/Close';
import "../styles/resumemodal.css"

const ResumeModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Resume
                </Modal.Title>
                <button className='editqrcode-modal-btn-close' onClick={props.onHide}>
                    <CloseIcon />
                </button>

            </Modal.Header>
            <Modal.Body>
                <iframe src={resume} title="Resume PDF" width="100%" height="500px"></iframe>
            </Modal.Body>

        </Modal>
    )
}

export default ResumeModal
