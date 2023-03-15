import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TermsAndConditions(){
    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <a onClick={handleShow}>
                Terms and Conditions
            </a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Agreement to terms of use <br/>
                    These terms and conditions constitute a legally bidning agreement made between all users and the Heal advice Group in terms of your use and access to our website and services <br/>
                    By using our website you have read, understood and agreed to be bound by all of the terms of use. If you do not agree then you are prohibited from the use of this site and you must discontinue your use IMMEDIATELY.
                    <br/>
                    Our services are intended for users who are at least 18 years old. <br/>
                    The Health Advice Group is not liable for any medically related issues that come as a result of viewing our services. <br/>
                    THE WEBSITE DOES NOT PROVIDE MEDICAL CERTAINTY. Our content is intended as educational material only and should not be use for diagnosis or treatment.<br/>
                    You are responsible for your own health and saftey. Further Information on this will be found in our disclaimer. 
                    <br/><br/>
                    As a user of the Health Advice Groups Services, you agree not to:
                    <br/>- Modfiy, retrieve, access or view any unauthorised data without written permission from us.
                    <br/>- Trick, defraud or mislead us and other users, especially in any attempt gain access to sensitive content
                    <br/>- Improperly use our support services or submit false reports of abuse or misconduct
                    <br/>- Go against any copyright legislation, including copying or adpating the software made by us
                    <br/>- Use our services in a way that is inconsistent with any applicable laws or regulations
                    <br/><br/>
                    Review our privacy notice to understand use of your personal information on this site.
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

export default TermsAndConditions;