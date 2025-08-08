
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ApplyNow from './ApplyNow';
import { useState } from 'react';
import './Header.css'
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Navbar  expand="lg"className='Navbar my-0  pt-0 bg-light '>
      <Container className=''>
        <Navbar.Brand href="#home">
          <img
            src="/MedLabs.png"
            width="120"
            height="100"
            className="d-inline-block align-top me-2"
            alt="logo"
            padding='0px'
         
          />
        
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Centered Navigation */}
          <Nav className="mx-auto text-center fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Programs" id="nav-programs">
              <NavDropdown.Item as={Link} to="/AllPrograms">All Program</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OptometryLenskart">Optometry-Lenskart</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/MedicalLaboratoryTechnology">Medical Laboratory Technology(MLT)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HospitalAdminitration">Hospital Administration(HA)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OperationTheatreTechnology">Operation Theatre Teachnology(OTT)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/MedicalRadiologyAndImagingTechnology">Medical Radilogy and Imaging Technology(MRIT)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OperationTheatreTechnologyEye-Q">Operation Theatre Technology-Eye-Q</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to="/Campuses">Campuses</Nav.Link>
            <Nav.Link as={Link} to="/News&Blog">News&Blogs</Nav.Link>
            <NavDropdown title="More" id="nav-more">
              <NavDropdown.Item as={Link} to="/PrivacyPolicy">Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/TermsCondition">Terms & Conditions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/StudentPolicy">student Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/RefundPolicy">Refund Policy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PartnerWithUs">Partner With Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>


          <ApplyNow show={showModal} handleClose={() => setShowModal(false)}/>  
          <Button  onClick={() => setShowModal(true)} className="bg-secondary"  style={{
             
              borderRadius: '12px',
              padding: '15px 25px',
              border: 'none',
            }}>Apply Now</Button>


        </Navbar.Collapse>

      </Container>

    </Navbar>
   
  );
};

export default Header;




