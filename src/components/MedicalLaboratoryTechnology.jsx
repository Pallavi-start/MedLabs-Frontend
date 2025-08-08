import React from 'react';
import { Container, Row, Col, Card, Button, Image,  Accordion } from 'react-bootstrap';
import { useState } from 'react';
import { FaMapMarkerAlt, FaBookOpen, FaShieldAlt } from 'react-icons/fa';
import ApplyNow from './ApplyNow';

  const logos = [
    'logo1.webp', 'logo2.png', 'logo3.png', 'logo3.png', 'logo1.webp', 'logo6.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo1.webp', 'logo2.png'
  ];

  const roles = [
    'Diagnostic Lab Technician',
    'Forensic Lab Assistant',
    'Hospital Lab Technologist',
    'Blood Bank Technician',
    'Phlebotomist',
    'Cytotechnologist',
  ];
  const learningPoints = [
    'Understanding of medical terminology, clinical pathology, hematology, immunology, and serology.',
    'In-depth knowledge of diagnostic tools in biochemistry, histopathology, and cytopathology.',
    'Skills in advanced blood banking, applied immunology, and lab management techniques.',
    'Familiarity with hospital protocols, patient care, ethics, communication, and soft skills.',
    'Hands-on experience in laboratory operations, quality control, and clinical diagnostics.',
  ];
   const programs = [
    {
      name: 'B.Sc. (Hons.) MLT',
      duration: '4 years (Including 24 months internship)',
      fee: '₹6,40,000/-',
      payModes: '(Pay per Month Semester or Yearly)'
    },
    {
      name: 'B.Sc. MLT',
      duration: '3 years (Including 18 months internship)',
      fee: '₹5,40,000/-',
      payModes: '(Pay per Month Semester or Yearly)'
    },
    {
      name: 'B.Voc. MLT',
      duration: '3 years (Including 18 months internship)',
      fee: '₹3,90,000/-',
      payModes: '(Pay per Month Semester or Yearly)'
    },
  ];

const campuses = [
    {
      name: 'Apeejay Stya University',
      location: 'Gurugram, Haryana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s',
      programs: 'MLT, OTT, MRIT',
      accreditation: "NAAC 'A' Graded",
    },
    {
      name: 'Ashoka Institute of Technology & Management',
      location: 'Varanasi, Uttar Pradesh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&s',
      programs: 'MLT, OTT',
      accreditation: 'UGC Recognised',
    },
    {
      name: 'Awadh Public Charitable Trust (APCT)',
      location: 'Delhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&s',
      programs: 'MLT, OTT',
      accreditation: "NAAC 'A' Graded",
    },
    {
      name: 'Apeejay Stya University',
      location: 'Gurugram, Haryana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s',
      programs: 'MLT, OTT, MRIT',
      accreditation: "NAAC 'A' Graded",
    },
    {
      name: 'Ashoka Institute of Technology & Management',
      location: 'Varanasi, Uttar Pradesh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&s',
      programs: 'MLT, OTT',
      accreditation: 'UGC Recognised',
    },
    {
      name: 'Awadh Public Charitable Trust (APCT)',
      location: 'Delhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&s',
      programs: 'MLT, OTT',
      accreditation: "NAAC 'A' Graded",
    }, {
      name: 'Apeejay Stya University',
      location: 'Gurugram, Haryana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s',
      programs: 'MLT, OTT, MRIT',
      accreditation: "NAAC 'A' Graded",
    },
    {
      name: 'Ashoka Institute of Technology & Management',
      location: 'Varanasi, Uttar Pradesh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&s',
      programs: 'MLT, OTT',
      accreditation: 'UGC Recognised',
    },
    {
      name: 'Awadh Public Charitable Trust (APCT)',
      location: 'Delhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&s',
      programs: 'MLT, OTT',
      accreditation: "NAAC 'A' Graded",

    },
  ];
 

  const faqs = [
    {
      question: 'Who is this program for?',
      answer:
        'This program is ideal for aspiring healthcare professionals seeking hands-on experience, skill development, and exposure to real-world industry environments.',
    },
    {
      question: 'What kind of support is available during the internship?',
      answer:
        'Once the students fulfill all academic requirements, they receive mentorship, work on practical projects, and benefit from personalized career guidance throughout their internship.',
    },
    {
      question: 'What are the job opportunities?',
      answer:
        "MedLabs's strong industry partnerships ensure students are provided various job opportunities with top-tier healthcare organizations and companies.",
    },
    {
      question: 'What facilities are available for students?',
      answer:
        'Students have access to fully equipped labs, digital libraries, simulation centers, and modern classrooms—offering a comprehensive and immersive learning experience.',
    },
  ];

