import React from 'react';
import { Container, Row, Col, Button, Image, Card, Modal } from 'react-bootstrap';
import { useState } from 'react';
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container fluid className="my-" style={{ position: 'relative', }}>
      <Row className=" bg-secondary text-white  text-center   text-center align-items-center " style={{ height: '400px', position: '', zIndex: 2 }}>
        <Col >
          <h1><strong>Still unsure?</strong></h1>
          <h1><strong> We'll help you find the right program.</strong></h1>
          <Button className='bg-white text-dark p-2 m-4' onClick={handleShow} aria-label="Talk to a counselor">
            Ckeck your eligibility
          </Button>
        </Col>
     </Row>

      <Row className=" d-flex justify-content-center bg-light text-center  "
        style={{
          backgroundColor: 'blue',
          height: '100px',
          marginTop: '-60px',
          zIndex: 3,
          position: 'absolute',
          width: '80%',
          marginLeft: '10%',
          marginRight: '10%',
        }}>

        <Col className='shadow-lg  p-5 className=" align-items-center bg-white '>

          <h1 className=" mb-3">Explore the MedLabs App</h1>
          <div className="d-flex justify-content-center gap-3 flex-wrap ">
            <a href="https://play.google.com" target="_blank" rel="">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4qAyl3_O4SLbPQPAQU0FWSaR6UFullnshw&s" alt="Get it on Google Play" height={50} />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="g">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6n8fLmlX1GlWkl8Okvf-mr9SW8Gf-dasBg&s" alt="Download on the App Store" height={50} />
            </a>
          </div>
        </Col>

      </Row>
      <Row className="mb-4 border  text-center align-items-center bg-white" style={{ zIndex: 1, position: '', paddingTop: '300px' }}>
        <Col md={4} >
          <h5>MedLabs - India's Best Institute for Healthcare Education</h5>
          <p className="small">
            Recognized by ET Edge, 2024<br />
            Programs: Optometry, MLT, Hospital Administration, OTT, MRIT & more<br />
            Degrees: Bachelor's, B.Sc., B.Sc. (Hons.) - in collaboration with HEI partners & as per UGC norms
          </p>
        </Col>

        <Col md={2} >
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#programs" className=" text-dark text-decoration-none">Programs</a></li>
            <li><a href="#campuses" className="text-dark text-decoration-none">Campuses</a></li>
            <li><a href="#partner" className="text-dark text-decoration-none">Partner With Us</a></li>
          </ul>
        </Col>

        <Col md={2}>
          <h6>Resources</h6>
          <ul className="list-unstyled">
            <li><a href="#privacy" className="text-dark text-decoration-none">Privacy Policy</a></li>
            <li><a href="#terms" className="text-dark text-decoration-none">Terms & Conditions</a></li>
            <li><a href="#refund" className="text-dark text-decoration-none">Refund Policy</a></li>
            <li><a href="#student-policy" className="text-dark text-decoration-none">Student Policy</a></li>
          </ul>
        </Col>

        <Col md={2}>
          <h6>Follow Us</h6>
          <ul className="list-unstyled">
            <li><a href="#privacy" className="text-dark text-decoration-none" />Instagram</li>
            <li><a href="#privacy" className="text-dark text-decoration-none" />Facebook</li>
            <li><a href="#privacy" className="text-dark text-decoration-none" />LinkedIn</li>
            <li><a href="#privacy" className="text-dark text-decoration-none" />YouTube</li>
            <li><a href="#privacy" className="text-dark text-decoration-none" />X (formerly Twitter)</li>
          </ul>
        </Col>

        <Col md={2}>
          <h6>Contact</h6>
          <p className="small mb-1"><strong>Registered Office:</strong><br />20/6, Nuchem Compound, Mathura Road, Faridabad - 121006, Haryana</p>
          <p className="small mb-1"><strong>Corporate Office:</strong><br />WeWork, Vi-John Tower, 393, Udyog Vihar Phase 3 Rd, Gurugram, Haryana - 122016</p>
          <p className="small mb-1"><strong>Phone:</strong> +91 78 2727 6767</p>
          <p className="small"><strong>Email:</strong> info@MedLabs.org</p>
        </Col>

        <Col>
          <Card className="text-center p-4 bg-light border-0">

            <h5 className="fw-bold">Get Inspired</h5>
            <Card.Text className="mt-2">
              MedLabs is India's best institute for healthcare and paramedical degree programs (B.Sc. & B. Voc.) in OTT, MLT, RMIT, Optom & HA - affiliated with NSDC, UGC-RNTU, UGC-HRIT, and other top universities.
            </Card.Text>
            <small>© {new Date().getFullYear()} MedLabs Institute. All rights reserved.</small>
          </Card>
        </Col>
      </Row>


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


    </Container>
  );
};

export default Footer