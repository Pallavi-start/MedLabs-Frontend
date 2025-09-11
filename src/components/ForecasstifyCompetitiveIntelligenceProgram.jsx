import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';

import ApplyNow from './ApplyNow';

const outcomes = [
  'Understanding CI frameworks, ethics, and pharma-specific methodologies',
  'Techniques for monitoring competitors, pipeline drugs, and clinical trials',
  'Patent landscaping, regulatory intelligence, and market access research',
  'Hands-on training in secondary research databases and tools',
  'Business communication, presentations, and consulting mindset for pharma clients'
];

const ciRoles = [
  'Competitive Intelligence Analyst',
  'Market Research Specialist',
  'Business Strategy Consultant',
  'Pharma Competitive Intelligence Manager',
  'Healthcare Market Analyst'
];

const CompetitiveIntelligence = () => {
 
const handleOpenPDF = () => {
  const link = document.createElement("a");
  link.href = '/CompetitiveIntelligence-TrainingProgram.pdf';   // file must be inside public/
  link.download = "CompetitiveIntelligence-TrainingProgram.pdf";
  link.click();
};

 

  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">Competitive Intelligence Training Program</h1>
          <h5 className="lead">
            Gain expertise in pharma and healthcare competitive intelligence to support strategic business decisions.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅Domain:</strong> Market Research & Competitive Strategy (Pharma)</li>
            <li><strong>✅Eligibility:</strong> Btech/Mtech/MCA/BPharma/Mpharma</li>
            <li><strong>✅Fees:</strong>  ₹49,999<sup>*</sup></li>
          </ul>
          <div className="d-flex gap-3">
            <ApplyNow show={showModal} handleClose={() => setShowModal(false)} />
            <Button onClick={() => setShowModal(true)} variant="secondary" className="mx-3">Apply Now<span>&#8599;</span></Button>
                   <Button
             onClick={handleOpenPDF}
             variant="outline-secondary"
           >
             📘 Get Brochure
           </Button>
          </div>
        </Col>
        <Col md={6}>
          <Image
            src="https://img.freepik.com/free-photo/businessman-analyzing-data-charts-laptop_53876-25079.jpg"
            alt="Competitive Intelligence"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>
   <Row>

    <Container className="my-5 p-5">
  <h1 className="text-center mb-4 p-5">Career Opportunities in Competitive Intelligence</h1>
  <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
    {ciRoles.map((role, idx) => (
      <Col key={idx}>
        <Button 
          variant="light" 
          className="w-100 py-3 fw-semibold border rounded-3 shadow-sm text-dark hover-shadow transition"
        >
          {role}
        </Button>
      </Col>
    ))}
  </Row>
</Container>
   </Row>

      {/* Outcomes Section */}
      <Row className="my-5 bg-secondary rounded text-white">
        <Col md={6}>
          <Image
            src="https://img.freepik.com/premium-photo/competitive-analysis-strategy-business-intelligence-dashboard_771335-42368.jpg"
            alt="Competitive Intelligence Outcomes"
            fluid
            rounded
            className="w-100 p-5 rounded"
          />
        </Col>
        <Col md={5}>
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
              <Accordion.Header>Who is this program for?</Accordion.Header>
              <Accordion.Body>
                Ideal for graduates and professionals who want to enter the pharma and healthcare consulting industry with a focus on competitive intelligence and strategic research.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What skills will I gain?</Accordion.Header>
              <Accordion.Body>
                You’ll master secondary research, pharma databases, patent analysis, pipeline tracking, and CI reporting frameworks.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What are the career opportunities?</Accordion.Header>
              <Accordion.Body>
                Graduates can work with pharma/healthcare consulting firms, CI agencies, KPOs, or in-house strategy teams of pharma companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>Is placement support available?</Accordion.Header>
              <Accordion.Body>
                Yes, MedLabs provides placement assistance, mock interviews, and connects students with its pharma & consulting partner network.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default CompetitiveIntelligence;
