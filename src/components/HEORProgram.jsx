import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';
import ApplyNow from './ApplyNow';

const outcomes = [
  'Fundamentals of Health Economics and Outcomes Research (HEOR)',
  'Real-World Evidence (RWE) generation and applications',
  'Pharmacoeconomics, cost-effectiveness & budget impact analysis',
  'Patient-reported outcomes and quality of life measures',
  'Hands-on tools: Excel, Power BI, and HEOR modeling software',
  'Ethical, policy, and regulatory aspects in HEOR'
];

const heorRoles = [
  'HEOR Analyst',
  'Real-World Evidence (RWE) Specialist',
  'Pharmacoeconomics Researcher',
  'Market Access Associate',
  'Health Policy Consultant',
  'HEOR Scientist in Pharma/Consulting'
];

const HEORProgram = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ Brochure download
  const handleOpenPDF = () => {
    const link = document.createElement("a");
    link.href = '/HEOR BROCHURE ff.pdf';   // file should be in public/
    link.download = 'HEOR BROCHURE ff.pdf';
    link.click();
  };

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5 align-items-center">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">HEOR & Market Access</h1>
          <h5 className="lead">
            Gain expertise in Health Economics and Outcomes Research to support evidence-based decision-making in healthcare and pharma.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅ Domain:</strong> Health Economics & Outcomes Research</li>
            <li><strong>✅ Eligibility:</strong> BTech / MTech / MCA / BPharma / MPharma</li>
            <li><strong>✅ Fees:</strong> ₹35,000/-</li>
          </ul>

          <div className="d-flex gap-3">
            {/* Admission Form Modal */}
            <ApplyNow 
              show={showModal} 
              handleClose={() => setShowModal(false)} 
              onSuccess={handleOpenPDF}   // ✅ after submit → download brochure
            />

            {/* Apply Now Button */}
            <Button onClick={() => setShowModal(true)} variant="secondary">
              Apply Now <span>&#8599;</span>
            </Button>

            {/* Get Brochure → also opens Form */}
            <Button
              onClick={() => setShowModal(true)}
              variant="outline-secondary"
            >
              📘 Get Brochure
            </Button>
          </div>
        </Col>

        <Col md={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwXUQMdkguUVOOaJ7jUHD_-pdCN7885Q9Dw&s"
            alt="HEOR Program"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>

      {/* Career Opportunities */}
      <Container className="my-5 p-5">
        <h1 className="text-center mb-4">Career Opportunities in HEOR</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {heorRoles.map((role, idx) => (
            <Col key={idx}>
              <Button 
                variant="light" 
                className="w-100 py-3 fw-semibold border rounded-3 shadow-sm text-dark"
              >
                {role}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Outcomes Section */}
      <Row className="my-5 bg-secondary rounded text-white align-items-center">
        <Col md={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjoGayCYqW8Bv142Qf11-177VE9e5zGznqw&s"
            alt="HEOR outcomes"
            fluid
            rounded
            className="w-100 p-5 rounded"
          />
        </Col>
        <Col md={6}>
          <Card.Header as="h1" className="text-center p-4">What You'll Learn</Card.Header>
          <ul>
            {outcomes.map((point, idx) => (
              <li key={idx} className="mb-3 text-start fs-5">
                {point}
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="p-5">
        <Col md={6}>
          <h1 className="mb-4">Frequently Asked Questions</h1>
        </Col>
        <Col md={6}>
          <Accordion>
            <Accordion.Item eventKey="0" className="mb-3 rounded p-2">
              <Accordion.Header>Who can join this program?</Accordion.Header>
              <Accordion.Body>
                This program is for pharmacy, life sciences, public health, and healthcare management professionals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                You will learn Excel, Power BI, real-world data analysis, and HEOR modeling frameworks.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What job opportunities are available?</Accordion.Header>
              <Accordion.Body>
                Graduates can work in pharma, consulting, market access, or policy research as HEOR Analysts, RWE Specialists, or Health Policy Consultants.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>Will I get placement support?</Accordion.Header>
              <Accordion.Body>
                Yes, MedLabs provides mentorship, real-world projects, and placement assistance with its partner organizations.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default HEORProgram;
