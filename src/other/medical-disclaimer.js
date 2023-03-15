import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MedicalDisclaimer(){
    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <a onClick={handleShow}>
                Disclaimer
            </a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Medical Advice Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The content of the Health Advice Groups website is for information only, any diagnosis or treatments made do not have a warranty or assurance regarding accuracy or effectiveness from the Health Advice Group.<br/>
                    None of our content is made to substitute for professional medical advice. Always seek the advice of a qualified health provider regarding any serious medical concerns you may have.
                    Never disregard professional medical advice due to something you may have seen on this website. The Health Advice Group is NOT liable for any medical issues our users face due to the content we supply.
                    Please keep this disclaimer in mind when reviewing our resources and stay safe.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MedicalDisclaimer;