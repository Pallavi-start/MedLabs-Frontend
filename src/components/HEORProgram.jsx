// HEORProgram.jsx
import  { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';

import ApplyNow from './ApplyNow';

const roles = [
  'HEOR Analyst / Consultant',
  'Market Access Specialist',
  'RWE Scientist',
  'Health Policy Researcher',
  'Pharma / Healthcare Consultant'
];

const outcomes = [
  'Pharmacoeconomics and health outcomes research fundamentals',
  'Techniques for cost-effectiveness, cost-utility, and budget impact analysis',
  'Real-World Evidence (RWE) methods and data analytics',
  'Market access and healthcare decision-making frameworks',
  'Policy insights and HTA (Health Technology Assessment) methods'
];

const programs = [
  {
    title: 'Certificate in HEOR',
    duration: '2 months',
    fees: '₹49,999/-',
  },
  
 
]; 



const HEORProgram = () => {
 
const handleOpenPDF = () => {
  const link = document.createElement("a");
  link.href = '/HEOR BROCHURE ff.pdf';   // file must be inside public/
  link.download = "HEOR BROCHURE ff.pdf";
  link.click();
};

  const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">Health Economics & Outcomes Research (HEOR)</h1>
          <h5 className="lead">
            Shape healthcare decision-making and market access with advanced skills in HEOR and Real-World Evidence.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅Domain:</strong> Health Economics & Real-World Evidence</li>
            <li><strong>✅Eligibility:</strong> Graduate in Pharma / Life Sciences / Biotechnology / Medicine</li>
            <li><strong>✅Starting Salary:</strong> ₹4–8 LPA (varies by role)</li>
          </ul>
          <div className="d-flex gap-3">
            <ApplyNow show={showModal} handleClose={() => setShowModal(false)} />
            <Button onClick={() => setShowModal(true)} variant="secondary" className="mx-3">
              Apply Now<span>&#8599;</span>
            </Button>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwXUQMdkguUVOOaJ7jUHD_-pdCN7885Q9Dw&s"
            alt="HEOR Program"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>

      {/* Roles Section */}
      <Container className="my-5 p-5">
        <h1 className="text-center mb-4 p-5">Career Opportunities in HEOR</h1>
        <Row md={4} className="g-3 justify-content-center">
          {roles.map((role, idx) => (
            <Col key={idx}>
              <Button variant="outline-secondary" className="w-100 py-3 fw-semibold text-dark">
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjoGayCYqW8Bv142Qf11-177VE9e5zGznqw&s"
            alt="HEOR Outcomes"
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

       {/* Programs Section */}
       <Row className="p-5">
     <Col>
       <h1 className="mb-4 text-center">Programs Offered</h1>
       <Row className="g-4 justify-content-center">
         {programs.map((program, idx) => (
           <Col md={4} lg={3} key={idx} className="d-flex justify-content-center">
             <Card className="h-100 shadow-sm text-center" style={{ minWidth: "250px" }}>
               <Card.Body>
                 <Card.Title>{program.title}</Card.Title>
                 <Card.Text>
                   <strong>Duration:</strong> {program.duration} <br />
                   <strong>Fees:</strong> {program.fees}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
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
                This program is designed for graduates who want to enter the healthcare, pharma, or consulting industry with HEOR expertise.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                Students gain exposure to statistical tools, RWE data platforms, and health economics modeling tools.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What are the job opportunities?</Accordion.Header>
              <Accordion.Body>
                Graduates can work as HEOR analysts, market access consultants, policy researchers, or RWE scientists.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>What support is provided?</Accordion.Header>
              <Accordion.Body>
                Career mentorship, live projects, HEOR case studies, and placement support with MedLabs partner companies are included.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default HEORProgram;

