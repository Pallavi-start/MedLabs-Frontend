import { Row, Col, Image, Button, Container,  Card, Accordion } from 'react-bootstrap';
import { useState } from 'react';
import { FaMapMarkerAlt, FaBookOpen, FaShieldAlt } from 'react-icons/fa';
import ApplyNow from './ApplyNow';

  const logos = [
    'logo1.webp', 'logo2.png', 'logo3.png', 'logo3.png', 'logo1.webp', 'logo6.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo1.webp', 'logo2.png'
  ];
  const MRITRoles = [
    'Radiology Technician',
    'Dental Radiographer',
    'Imaging Assistant - Emergency Care',
    'Sonography Technician',
    'MRI / CT Scan Technologist',
    'Radiology Coordinator'
  ]
  const outcomes = [

    'Medical terminology, anatomy, imaging physics, and radiology fundamentals',
    'Techniques for X-ray, digital radiography, CT, MRI, and ultrasound',
    'Emergency handling and interventional radiology assistance',
    'Protocols, patient care, ethics, and soft skills',
    'Radiation safety, QA, and advanced positioning for diagnostics'
  ]
  const programs = [
    {
      title: 'Bachelor in MRIT',
      duration: '4 years (Including 24 months of integrated internship)',
      fees: '₹6,40,000/-',
    },
    {
      title: 'B.Sc. MRIT',
      duration: '3 years (Including 18 months of integrated internship)',
      fees: '₹5,40,000/-',
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

const MedicalRadiologyAndImagingTechnology = () => {
  const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank');
  }

  const [showAll, setShowAll] = useState(false);
  const displayedCampuses = showAll ? campuses : campuses.slice(0, 3);

 const [showModal, setShowModal] = useState(false);
  return (
    <Container fluid className="bg-light " >
      <Row className="py-5  ">
        <Col md={6} className='text-start px-5'>
          <h1 className="mb-3">Medical Radiology and Imaging Technology (MRIT)</h1>
          <h5 className="lead">
            Master advanced imaging technology and transform patient care through precision diagnostics.
          </h5>
          <ul className="list-unstyled my-4 fs-5">
            <li><strong>✅Domain:</strong> Diagnostic</li>
            <li><strong>✅Eligibility:</strong> 10+2 (any stream, pass)<sup>*</sup></li>
            <li><strong>✅Starting Salary:</strong> Up to ₹35,000 per month<sup>*</sup></li>
          </ul>
          <div className="d-flex gap-3">
          <ApplyNow show={showModal} handleClose={() => setShowModal(false)}/>  
          <Button  onClick={() => setShowModal(true)} variant="secondary" className="mx-3" >Apply Now<span>&#8599;</span></Button>
            <Button variant="outline-secondary" onClick={handleOpenPDF}> 📘 Get Brochure </Button>
          </div>
        </Col>
        <Col md={6}>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmYNFYWp3YE_tNOGkHWs7IJmDGAG7Qr_ROw&s' alt='MRIT'
            fluid
            rounded
            className=" w-100 h-100 object-fit-cover" />

        </Col>
      </Row>

      <Row className='my-5 py-5'>

        {/* First Row: Right to Left  */}
        <h4 className='text-center my-5'><b>Top Hospitals and Heathecare Brands</b> for OOT Graduates</h4>
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

      <Container className="my-5 p-5  ">
        <h1 className="text-center mb-4 p-5">Common Job Roles for MRIT Professionals</h1>
        <Row md={4} className="g-3  justify-content-center">
          {MRITRoles.map((MRITRoles, idx) => (
            <Col key={idx}>
              <Button variant="outline-secondary" className="w-100 py-3 fw-semibold text-dark">
                {MRITRoles}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>

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
            {outcomes.map((point, idx) => (
              <li key={idx} className='mb-3 text-start fs-5'>
                {point}
              </li>
            ))}
          </ul>

        </Col>
      </Row>
      <h1 className="text-center mb-4">MedLabs Powered Degree Programs</h1>
      <Row xs={1} md={3} className="g-4 justify-content-center p-5">

        {programs.map((program, idx) => (
          <Col key={idx}>
            <Card className="h-100  text-white bg-secondary rounded shadow text-start">
              <Card.Body>
                <Card.Title className="fw-bold">{program.title}</Card.Title><hr />
                <Card.Text>{program.duration}</Card.Text>
                <Card.Text>Fees: {program.fees}</Card.Text>
                <Card.Text>{program.payModes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Container className="my-5">
        <h1 className="text-center mb-5">Partner Campuses Offering OOT</h1>
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
      <Row className='p-5'>
        <Col md={6} >
          <h1 className="mb-4">Frequently Asked Questions</h1>
        </Col>
        <Col md={6}>

          <Accordion >
            <Accordion.Item eventKey="0" className='mb-3 rounded p-2'>
              <Accordion.Header>Who is this program for?</Accordion.Header>
              <Accordion.Body>
                This program is ideal for aspiring healthcare professionals seeking hands-on experience, skill development, and exposure to real-world industry environments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-3 rounded p-2'>
              <Accordion.Header>What kind of support is available during the internship?</Accordion.Header>
              <Accordion.Body>
                Once the students fulfill all academic requirements, they receive mentorship, work on practical projects, and benefit from personalized career guidance throughout their internship.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='mb-3 rounded p-2'>
              <Accordion.Header>What are the job opportunities?</Accordion.Header>
              <Accordion.Body>
                MedLabs's strong industry partnerships ensure students are provided various job opportunities with top-tier healthcare organizations and companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='mb-3 rounded p-2'>
              <Accordion.Header>What facilities are available for students?</Accordion.Header>
              <Accordion.Body>
                Students have access to fully equipped labs, digital libraries, simulation centers, and modern classrooms—offering a comprehensive and immersive learning experience.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Col>
      </Row>
    </Container>
  )
}

export default MedicalRadiologyAndImagingTechnology
