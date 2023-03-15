import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PrivacyPolicy(){
    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <a onClick={handleShow}>
                Privacy Policy
            </a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please read this privacy notice carefully as it will help you understand what we do with the information that we collect. <br/><br/>
                    We collect personal information that you voluntarily provide to us when you register on this website, when you participate in activities on the 
                    Website or otherwise when you contact us.The personal information that we collect depends on the context of your interactions with us and the Website. The personal information 
                    we collect may include the following:<br/>
                    - Usernames <br/>
                    - Names<br/>
                    - Passwords<br/>
                    - Location Data <br/>
                    - Symptoms and other Health Related data<br/><br/>
                    By using our website you give your consent and agree to the terms and conditions of our services. To see the terms and conditions access them in the link below 'Privacy Policy' at the footer.
                    <br/><br/>
                    Location Data is taken from what you input to the dashboards location. You rinput will not be stored into our database and as our site does not use cookies this information will be deleted after entry.
                    We do not use your devices geolocation for privacy and security reasons. The location given to us in the dasboard is in city format to avoid being precise for the users location while still providing accurate forecasts.
                    <br/><br/>
                    Closing this tab does not make you exempt from the rules of this privacy policy and our terms and conditions.

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

export default PrivacyPolicy;