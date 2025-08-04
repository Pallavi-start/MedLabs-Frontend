import React from 'react';
import { Container, Row, Col, Card, Button, Image, Modal, Form, Accordion } from 'react-bootstrap';
import { useState } from 'react';
import { FaMapMarkerAlt, FaBookOpen, FaShieldAlt } from 'react-icons/fa';




const OperationTheatreTechnologyEye = () => {
   const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank');
   }
  const OOTRoles = [
    'OT Technician',
    'Surgical Coordinator',
    'Assittant to Opthalmic Surgeon',
    'OT Supervisor',
    'Ophthalmic Surgical Coordinator',
    'Clinical Trainer'
  ]
  const outcomes = [
    ' Conditional internship with a stipend up to ₹1,20,000*, based on location',
    'Conditional offer letter for jobs at 30+ Eye-Q hospitals across India (final hiring depends on internship       performance and employer discretion)',
    'Curriculum includes Eye-Q-designed training modules and regular store visits',
    'Learn anatomy, physiology, OT procedures, equipment handling, and surgical techniques',
    ' Receive an exclusive Award of Completion from Eye-Q'
  ]
  const programs = [
    {
      name: "B.Voc.OTT",
      duration: "3 years (Including 18 months at Eye-Q)",
      fees: "₹3,90,000 /- (Pay per month, semester or year)"
    },

  ]
  const campuses = [
    {
      name: "TBI - KIET",
      location: "Ghaziabad, Uttar Pradesh",
      programs: 'MLT, OTT-Eye-Q',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s',
      accreditation: "UGC Recognised"
    },
    {
      name: "MedLabs Institute (Faridabad)",
      location: "Faridabad, Haryana",
      programs: 'MLT, OTT-Eye-Q',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&',
      accreditation: "UGC Recognised"
    }

  ]
  const faqs = [
    {
      question: 'Who is this program for?',
      answer: 'This program is ideal for aspiring healthcare professionals seeking hands-on experience, skill development, and exposure to real-world industry environments.',
    },
    {
      question: 'What kind of support is available during the internship?',
      answer: 'Support details were not listed. You may want to contact the provider for specifics.',
    },
    {
      question: 'What are the job opportunities?',
      answer: 'Secure a conditional offer letter upon acceptance, with job opportunities across 30+ Eye-Q hospitals nationwide. Final recruitment depends on internship performance and employer discretion.',
    },
    {
      question: 'What facilities are available for students?',
      answer: 'Students have access to fully equipped labs, digital libraries, simulation centers, and modern classrooms for a comprehensive and immersive learning experience.',
    },
  ];


  return (
    <Container fluid className=" py-5 px-4 me-3 text-center align-items-center bg-light">

      <Row className="justify-content-between p-5">


        <Col md={5} className='text-start'>
          <h1 className="mb-3">Operation Theatre Technology<br></br>(SureStart With Eye-Q)</h1>
          <h5 className="lead">
            Master surgical procedures through exclusive <strong>Eye-Q</strong> training modules and hands-on internships in Eye-Q hospitals.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅Domain:</strong> Curative</li>
            <li><strong>✅Eligibility:</strong> 10+2 pass</li>
            <li><strong>✅Starting Salary:</strong> ₹18,000 per month</li>
          </ul>
          <div className="d-flex gap-3">
            <Button variant="secondary">Apply Now</Button>
            <Button variant="outline-secondary" onClick={handleOpenPDF}> 📘 Get Brochure </Button>
          </div>
        </Col>

        <Col md={6}>
          <Card>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFz9ExIWtTOCBIhGiUiVEBA4SBHYbtLJPgQ&s"
              fluid alt="OttEye-Q"
              rounded

              className="w-100 h-100 object-fit-cover w-100" />
          </Card></Col>
      </Row>

      <Row className='my-5'>
     <Container className="my-5 p-5  ">
          <h1 className="text-center mb-4 p-5">Common Job Roles for OT Professionals at Eye-Q</h1>
          <Row md={4} className="g-3  justify-content-center">
            {OOTRoles.map((OOTRole, idx) => (
              <Col key={idx}>
                <Button variant="outline-secondary" className="w-100 py-3 fw-semibold text-dark">
                  {OOTRole}
                </Button>
              </Col>
            ))}
          </Row>

          <Row className=" my-5 bg-secondary rounded text-white">
            <Col md={6}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5E9aN-bvfTi-twRIuIU6FnAxalYLOaRHV4A&s"
                alt="Lab technician performing diagnostic tests"
                fluid
                rounded
                className='w-100 p-5 rounded'


              />
            </Col>
            <Col md={5}>

              <Card.Header as="h1" className="text-center p-4">SureStart Program Details</Card.Header>
              <ul  >
                {outcomes.map((outcome, idx) => (
                  <li key={idx} className='mb-3 fs-5 text-start'>
                    {outcome}
                  </li>
                ))}
              </ul>

            </Col>
          </Row>


        </Container>


      </Row>
      <h1 className="text-center mb-4 p-5">MedLabs Powered Degree Programs</h1>
      <Row xs={1} md={3} className="g-4 justify-content-center p-5">

        {programs.map((program, idx) => (
          <Col key={idx}>
            <Card className="h-100  text-white bg-secondary rounded shadow text-start">
              <Card.Body>
                <Card.Title className="fw-bold ">{program.name}</Card.Title><hr />
                <Card.Text>{program.duration}</Card.Text>
                <Card.Text>Fees: {program.fees}</Card.Text>
                <Card.Text>{program.payModes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Container className="my-5 p-5">
        <h1 className="text-center mb-4 p-5">Partner Campuses Offering OOT-Eye-Q Program</h1>
        <Row xs={1} md={3} className="g-4 d-flex justify-content-center p-5 ">
          {campuses.map((campus, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm p-2">
                <Image src={campus.image} alt={campus.name} height="200px" width="100%" />
                <Card.Body>
                  <Card.Title className="fw-bold">{campus.name}</Card.Title>
                  <Card.Text>
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    <strong>Location:</strong> {campus.location}
                  </Card.Text>
                  <Card.Text>
                    <FaBookOpen className="me-2 text-primary" />
                    <strong>Programs Offered:</strong> {campus.programs}
                  </Card.Text>
                  <Card.Text>
                    <FaShieldAlt className="me-2 text-success" />
                    <strong>Accreditation:</strong> {campus.accreditation}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>



      </Container>
      <Container className="my-5">
        <Row>
          <Col md={6}> <h1 className="text-center mb-4 boader">Frequently Asked Questions</h1></Col>
          <Col md={6}> <Accordion  flush>
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx} className='mb-3 rounded p-2'>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion></Col>
        </Row>


      </Container>



    </Container>
  )
}

export default OperationTheatreTechnologyEye
