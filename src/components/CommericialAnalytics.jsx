import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Accordion } from 'react-bootstrap';
import ApplyNow from './ApplyNow';

const outcomes = [
  'Fundamentals of Commercial Analytics in pharma and healthcare',
  'Market access, sales forecasting, and revenue optimization techniques',
  'Hands-on training in Excel, SQL, Python, and visualization tools like Power BI/Tableau',
  'Analytics for brand performance, promotional effectiveness, and customer insights',
  'Ethical, compliance, and data privacy considerations in pharmaceutical analytics'
];

const commercialAnalyticsRoles = [
  'Commercial Analytics Specialist',
  'Sales & Marketing Data Analyst',
  'Business Intelligence Analyst',
  'Market Access Analyst',
  'Pharma Commercial Insights Consultant',
  'Forecasting & Strategy Analyst'
];

const CommercialAnalyticsTraining = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ Brochure download after form submission
  const handleOpenPDF = () => {
    const link = document.createElement("a");
    link.href = '/Commercial Analytics Training Program.pdf'; // place file in public/
    link.download = "Commercial Analytics Training Program.pdf";
    link.click();
  };

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5 align-items-center">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">Commercial Analytics </h1>
          <h5 className="lead">
            Master the skills to analyze market performance, sales data, and business outcomes in the pharmaceutical and healthcare industries.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅ Domain:</strong> Pharma Business & Data Analytics</li>
            <li><strong>✅ Eligibility:</strong> BTech / MTech / MCA / BPharma / MPharma</li>
            <li><strong>✅ Fees:</strong> ₹20,000/-</li>
          </ul>

          <div className="d-flex gap-3">
            <ApplyNow show={showModal} handleClose={() => setShowModal(false)} onSuccess={handleOpenPDF} />
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
            src="/commercialAnalytics.png" // file in public/
            alt="Commercial Analytics"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>

      {/* Career Opportunities */}
      <Container className="my-5 p-5">
        <h1 className="text-center mb-4 p-5">Career Opportunities in Commercial Analytics</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {commercialAnalyticsRoles.map((role, idx) => (
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
            src="https://www.shutterstock.com/shutterstock/videos/3597399755/thumb/1.jpg?ip=x480"
            alt="Analytics outcomes"
            fluid
            rounded
            className="w-100 p-5 rounded"
          />
        </Col>
        <Col md={6}>
          <h2 className="text-center p-4">What You'll Learn</h2>
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
                Designed for pharma graduates, MBAs, data enthusiasts, and professionals aiming for commercial and business analytics roles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                Hands-on experience with Excel, SQL, Python, Power BI, Tableau, and pharma-specific analytics frameworks.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What job opportunities are available?</Accordion.Header>
              <Accordion.Body>
                Business Analyst, Commercial Insights Specialist, Market Access Analyst, Pharma BI Consultant, and more.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>What support is provided?</Accordion.Header>
              <Accordion.Body>
                Mentorship, real-world case studies, industry projects, and placement assistance with MedLabs’ partner organizations.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default CommercialAnalyticsTraining;
