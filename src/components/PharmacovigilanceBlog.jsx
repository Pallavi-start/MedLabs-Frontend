import React from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Badge } from 'react-bootstrap';


 function PharmacovigilanceBlog() {
  return (
    <div>
      {/* Hero */}
      <section className="py-5  border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="display-6 fw-bold">Why Pharmacovigilance Is a Stable & Global Career Choice</h3>
              <p className="lead text-muted my-3">
                Pharmacovigilance (PV) safeguards patient health by monitoring the safety of medicines. For fresh
                graduates from pharmacy and life-sciences programs, PV offers a reliable entry into the global
                pharmaceutical industry.
              </p>
            
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <Image
                src="/blog2.png"
                alt="Pharmacovigilance"
                fluid
                rounded
                style={{ maxHeight: 320, objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main content */}
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <article>
              <Card className="mb-4">
                <Card.Body>
                  <h3>What is Pharmacovigilance?</h3>
                  <p>
                    Pharmacovigilance ensures the safety of medicines by monitoring, collecting, and analyzing
                    adverse drug reactions. With the growth of new therapies, vaccines, and biologics, the demand for
                    safety professionals has increased globally.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Why it's a great fit for fresh graduates</h3>
                  <p>
                    PV is a stable career because drug safety monitoring is mandatory across all regulatory
                    jurisdictions. Entry-level roles such as Drug Safety Associate let freshers gain hands-on
                    experience with Individual Case Safety Reports (ICSRs), medical coding (MedDRA), and safety
                    databases (e.g. Argus).
                  </p>

                  <h5 className="mt-3">Typical responsibilities</h5>
                  <ListGroup className="mb-3">
                    <ListGroup.Item>Processing ICSRs and case intake</ListGroup.Item>
                    <ListGroup.Item>MedDRA coding and medical term mapping</ListGroup.Item>
                    <ListGroup.Item>Working with safety databases (Argus, ARISg, etc.)</ListGroup.Item>
                    <ListGroup.Item>Preparing case narratives and follow-ups</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Bridging the gap: Why training programs matter</h3>
                  <p>
                    Many academic programs focus on theory and leave students unprepared for industry workflows. Focused
                    PV training that simulates real-world case processing, coding exercises, and regulatory
                    requirements helps candidates stand out in interviews.
                  </p>

                  <h5 className="mt-3">Interview-ready skills</h5>
                  <Row>
                    <Col md={6}>
                      <ul>
                        <li>Hands-on ICSR practice</li>
                        <li>MedDRA familiarity</li>
                        <li>Argus or other safety DB exposure</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul>
                        <li>Understanding of FDA/EMA/CDSCO reporting timelines</li>
                        <li>Clear case narration skills</li>
                        <li>Attention to regulatory compliance</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Where will you work?</h3>
                  <p>
                    The PV job market is broad: global service providers, CROs, and pharmaceutical companies hire
                    extensively for entry-level PV roles. Examples include Accenture, Cognizant, TCS, Novartis, Sun
                    Pharma, and Dr. Reddy’s.
                  </p>

                  <h5 className="mt-3">Career growth</h5>
                  <p>
                    After 2-3 years in case processing, professionals often move into aggregate reporting, signal
                    detection, risk management, and QA roles — especially if they gain experience on international
                    projects.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Success stories</h3>
                  <p>
                    Practical training often transforms job prospects: students who complete hands-on PV programs have
                    secured roles at major service providers by demonstrating case handling and Argus workflow know-how
                    during interviews.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Final thoughts</h3>
                  <p>
                    For freshers in life sciences, pharmacovigilance offers career stability, global exposure, and rapid
                    skill-driven progression. Investing in practical training and mock case handling is the fastest way
                    to become job-ready.
                  </p>
                </Card.Body>
              </Card>
            </article>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <aside>
              <Card className="mb-3">
                <Card.Body>
                  <h5 className="mb-3">Quick Facts</h5>
                  <p className="mb-1">Entry roles: <Badge bg="secondary">Drug Safety Associate</Badge></p>
                  <p className="mb-1">Key tools: <Badge bg="secondary">Argus</Badge> <Badge bg="secondary">MedDRA</Badge></p>
                  <p className="mb-1">Top employers: <Badge bg="secondary">Accenture</Badge> <Badge bg="secondary">Cognizant</Badge></p>
                </Card.Body>
              </Card>

              <Card className="mb-3">
                <Card.Body>
                  <h5>Recommended exercises</h5>
                  <ol>
                    <li>Practice coding sample AE terms using MedDRA</li>
                    <li>Create 3 mock ICSRs (serious, non-serious, follow-up)</li>
                    <li>Familiarize with FDA/EMA reporting timelines</li>
                  </ol>
                  
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h5>Course CTA</h5>
                  <p className="small text-muted">Want a hands-on PV bootcamp? Learn case processing, MedDRA coding, and Argus workflows.</p>
                  
                </Card.Body>
              </Card>
            </aside>
          </Col>
        </Row>

        {/* Footer CTA */}
        <Row className="mt-5">
          <Col className="text-center">
            <Card className="p-4">
              <h4>Ready to start a career in Drug Safety?</h4>
              <p className="text-muted">Practice mock ICSRs, learn MedDRA, and get familiar with Argus to boost your hiring potential.</p>
              <div className="d-flex justify-content-center gap-2">

              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}export default  PharmacovigilanceBlog;
