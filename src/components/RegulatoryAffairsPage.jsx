import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup} from 'react-bootstrap';

export default function RegulatoryAffairsPage() {
  return (
    <Container className="py-5">
      {/* Hero */}
      <Row className=" mb-4">
        <Col md={8}>
          <h1 className="display-6 fw-bold">Regulatory Affairs: A Practical Career Path</h1>
          <p className="lead">
            Regulatory Affairs makes sure medicines and medical products meet safety, efficacy and quality standards before they reach patients.
            Less flashy than R&D, but essential — and full of global career opportunities for detail-oriented graduates.
          </p>

        </Col>
        <Col md={4} className="text-md-end mt-4 mt-md-0">
          <img
            src="/blog4.png"
            alt="Regulatory illustration"
            style={{ maxWidth: 550 }}
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Key benefits */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Hands-on Templates</Card.Title>
              <Card.Text>
                Work with mock submission templates (US, EU, India) and learn dossier-building from sample documents.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Guided Walkthroughs</Card.Title>
              <Card.Text>
                Step-by-step walkthroughs of common regulatory pathways, labeling changes, and post-approval obligations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Interview Ready</Card.Title>
              <Card.Text>
                Practical assignments that build the confidence to explain differences between authorities like USFDA, EMA & CDSCO.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Student Journey */}
      <Row id="program" className="mb-4">
        <Col md={7}>
          <h3>The Journey of One Student</h3>
          <p>
            A pharmacy graduate wanted to move into Regulatory Affairs but struggled to answer interview questions about submissions and
            documentation. After a structured RA program with hands-on assignments and mock templates, she could confidently explain
            USFDA vs EMA requirements and global labeling management — which helped her land a Regulatory Affairs Associate role at Cipla.
          </p>

          <ListGroup className="mb-3">
            <ListGroup.Item>Practical mock submission build: CTD/eCTD style dossiers</ListGroup.Item>
            <ListGroup.Item>Guided exercises: labeling change workflows</ListGroup.Item>
            <ListGroup.Item>Mock interviews & feedback</ListGroup.Item>
          </ListGroup>

      
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Career Progression</Card.Title>
              <Card.Text>
                Start as Regulatory Associate → Regulatory Coordinator → Regulatory Strategy → Global Submissions → Leadership.
                Roles combine science, policy and documentation with opportunities for global mobility.
              </Card.Text>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Why RA is rewarding</Accordion.Header>
                  <Accordion.Body>
                    Mix of scientific knowledge, legal/regulatory frameworks, and business strategy. Stable demand as companies expand globally.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Skills employers look for</Accordion.Header>
                  <Accordion.Body>
                    Attention to detail, regulatory guideline interpretation, strong written communication, and familiarity with submission
                    document types (e.g., CTD, clinical overviews, labeling).
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
          <h3>Program Snapshot</h3>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 1</Card.Title>
                  <Card.Text>Introduction to regulatory systems: USFDA, EMA, CDSCO basics</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 2</Card.Title>
                  <Card.Text>eCTD & dossier structure, templates and hands-on assembly</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Module 3</Card.Title>
                  <Card.Text>Labeling, safety reporting and global change management</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>


      <footer className="mt-4 text-center small text-muted">© {new Date().getFullYear()} Regulatory Careers</footer>
    </Container>
  );
}
