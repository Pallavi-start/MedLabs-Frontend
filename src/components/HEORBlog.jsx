import React from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Badge } from 'react-bootstrap';

// HEOR Blog Page - single-file React component using React Bootstrap
// Usage: save as src/components/HEORBlog.jsx and import into your app.
// Make sure react-bootstrap and bootstrap CSS are installed and imported in index.js:
// npm install react-bootstrap bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HEORBlog() {
  return (
    <div>
      {/* Hero */}
      <section className="py-5 bg-white border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="display-6 fw-bold">HEOR & Market Access: The Data-Driven Path to Patient Access</h1>
              <p className="lead text-muted my-3">
                Health Economics & Outcomes Research (HEOR) combines economics, real-world evidence, and policy to
                demonstrate the value of therapies and secure patient access worldwide.
              </p>
             
            </Col>
            <Col md={4} className="text-center mt-4 mt-md-0">
              <Image
                src="/blog3.png"
                alt="HEOR and Market Access"
                fluid
                rounded
                style={{ maxHeight: 520, objectFit: 'cover' }}
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
                  <h3>What is HEOR?</h3>
                  <p>
                    HEOR evaluates the economic and clinical value of health interventions using cost-effectiveness
                    models, budget impact analyses, and real-world data. These insights inform pricing, reimbursement,
                    and access decisions taken by payers and health systems globally.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Why HEOR matters for fresh graduates</h3>
                  <p>
                    HEOR is a specialized and growing field. Graduates with skills in modeling, data analysis, and
                    policy interpretation are highly sought-after because companies must demonstrate value to secure
                    reimbursement and market access.
                  </p>

                  <h5 className="mt-3">Common responsibilities</h5>
                  <ListGroup className="mb-3">
                    <ListGroup.Item>Building cost-effectiveness and budget impact models (Excel/TreeAge/R)</ListGroup.Item>
                    <ListGroup.Item>Analyzing real-world data from claims, registries, and EHRs</ListGroup.Item>
                    <ListGroup.Item>Conducting literature reviews and HTA submissions</ListGroup.Item>
                    <ListGroup.Item>Preparing payer-facing value dossiers and slide decks</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Skills to focus on</h3>
                  <Row>
                    <Col md={6}>
                      <ul>
                        <li>Health economic modeling (cost-effectiveness, Markov models)</li>
                        <li>Budget impact analysis</li>
                        <li>Advanced Excel and VBA</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul>
                        <li>Real-world evidence methods and data handling</li>
                        <li>Statistical software (R, SAS) basics</li>
                        <li>Understanding of HTA and payer decision-making</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Where you can work</h3>
                  <p>
                    Employers include global CROs and consulting firms, boutique HEOR consultancies, and internal value
                    & access teams at pharmaceutical companies. Examples: Parexel, ICON, Syneos Health, Trinity Life
                    Sciences, and ClearView.
                  </p>

                  <h5 className="mt-3">Career trajectory</h5>
                  <p>
                    Entry-level analysts often move into senior modeling, HEOR project leadership, pricing strategy, or
                    consulting manager roles as they gain experience on international HTA and payer projects.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Success stories</h3>
                  <p>
                    Focused HEOR training that produces a sample cost-effectiveness model or RWE analysis has helped many
                    candidates win analyst roles at CROs and consultancies. Practical portfolios and case studies
                    demonstrate readiness to employers.
                  </p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h3>Final thoughts</h3>
                  <p>
                    For students interested in both quantitative analysis and healthcare policy, HEOR offers a meaningful
                    career with global impact. With increasing demand for value-focused evidence, HEOR is likely to be a
                    resilient and rewarding career choice.
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
                  <p className="mb-1">Entry roles: <Badge bg="secondary">HEOR Analyst</Badge></p>
                  <p className="mb-1">Key tools: <Badge bg="secondary">Excel</Badge> <Badge bg="secondary">R / SAS</Badge></p>
                  <p className="mb-1">Top employers: <Badge bg="secondary">Parexel</Badge> <Badge bg="secondary">ICON</Badge></p>
                </Card.Body>
              </Card>

              <Card className="mb-3">
                <Card.Body>
                  <h5>Recommended exercises</h5>
                  <ol>
                    <li>Build a simple cost-effectiveness model in Excel</li>
                    <li>Run a basic budget impact analysis for a hypothetical drug</li>
                    <li>Perform a short RWE literature review and summarize the findings</li>
                  </ol>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h5>Course CTA</h5>
                  <p className="small text-muted">Want practical HEOR training? Learn modeling, RWE methods, and HTA submissions.</p>
                  
                </Card.Body>
              </Card>
            </aside>
          </Col>
        </Row>

        
      
      </Container>
    </div>
  );
}
