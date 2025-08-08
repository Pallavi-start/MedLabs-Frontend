
import { Card, Button, Container, Col, Row, Image,  Accordion } from 'react-bootstrap';
import ApplyNow from './ApplyNow';
import { useState } from 'react';
function HospitalAdministration() {
  const [showModal, setShowModal] = useState(false);

  const logos = [
    'logo1.webp', 'logo2.png', 'logo3.png', 'logo3.png', 'logo1.webp', 'logo6.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo1.webp', 'logo2.png'
  ];

  const roles = [
    "Hospital Administrator",
    "Clinic Manager",
    "Insurance Claims Executive",
    "Medical Coordinator",
    "Public Health Coordinator",
    "Healthcare Operations Assistant"
  ];
  const learningPoints = [
    "Front desk coordination, billing, hospital information systems, and healthcare insurance processes",
    "Planning, human resource management, and quality assurance in healthcare settings",
    "Supply chain operations, accounting, and economics in hospital environments",
    "Hospital protocols, patient care, ethics, communication, and soft skills",
    "Research methodologies and business processes in healthcare systems"
  ];

  const faqs = [
    {
      question: "Who is this program for?",
      answer:
        "This program is ideal for aspiring healthcare professionals seeking hands-on experience, skill development, and exposure to real-world industry environments."
    },
    {
      question: "What kind of support is available during the internship?",
      answer:
        "Once students fulfill all academic requirements, they receive mentorship, work on practical projects, and benefit from personalized career guidance throughout their internship."
    },
    {
      question: "What are the job opportunities?",
      answer:
        "MedLabs's strong industry partnerships ensure students are provided various job opportunities with top-tier healthcare organizations and companies."
    },
    {
      question: "What facilities are available for students?",
      answer:
        "Students have access to fully equipped labs, digital libraries, simulation centers, and modern classrooms—offering a comprehensive and immersive learning experience."
    }
  ];

  const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank');
  }
 

  return (
    <Container fluid className=" py-5 px-4 me-3 text-center align-items-center bg-light">
      <Row className='p-5'>
        <Col md={6} className='text-start'>
          <Card.Body>
            <Card.Title as="h1" className='mb-5'>Hospital Administration (HA)</Card.Title>
            <Card.Text as="h5">
              Master the art of hospital operations and transform healthcare management.
            </Card.Text><br/>
            <ul className="list-unstyled fs-5">
              <li><strong>✅Domain:</strong> Administrative</li>
              <li><strong>✅Eligibility:</strong> 10+2 (any stream, pass)</li>
              <li><strong>✅Starting Salary:</strong> Up to ₹35,000/month</li>
            </ul>
           <ApplyNow show={showModal} handleClose={() => setShowModal(false)}/>  
          <Button  onClick={() => setShowModal(true)} variant="secondary" className="mx-3" >Apply Now <span>&#8599;</span></Button>

            <Button variant="outline-secondary" onClick={handleOpenPDF}> 📘 Get Brochure </Button>
          </Card.Body>
        </Col>
        <Col md={6}>
          <Card>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-NLWhU9wxAOd2pzkrEg4y400V_QaItXuWg&s" alt="MLT Program Banner" rounded />
          </Card>
        </Col>
      </Row>


      <Row className='my-5'>

        {/* First Row: Right to Left  */}
        <h4 className='text-center p-5'><b>Top Hospitals and Heathecare Brands</b> for HT Graduates</h4>
        <Row className="overflow-hidden mb-4 ">
          <div className="logo-strip strip-rtl">
            {logos.map((logo, idx) => (
              <Image key={idx} src={logo} alt={`Logo ${idx}`} className="mx-3 logo-img rounded-circle" />
            ))}

          </div>
        </Row>

        {/* Second Row: Left to Right */}
        <Row className="overflow-hidden">
          <div className="logo-strip strip-ltr">
            {logos.map((logo, idx) => (
              <Image key={idx} src={logo} alt={`Logo ${idx}`} className="mx-3 logo-img  rounded-circle" />
            ))}
          </div>
        </Row>
      </Row>


      <h1 className="text-center mb-4 p-5">Common Job Roles for MLT Professionals</h1>
      <Row md={4} className="g-3  justify-content-center">
        {roles.map((role, idx) => (
          <Col key={idx}>
            <Button variant="outline-secondary" className="w-100 py-3 fw-semibold text-dark">
              {role}
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

            className='w-100 p-5 rounded'


          />
        </Col>
        <Col md={6}>

          <Card.Header as="h1" className="text-center p-5">What You'll Learn</Card.Header>
          <ul className='text-start fs-5' >
            {learningPoints.map((point, idx) => (
              <li key={idx} className='mb-3 text-start'>
                {point}
              </li>
            ))}
          </ul>

        </Col>
      </Row>

      <h1 className="m-5"> <strong>MedLabs Powered Degree Programs</strong></h1>

      <Row className='d-flex justify-content-center'>
        <Col md={5} className=" align-items-center ">

          <ul className='list-unstyled fs-5 bg-secondary rounded-5 text-start text-white px-5 py-2'>
            <li><strong>B.Voc.HP</strong></li><hr></hr>
            <li><strong>Duration:</strong> 3 Years <br />(includes 18 months of integrated internship)</li><br />
            <li><strong>Fees:</strong> ₹3,90,000</li>
            <li><strong>Payment Options:</strong><br /> Monthly, Semester-wise or Yearly</li>
          </ul>
        </Col>
      </Row>
      <Row className='justify-content-center p-5'>
        <h1 className=" mb-4">Partner Campuses Offering HT</h1>
        <Col md={4} >

          <Card className="mb-4 shadow-sm p-2 ">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&s'"
              alt="MedLabs Institute Nagpur"
              height={'200px'}
            />
            <Card.Body className='text-start'>
              <Card.Title as="h5" id="MedLabs-heading">MedLabs Institute - Nagpur, MH</Card.Title>
              <Card.Text>
                UGC Recognized Institute offering programs in:
              </Card.Text>
              <ul>
                <li><strong>MLT</strong> - Medical Laboratory Technology</li>
                <li><strong>HA</strong> - Hospital Administration</li>
                <li><strong>OTT</strong> - Operation Theatre Technology</li><hr />
              </ul>
              <Button variant="secondary w-100" aria-label="Know more about MedLabs Institute">
                Know More
              </Button>
            </Card.Body>
          </Card>

        </Col>
      </Row>

      <Container className="py-5">
        <Row>
          <Col md={5}>
            <h1 id="faq-heading" className="mb-4 text-start">Frequently Asked Questions
            </h1>
          </Col>

          <Col md={7}>
            <Accordion>
              {faqs.map((faq, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={idx} className='mb-3 rounded p-2' >
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>


      </Container>


    </Container>

  )
}

export default HospitalAdministration;