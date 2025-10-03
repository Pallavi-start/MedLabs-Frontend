import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup, Badge,} from 'react-bootstrap';

export default function PharmaForecastingPage() {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h1 className="display-6 fw-bold">Forecasting in the Pharmaceutical Industry</h1>
          <p className="lead">
            Forecasting is both an art and a science that shapes strategies, investments, and billion-dollar decisions. Analysts use patient-based modeling, market share assumptions, and historical analogues to predict uptake and competitive dynamics.
          </p>
         
        </Col>
        <Col md={6} className="text-md-end mt-4 mt-md-0">
          <img
            src="/blog5.png"
            alt="Forecasting illustration"
            style={{ maxWidth: 550 }}
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Key Concepts */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>S-curves</Card.Title>
              <Card.Text>
                Estimate therapy class adoption speed across physicians and patients, capturing real-world uptake patterns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>R-curves</Card.Title>
              <Card.Text>
                Model brand-specific uptake within therapy classes and forecast competitive positioning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Erosion Curves</Card.Title>
              <Card.Text>
                Account for competitor entry, patent expiry, and generic erosion to refine forecasts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Student Journeys */}
      <Row id="program" className="mb-4">
        <Col md={7}>
          <h4>Student Success Stories</h4>
          <p>
            Training with real-world forecasting projects prepares candidates to answer tough interview questions and transition into high-impact analytical roles.
          </p>

          <ListGroup className="mb-3">
            <ListGroup.Item>Sales role → Forecasting Analyst at ZS Associates with project on competitor cannibalization</ListGroup.Item>
            <ListGroup.Item>Student → Market Access Analyst at IQVIA by showcasing rare disease patient models</ListGroup.Item>
            <ListGroup.Item>Hands-on projects: uptake modeling, erosion planning, scenario simulations</ListGroup.Item>
          </ListGroup>

          <h5>Companies Hiring Forecasting Analysts</h5>
          <div className="d-flex flex-wrap gap-2 mb-2">
            {['ZS Associates', 'IQVIA', 'Deloitte', 'Accenture', 'Novartis', 'Pfizer'].map((c) => (
              <Badge key={c} bg="secondary" className="me-1">{c}</Badge>
            ))}
          </div>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Role Snapshot</Card.Title>
              <Card.Text>
                Forecasting roles blend technical modeling skills with strategic communication, bridging data and decisions for senior leadership.
              </Card.Text>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Why Forecasting Matters</Accordion.Header>
                  <Accordion.Body>
                    Accurate forecasting prevents both over-investment and under-investment, ensuring efficient allocation of pharma resources.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Skills in Demand</Accordion.Header>
                  <Accordion.Body>
                    Excel, SQL, visualization tools, business acumen, and understanding patient journeys, prescribing behavior, and payer dynamics.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Curriculum Snapshot */}
      <Row className="mb-4">
        <Col>
          <h4>Program Snapshot</h4>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 1</Card.Title>
                  <Card.Text>Introduction to pharma forecasting, S-curves, R-curves, erosion models</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 2</Card.Title>
                  <Card.Text>Hands-on Excel/SQL projects, uptake simulations, scenario planning</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 3</Card.Title>
                  <Card.Text>Case studies: oncology launches, rare disease modeling, patent expiry impact</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

   

      <footer className="mt-4 text-center small text-muted">© {new Date().getFullYear()} Pharma Forecasting • Sample page</footer>
    </Container>
  );
}