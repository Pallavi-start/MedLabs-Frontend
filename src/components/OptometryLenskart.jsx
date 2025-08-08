import { Container, Row, Col, Button, Image, Card, Accordion } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBookOpen, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import ApplyNow from './ApplyNow';


 const roles = [
    'Clinical Optometrist',
    'Retail Optometrist',
    'Store Manager',
    'Tele Optometrist',
    'Home Try On Optometrist',
    'Trainer'
  ];

  const universities = [
    {
      name: 'Babu Banarasi Das University',
      location: 'Lucknow, Uttar Pradesh',
      programs: 'Optom - Lenskart, MLT, OTT',
      accreditation: 'UGC Recognised',
      link: '/',
      img: 'https://c8.alamy.com/comp/DDGBAJ/indian-university-students-DDGBAJ.jpg'
    },
    

    {
      name: "HRIT University",
      location: "Ghaziabad, Uttar Pradesh",
      programs: ["Optom - Lenskart, MLT, OTT, MRIT"],
      accreditation: "UGC Recognised",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'
    },

  ];

const OptometryLenskart = () => {
  const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank');
  }  

   const [showModal, setShowModal] = useState(false);


  return (
    <Container fluid className=" py- px-4 me-3 text-center align-items-center bg-light">
      <Row className="align-items-center flex-column-reverse flex-md-row p-5">
        {/* Text Section */}
        <Col md={6} className="text-start">
          <h1 className="me-5 fw-bold text-dark">
            Lenskart (SureStart with Lenskart)
          </h1>
          <h5> Master the Science of version care with exclusive Lenskart training modules and hand-on internshipat Lenskart stores.</h5><br />
          <ul className="list-unstyled fs-5">
            <li><strong>✅ Domain:</strong> Diagnostic</li>
            <li><strong>✅ Eligibility:</strong> Minimum 50% in PCM/PCB in 12th</li>
            <li><strong>✅ Starting Salary:</strong> ₹30,000/month + Incentives</li>
          </ul>
          <div className="mt-4">
         <ApplyNow show={showModal} handleClose={() => setShowModal(false)}/>  
          <Button  onClick={() => setShowModal(true)} variant="secondary" className="mx-3" >Apply Now<span>&#8599;</span></Button>

            <Button variant="outline-dark" onClick={handleOpenPDF}> 📘Get Brochure</Button>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="text-center mb-4 mb-md-0 p-5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s"
            alt="SureStart Lenskart banner"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover"
          />
          </Col>
      </Row>


      <Row className='my-5'>
        <h1 >Common Job Roles </h1>
        <h2 className="text-center mb-4 pb-5">for optom professionals at Lenskart</h2>
        {roles.map((role, idx) => (
          <Col md={4} className="mb-3 px-5 " key={idx}>
            <Card className="h-100 shadow-sm ">
              <Card.Body>
                <Card.Title>{role}</Card.Title>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className=" mb-4 mt-4 p-5 bg-secondary">
        <Col md={6} >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKRlF4glkm4_CQ0j21GEdsax4pZcr1EkBmJ4COouGMqTa2OccF7d1x5Q&s"
            alt="Eye examination"
            fluid
            rounded
            className="w-100 h-100 object-fit-cover p-5 "
          />
        </Col>
        <Col md={6}>
          <h1 className="text-center mb-4 text-white"><strong>SureStart Program Details</strong></h1>

          <Card className=" bg-secondary boader text-start ps-5">
            <ul className="fs-5 text-white">
              <li>Get a conditional internship with a stipend up to ₹2,64,000*, depending on the internship location.
              </li>
              <li>Secure a conditional offer letter at acceptance for jobs at 2000+ Lenskart stores nationwide.
              </li>
              <li>The curriculum includes specialized training modules designed by Lenskart and regular visits to the stores.
              </li>
              <li>Earn an exclusive Award of Completion from Lenskart.
              </li>
              <li> Develop a strong foundation in the basics of optics, ocular anatomy, visual optics, pathology, binocular vision, among others.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>


      <Card.Body >
        <h1 className="m-5"> <strong>MedLabs Powered Degree Programs</strong></h1>

        <Row className='d-flex justify-content-center'>
          <Col md={5} className=" align-items-center ">

            <ul className='list-unstyled fs-5 bg-secondary rounded-5 text-start text-white px-5 py-2'>
              <li><strong>B.Optom</strong></li><hr></hr>
              <li><strong>Duration:</strong> 4 Years <br />(includes 24 months of integrated internship)</li><br />
              <li><strong>Fees:</strong> ₹6,40,000</li>
              <li><strong>Payment Options:</strong><br /> Monthly, Semester-wise or Yearly</li>
            </ul>
          </Col>
        </Row>


      </Card.Body>


      <h1 className="m-5 p-5"><strong> Partner Camupuses  offeringin Optomery  Lenskart program</strong> </h1>
      <Row className='d-flex justify-content-center '>
        {universities.map((uni, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm h-100 d-flex flex-column justify-content-space-around p-2 text-start">
              <Card.Img variant="top" src={uni.img} alt={`${uni.name} logo`}
                height="200px" width="100px" />
              <Card.Body >
                <Card.Title>{uni.name}</Card.Title><br></br>
                <Card.Text >
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  <strong>Location:</strong> {uni.location}
                </Card.Text>
                <Card.Text>
                  <FaBookOpen className="me-2 text-primary" />
                  <strong>Programs Offered:</strong> {uni.programs}
                </Card.Text>
                <Card.Text>
                  <FaShieldAlt className="me-2 text-success" />
                  <strong>Accreditation:</strong> {uni.accreditation}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='mt-5 py-5'>
        <Col>
          <h1 className="text-center mb-4"><strong>Frequently Asked Questions?</strong></h1>
        </Col>
        <Col>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className='mb-3 rounded p-2' >
              <Accordion.Header> <strong>Who is this program for?</strong></Accordion.Header>
              <Accordion.Body>
                This program is ideal for aspiring healthcare professionals seeking hands-on experience, skill development, and exposure to real-world industry environments.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='mb-3 rounded p-2'>
              <Accordion.Header><strong>What kind of support is available during the internship?</strong></Accordion.Header>
              <Accordion.Body>
                Upon completing all academic requirements, students receive expert mentorship, engage in practical projects, and gain personalized career guidance from Lenskart professionals throughout their internship.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='mb-3 rounded p-2'>
              <Accordion.Header><strong>what are the job opportunities?</strong></Accordion.Header>
              <Accordion.Body>
                Secure a conditional offer letter upon acceptance, with job opportunities across 2000+ Lenskart stores nationwide. Final recruitment will depend on your internship performance and the employer's discretion.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='mb-3 rounded p-2'>
              <Accordion.Header><strong>What facilities are available for students?</strong></Accordion.Header>
              <Accordion.Body>
                Students have access to fully equipped labs, digital libraries, simulation centers, and modern classrooms—offering a comprehensive and immersive learning experience.




              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>


    </Container>
  );
};

export default OptometryLenskart;