import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';
import ApplyNow from './ApplyNow';

const outcomes = [
  'Core concepts of forecasting in the pharmaceutical industry',
  'Market sizing, demand estimation, and sales prediction',
  'Hands-on experience with Excel, Python, R, Power BI',
  'Scenario planning, risk analysis, and forecasting models',
  'Presentation, communication, and consulting skills for forecasting'
];

const pharmaForecastingRoles = [
  'Pharma Forecasting Analyst',
  'Demand Planning Specialist',
  'Market Research & Forecasting Consultant',
  'Business Insights Manager',
  'Healthcare Data Scientist',
  'Pharma Strategy & Operations Analyst'
]; 

const PharmaForecasting = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ Brochure download after form submission
  const handleOpenPDF = () => {
    const link = document.createElement("a");
    link.href = '/Pharma_Forecasting_Training_Plan.pdf'; // file must be inside public/
    link.download = 'Pharma_Forecasting_Training_Plan.pdf';
    link.click();
  };

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5 align-items-center">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">Pharma Forecasting</h1>
          <h5 className="lead">
            Gain expertise in pharmaceutical forecasting, demand planning, and data-driven decision-making.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅ Domain:</strong> Pharma Forecasting & Analytics</li>
            <li><strong>✅ Eligibility:</strong> BTech / MTech / MCA / BPharma / MPharma</li>
            <li><strong>✅ Fees:</strong> ₹20,000/-</li>
          </ul>

          <div className="d-flex gap-3">
            {/* ApplyNow modal */}
            <ApplyNow 
              show={showModal} 
              handleClose={() => setShowModal(false)} 
              onSuccess={handleOpenPDF} // automatically downloads brochure
            />

            <Button onClick={() => setShowModal(true)} variant="secondary">
              Apply Now <span>&#8599;</span>
            </Button>

            <Button onClick={() => setShowModal(true)} variant="outline-secondary">
              📘 Get Brochure
            </Button>
          </div>
        </Col>

      <Col md={6}>
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3sq95XSTNUVEh4N9KQj8cGwqhnVmvtU3ng&s"
    alt="Pharma Forecasting"
    fluid
    rounded
    style={{ height: '400px', objectFit: 'cover', width: '100%' }}
  />
</Col>
      </Row>

      {/* Career Opportunities */}
      <Container className="my-5 p-5">
        <h1 className="text-center mb-4">Career Opportunities in Pharma Forecasting</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {pharmaForecastingRoles.map((role, idx) => (
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
            src="https://img.freepik.com/free-vector/marketing-analytics-concept-illustration_114360-9226.jpg"
            alt="Forecasting outcomes"
            fluid
            rounded
            className="w-100 p-5 rounded"
          />
        </Col>
        <Col md={6}>
          <Card.Header as="h1" className="text-center p-4">What You'll Learn</Card.Header>
          <ul>
            {outcomes.map((point, idx) => (
              <li key={idx} className="mb-3 text-start fs-5">{point}</li>
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
                Designed for students and professionals aiming to build a career in pharma forecasting, market research, or business analytics.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                Excel, Power BI, Python, R, and forecasting models widely used in the industry.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What job opportunities are available?</Accordion.Header>
              <Accordion.Body>
                Roles such as Forecasting Analyst, Market Research Analyst, Business Analyst – Pharma, and Data Analyst in healthcare companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>What support is provided?</Accordion.Header>
              <Accordion.Body>
                Career mentorship, industry case studies, live projects, and placement assistance with MedLabs’ partner organizations.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default PharmaForecasting;
