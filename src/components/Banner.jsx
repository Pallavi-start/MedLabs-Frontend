
import { Container, Row, Col, Button, Image,Modal } from 'react-bootstrap';
import "./Banner.css"
import ApplyNow from './ApplyNow';
import { useState } from 'react';
const Banner = () => {
    const [showModal, setShowModal] = useState(false);
     const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
  return (
     <Container fluid className=" bg-light   ">
      <Row fluid className="flex-column-reverse flex-md-row align-items-center bg-secondary text-white rounded-5 py-5 px-5 mx-5 ">
        {/* Text Section */}
        <Col md={6} className="px-4">
          <h1 className=" Banner mb-3">India's Best Institute for Healthcare Education</h1> <br/>
          <div className="mb-3">
        
            <ApplyNow show={showModal} handleClose={() => setShowModal(false)} />
         
             <Button variant="light" size=""className="ms-auto px-3 py-2  me-4" onClick={() => setShowModal(true)}>
                Apply now <span>&#8599;</span>
              </Button>
              <Button variant="outline-light" size="" className='px-3 py-2' onClick={handleShow} >
                Talk to a counselor
              </Button>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="  text-center"  >

          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9U-VXQU8TXAkjXkQrkBdlwvspHnujjkeYg&s"
            alt="Healthcare professionals"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover " />


        </Col>
         <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Talk to a Counselor</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <p>We're just a call away to help you know more about MedLabs</p>
                
                  
                  <p className="fw-bold mt-3">Call us directly</p>
                  <Button variant="dark" className="mb-2" aria-label="Call MedLabs">
                    <i className="bi bi-telephone-fill me-2"></i>+91 000000000
                  </Button>
                  <p>(Available between 9 AM - 6 PM)</p>
                  <hr />
                  <p>OR</p>
                  <Button variant="success" aria-label="Talk via WhatsApp">
                    <i className="bi bi-whatsapp me-2"></i>Talk to us on WhatsApp
                  </Button>
                </Modal.Body>
              </Modal>
               </Row>
    </Container>
);
};
export default Banner;