const MLTProgram = () => {
  const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank');
  }

 const [showAll, setShowAll] = useState(false);
  const displayedCampuses = showAll ? campuses : campuses.slice(0, 3);


 const [showModal, setShowModal] = useState(false);
 

  return (
    <Container fluid className=" py-5 px-4 me-3 text-center align-items-center bg-light">

      <Row className="justify-content-between p-5">


        <Col md={5} className="text-start">
          <Card.Body>
            <Card.Title as="h1" className="mb-4">
              Medical Laboratory Technology (MLT)
            </Card.Title>
            <Card.Text as='h5' className="mb-3">
              Be the backbone of medical diagnosis and master the science of laboratory testing.
            </Card.Text>
            <ul className="list-unstyled fs-5">
              <li><strong>✅ Domain:</strong> Diagnostic</li>
              <li><strong>✅ Eligibility:</strong>10+2 (any stram,Pass)*</li>
              <li><strong>✅ Starting Salary:</strong> ₹35,000/month </li>
            </ul>

               <ApplyNow show={showModal} handleClose={() => setShowModal(false)}/>  
          <Button  onClick={() => setShowModal(true)} variant="secondary" className="mx-3" >Apply Now<span>&#8599;</span></Button>
            <Button variant="outline-secondary" onClick={handleOpenPDF}> 📘 Get Brochure </Button>
          </Card.Body>
          {/* </Card> */}
        </Col>
        <Col md={6}>
          <Card>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFz9ExIWtTOCBIhGiUiVEBA4SBHYbtLJPgQ&s" fluid alt="MLT Program Banner" rounded />
          </Card></Col>
      </Row>


     



      <Row className='my-5'>

        {/* First Row: Right to Left  */}
        <h4 className='text-center p-5'><b>Top Hospitals and Heathecare Brands</b> for MLT Graduates</h4>
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



        <Container className="my-5 p-5  ">
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
                rounded
                className='w-100 p-5 rounded'


              />
            </Col>
            <Col md={5}>

              <Card.Header as="h1" className="text-center p-4">What You'll Learn</Card.Header>
              <ul  >
                {learningPoints.map((point, idx) => (
                  <li key={idx} className='mb-3 fs-5 text-start'>
                    {point}
                  </li>
                ))}
              </ul>

            </Col>
          </Row>


        </Container>


      </Row>
      <h1 className="text-center mb-4">MedLabs Powered Degree Programs</h1>
      <Row xs={1} md={3} className="g-4 justify-content-center p-5">

        {programs.map((program, idx) => (
          <Col key={idx}>
            <Card className="h-100  text-white bg-secondary rounded shadow">
              <Card.Body>
                <Card.Title className="fw-bold">{program.name}</Card.Title><hr />
                <Card.Text>{program.duration}</Card.Text>
                <Card.Text>Fees: {program.fee}</Card.Text>
                <Card.Text>{program.payModes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Container className="my-5">
        <h2 className="text-center mb-4">Partner Campuses Offering MLT</h2>
        <Row xs={1} md={3} className="g-4">
          {displayedCampuses.map((campus, idx) => (
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
        {!showAll && (
          <div className="text-center mt-4">
            <Button variant="outline-secondary" onClick={() => setShowAll(true)}>
              Show All Campuses
            </Button>
          </div>
        )}


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
  );
};

export default MLTProgram;