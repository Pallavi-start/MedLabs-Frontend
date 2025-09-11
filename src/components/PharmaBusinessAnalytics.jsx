import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';

import ApplyNow from './ApplyNow';

const pharmaAnalyticsRoles = [
  'Pharma Business Analyst',
  'Healthcare Data Analyst',
  'Market Access & Analytics Specialist',
  'Pharma Forecasting Analyst',
  'Sales & Marketing Analytics Manager',
  'Healthcare Strategy Consultant'
];



const outcomes = [
  'Pharma business fundamentals, clinical research, HEOR & RWE concepts',
  'Techniques for data analytics, statistical modeling, and forecasting',
  'Use of tools like Excel, Python, R, Power BI, and SAS',
  'Market access, pricing analytics, and regulatory insights',
  'Business communication, presentation, and consulting skills'
];


const campuses = [
  {
    name: 'Apeejay Stya University',
    location: 'Gurugram, Haryana',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s',
    programs: 'Pharma Business Analytics, MRIT, MLT',
    accreditation: "NAAC 'A' Graded",
  },
  {
    name: 'Ashoka Institute of Technology & Management',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&s',
    programs: 'Pharma Analytics, MLT',
    accreditation: 'UGC Recognised',
  },
  {
    name: 'Awadh Public Charitable Trust (APCT)',
    location: 'Delhi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&s',
    programs: 'Pharma Analytics, OTT',
    accreditation: "NAAC 'A' Graded",
  }
];

const PharmaBusinessAnalytics = () => {

const handleOpenPDF = () => {
  const link = document.createElement("a");
  link.href = '/Pharma-Business-Analytics.pdf';   // file must be inside public/
  link.download = "'Pharma-Business-Analytics.pdf'";
  link.click();
};

  const [showAll, setShowAll] = useState(false);
  const displayedCampuses = showAll ? campuses : campuses.slice(0, 3);

  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">Pharma Business Analytics</h1>
          <h5 className="lead">
            Transform pharma and healthcare decision-making with the power of analytics and real-world evidence.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅Domain:</strong> Business & Data Analytics (Pharmaceutical Industry)</li>
            <li><strong>✅Eligibility:</strong>Btech/Mtech/MCA/BPharma/Mpharma</li>
            <li><strong>✅Fees:</strong>₹49,999/-</li>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMz65CSexkCaytmKVuqauG8GSuPy6o6E-_w&s"
            alt="Pharma Business Analytics"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>
   <Container className="my-5 p-5">
   <h1 className="text-center mb-4 p-5">Career Opportunities in Pharma Business Analytics</h1>
   <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
    {pharmaAnalyticsRoles.map((role, idx) => (
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

      {/* Outcomes Section */}
      <Row className="my-5 bg-secondary rounded text-white">
        <Col md={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y_4dCmfFcZ77JYpMFFEf-04b-JnOyAYg-Q&s"
            alt="Analytics outcomes"
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
                This program is designed for graduates who want to enter the pharma, healthcare, or consulting industry with strong analytical and business skills.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                Students gain hands-on experience with Excel, Power BI, R, Python, SAS, and other industry-standard analytics platforms.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What are the job opportunities?</Accordion.Header>
              <Accordion.Body>
                Graduates can pursue careers as business analysts, forecasting specialists, HEOR analysts, or consultants with top pharma and healthcare companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>What support is provided?</Accordion.Header>
              <Accordion.Body>
                Students receive career mentorship, live projects, industry case studies, and placement support with MedLabs’ partner organizations.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default PharmaBusinessAnalytics;
