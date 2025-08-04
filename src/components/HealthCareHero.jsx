import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

const HealthcareHero = () => {
  return (
    <Container fluid className="">

      <Row className=" p-5 bg-light">
        {/* Image Section */}
        <Col md={6} >
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR22Yyr_uFYlE9wj0-8FoG3TRRl2Y9v-cx_w&s" alt="Healthcare professionals" fluid rounded width='100%' />
        </Col>

        {/* Content Section */}
        <Col md={6} className='px-5'>
          <h2><strong>Become a</strong> </h2>
          <h1 className="mb-4">
            <strong>  Successful Healthcare Professional with <span className="text-primary">MedLabs</span></strong>
          </h1>
          <ul className="list-unstyled fs-5 mb-3">
            <Row>
              <Col md={6}>
                <li><strong className="text-primary fs-2">10,000+</strong> <br></br>Students Trained</li><br />
                <li><strong className="text-primary fs-2">2,000+</strong><br></br> Healthcare Employers</li>
              </Col>
              <Col md={6}>
                <li><strong className="text-primary fs-2">98%</strong> <br></br>Placement Rate</li><br />
                <li><strong className="text-primary fs-2">20+</strong><br></br> Partner Campuses Across India</li>
              </Col>
            </Row>
            <br />
          </ul>
          <h5 className="lead">
            Kickstart your career with a salary of up to <strong className="text-primary fs-5">₹50,000/month</strong> per month.
          </h5>
        </Col>
      </Row>

    </Container>
  );
};

export default HealthcareHero;