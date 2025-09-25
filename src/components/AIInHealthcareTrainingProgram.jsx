import React, { useState } from 'react';
import { Row, Col, Image, Button, Container, Card, Accordion } from 'react-bootstrap';
import ApplyNow from './ApplyNow';

const outcomes = [
  'Fundamentals of Artificial Intelligence & Machine Learning in healthcare',
  'Applications of AI in diagnostics, drug discovery, and personalized medicine',
  'Hands-on training in Python, TensorFlow, Scikit-learn, and healthcare datasets',
  'Predictive analytics for patient outcomes, hospital resource optimization',
  'Ethical, regulatory, and data privacy considerations in healthcare AI'
];

const aiHealthcareRoles = [
  'AI Healthcare Specialist',
  'Clinical Data Scientist',
  'Healthcare Machine Learning Engineer',
  'Medical Imaging AI Analyst',
  'Digital Health Consultant',
  'AI Research Scientist in Healthcare'
];

const AIHealthcareTraining = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ Brochure download after form submission
  const handleOpenPDF = () => {
    const link = document.createElement("a");
    link.href = '/AI_In_Healthcare_Training_Program.pdf'; // file must be inside public/
    link.download = 'AI_In_Healthcare_Training_Program.pdf';
    link.click();
  };

  return (
    <Container fluid className="bg-light">
      {/* Hero Section */}
      <Row className="py-5 align-items-center">
        <Col md={6} className="text-start px-5">
          <h1 className="mb-3">AI In Healthcare Training Program</h1>
          <h5 className="lead">
            Learn how Artificial Intelligence is revolutionizing diagnostics, drug development, and patient care.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅ Domain:</strong> Artificial Intelligence & Data Science (Healthcare)</li>
            <li><strong>✅ Eligibility:</strong> BTech / MTech / MCA / BPharma / MPharma</li>
            <li><strong>✅ Fees:</strong> ₹30,000/-</li>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-Pl2CSGoRUJ0atuXpl-PFJdl_VRYq7aw2w&s"
            alt="AI in Healthcare"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>

      {/* Career Opportunities */}
      <Container className="my-5 p-5">
        <h1 className="text-center mb-4">Career Opportunities in AI Healthcare</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {aiHealthcareRoles.map((role, idx) => (
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduUxfVLr0xy47M_D84iIZAGtVon1hHVKlvQ&s"
            alt="AI outcomes"
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
                This program is designed for graduates and professionals interested in applying AI and machine learning in healthcare and life sciences.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 rounded p-2">
              <Accordion.Header>What tools will I learn?</Accordion.Header>
              <Accordion.Body>
                You will learn Python, TensorFlow, Scikit-learn, Power BI, and specialized AI frameworks used in healthcare.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 rounded p-2">
              <Accordion.Header>What job opportunities are available?</Accordion.Header>
              <Accordion.Body>
                Graduates can pursue roles such as AI Specialist, Healthcare Data Scientist, Clinical Data Analyst, or AI Consultant for hospitals and pharma companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3 rounded p-2">
              <Accordion.Header>What support is provided?</Accordion.Header>
              <Accordion.Body>
                Students receive mentorship, real-world projects, case studies, and placement assistance with MedLabs’ partner organizations.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default AIHealthcareTraining;
