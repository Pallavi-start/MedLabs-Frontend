import React from 'react';
import { Carousel, Card, Button, Row, Col, Container, Modal, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState, } from 'react';
const programData = [
  {
    title: 'Bachelor of Optometry (Optom)',
    description: 'Master the science of vision care with exclusive Lenskart training modules and hands-on internships at Lenskart stores.',
    degree: 'MedLabs Powered Degree Programs, B.Optom (SureStart with Lenskart)',
    duration: '4 years (24 months internship at Lenskart)',
    eligibility: 'Min 50% in PCM/PCB in 12th',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    href: "/OptometryLenskart"
  },
  {
    title: 'Bachelor of Medical Laboratory Technology (MLT)',
    description: 'Be the backbone of medical diagnosis and master the science of laboratory testing.',
    degree: 'MedLabs Powered Degree Programs, B.Sc. (Hons.), B.Sc., or B.Voc.',
    duration: '3 or 4 years (18-24 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    href: "/MedicalLaboratoryTechnology"
  },
  {
    title: 'Bachelor of Hospital Administration (HA)',
    description: 'Master the art of hospital operations and transform healthcare management.',
    degree: 'MedLabs Powered Degree Programs, B.Voc.',
    duration: '3 years (18 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cfcznDh8hj_4RPjs6VdqIz4R8q6U0kAzYw&s',
    href: "/HospitalAdminitration"
  },



  {
    title: 'Bachelor of Operation Theatre Technology (OTT)',
    description: 'Master surgical technology and transform operation theatre management.',
    degree: 'B.Sc. (Hons.), B.Sc. or B.Voc.',
    duration: '3 or 4 years (18-24 months internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    href: "/OperationTheatreTechnology"
  },
  {
    title: 'Bachelor of Medical Radiology and Imaging Technology (MRIT)',
    description: 'Master advanced imaging and transform diagnostics with precision.',
    degree: 'B.Sc. (Hons.) or B.Sc.',
    duration: '3 years (18-24 months internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    href: "/MedicalRadiologyAndImagingTechnology"
  },
  {
    title: 'OTT with Eye-Q Training Modules',
    description: 'Hands-on internships at Eye-Q hospitals and exclusive training modules.',
    degree: 'B.Voc. (SureStart with Eye-Q)',
    duration: '3 years (18 months internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    href: "/OperationTheatreTechnologyEye-Q"
  },


];

const edgePoints = [
  {
    icon: 'bi bi-laptop',
    title: 'Blended Learning Pedagogy',
    description:
      'Master healthcare concepts in smart classrooms and stay on track with the MedLabs App.',
  },
  {
    icon: 'bi bi-chat-square-text',
    title: 'Communication & Soft Skills Training',
    description: 'Enhance your leadership and communication skills.',
  },
  {
    icon: 'bi bi-gear-wide-connected',
    title: 'Practical Learning',
    description:
      'Gain real-world experience in advanced labs with cutting-edge medical equipment.',
  },
  {
    icon: 'bi bi-person-check',
    title: 'Expert Guidance',
    description:
      'Learn from seasoned healthcare experts with real-world industry experience.',
  },
];
const successStories = [
  {
    video: '/',

    name: 'Manisha',
    role: 'Medical Lab Technologist at Neuro Equilibrium',
    quote:
      'The focus on foundational skills—truly prepared me for the real healthcare world. I owe my success to the education I received at MedLabs.',
  },
  {
    video: '/',
    name: 'Hemmant',
    role: 'Medical Lab Technologist at Dr. Remedies Labs',
    quote:
      "After NEET didn't work out, MedLabs gave me a new direction—where learning felt inclusive and engaging.",
  },
  {
    video: '/',
    name: 'Pooja',
    role: 'OTT Student at MedLabs',
    quote:
      'MedLabs helped me earn the white coat and turn my dream into reality.',
  },
];

const blogPosts = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    title: 'Radiology Courses in India: Career Scope',
    description:
      'Radiology Technicians play a key role in medical diagnosis using imaging tools like X-rays and MRIs. Explore the career opportunities in this fast-growing healthcare field.',
    readTime: '8 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFz9ExIWtTOCBIhGiUiVEBA4SBHYbtLJPgQ&s',
    title: 'Operation Theatre Technician: Career Scope',
    description:
      'From prepping operation theatres to supporting surgeons, OT Technicians are vital to every procedure. Discover the course, eligibility, and career path.',
    readTime: '8 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    title: 'Lab Technician Courses After 12th: Career Scope',
    description:
      'Lab Technicians are essential in diagnosing and treating diseases through precise laboratory analyses. Explore the diverse career opportunities in the diagnostic domain.',
    readTime: '5 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    title: 'Operation Theatre Technician: Career Scope',
    description:
      'From prepping operation theatres to supporting surgeons, OT Technicians are vital to every procedure. Discover the course, eligibility, and career path.',
    readTime: '8 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
    title: 'Lab Technician Courses After 12th: Career Scope',
    description:
      'Lab Technicians are essential in diagnosing and treating diseases through precise laboratory analyses. Explore the diverse career opportunities in the diagnostic domain.',
    readTime: '5 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    title: 'Career in Paramedical Sciences after 12th',
    description:
      'Explore top paramedical courses after 12th, including MLT, OTT, and Radiology offering practical learning and strong career prospects.',
    readTime: '11 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    title: 'Lab Technician Courses After 12th: Career Scope',
    description:
      'Lab Technicians are essential in diagnosing and treating diseases through precise laboratory analyses. Explore the diverse career opportunities in the diagnostic domain.',
    readTime: '5 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    title: 'Career in Paramedical Sciences after 12th',
    description:
      'Explore top paramedical courses after 12th, including MLT, OTT, and Radiology offering practical learning and strong career prospects.',
    readTime: '11 min read',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',

    title: 'In-Demand Paramedical Courses',
    description:
      'Explore diverse paramedical courses available after 12th. Discover course options and career prospects guiding students toward rewarding healthcare professions.',
    readTime: '15 min read',
  },

];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const ProgramsCarousel = () => {
  const chunks = chunkArray(programData, 3);
  const chunks2 = chunkArray(blogPosts, 3);


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className='text-center'>
      <Row className='text-center py-5 '>
        <h2><strong>Pursue India's Most In-Demand</strong></h2>
        <h1><strong>Allied Health Programs</strong></h1>

        <Carousel activeIndex={index} onSelect={handleSelect}>
          {chunks.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center m-4">
                {group.map((program, idx) => (
                  <Col key={idx} md={4} className="mb-3 p-2">
                    <Card className="h-100 shadow p-2">
                      {program.img && (
                        <Card.Img variant="top" src={program.img}
                          height='200px' />
                      )}
                      <Card.Body>
                        <Card.Title>{program.title}</Card.Title>
                        <Card.Text className='text-start'>
                          {program.description}<br />

                          <strong>📘Degree:</strong> {program.degree}<br />
                          <strong>⏳Duration:</strong> {program.duration}<br />
                          <strong>✅ Eligibility:</strong> {program.eligibility}
                        </Card.Text>
                        
                      </Card.Body>
                      <Card.Footer>{program.href && (
                          <Button variant="secondary w-100" href={program.href}>Explore</Button>
                        )}</Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <Button variant='outline-secondary' className=' px-3' as={Link} to="/AllPrograms">Explore all program</Button>
        </div>
      </Row>

      <Row className=" d-flex justify-content-center align-items-center text-center bg-danger p-5 text-white   ">
        <Col className='p-5'>
          <h1><strong>Want to see if you qualify for these programs?</strong></h1>
          <h6>
            Talk to our counselor to check your eligibility and know more about our programs.
          </h6>
          <Button variant='outline-secondary' className=' bg-white m-3  text-dark'  onClick={handleShow} aria-label="Talk to a counselor">
            Ckeck your eligibility
          </Button>
        </Col>
      </Row>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Talk to a Counselor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>We're just a call away to help you know more about MedLabs</p>
          <p className="fw-bold mt-3">Call us directly</p>
          <Button variant="dark" className="mb-2" aria-label="Call MedLabs">
            <i className="bi bi-telephone-fill me-2"></i>+91 000000000
          </Button>
          <p>(Available between 9 AM - 6 PM)</p>
          <hr />
          <p>OR</p>
          <Button variant="success" aria-label="Talk via WhatsApp">
            <i className="bi bi-whatsapp me-2"></i>Talk to us on WhatsApp
          </Button>
        </Modal.Body>
      </Modal>

      <Row style={{ backgroundColor: '#07012fff' }}>
        <Col className="text-center text-white mb-4 my-5">
          <h1> Choose from</h1>
          <h1><strong> 20+ Partner Campuses in 15+ Cities</strong>

          </h1><br />
          <h5>study at india's top universities & colleges,combinig the best campus exprerince & indistry-leading heathcare eduction</h5>
        </Col>


        <Carousel activeIndex={index} onSelect={handleSelect}>
          {chunks.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center m-4">
                {group.map((program, idx) => (
                  <Col key={idx} md={4} className="mb-3 p-2">
                    <Card className="h-100 shadow p-2">
                      {program.img && (
                        <Card.Img variant="top" src={program.img}
                          height='150px' />
                      )}
                      <Card.Body>
                        <Card.Title>{program.title}</Card.Title>
                        <Card.Text className='text-start'>
                          <br />

                          <strong>📘Degree:</strong> {program.degree}<br />
                          <strong>⏳Duration:</strong> {program.duration}<br />
                          <strong>✅ Eligibility:</strong> {program.eligibility}
                        </Card.Text><hr />

                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <div>
          <Button variant='outline-secondary' className='bg-white text-dark m-3' as={Link} to="/Campuses">Find a Campus near you</Button>
        </div>

      </Row>


      <Container className='p-5 my-5'>
        <h1 className="text-center mb-5">The MedLabs Edge</h1>
        <Row className='justify-content-center'>
          {edgePoints.map((point, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <Card className="text-center h-100 border-0 bg-transparent">
                <Card.Body>

                  <Card.Title>{point.title}</Card.Title>
                  <Card.Text>{point.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className=''>
        <Row className='my-5 '>


          <h3 className="text-center pt-5">Student Success Storie
          </h3>
          <h1><strong>From Classroom to Career</strong></h1>

          {successStories.map((story, idx) => (
            <Col md={4} key={idx} className="my-5 p-3">
              <Card className="h-100 shadow-sm border-1">
                <Card.Body>
                  <video controls width="100%">
                    <source src={story.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <Card.Title className="text-center">{story.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    {story.role}
                  </Card.Subtitle>
                  <Card.Text className="mt-3">{story.quote}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Row className='mt-5 p-5 ' style={{ backgroundColor: '#021a40ff', height: '700px' }}>

        <h1 className="text-center mb-4 text-white "><strong>News & Blogs</strong></h1>
        <Carousel interval={null} indicators={false}>
          {chunks2.map((group, slideIdx) => (
            <Carousel.Item key={slideIdx}>
              <Row>
                {group.map((post, idx) => (
                  <Col md={4} key={idx}>
                    <Card className="h-100 shadow-sm border-1 mb-4">
                      <Card.Img variant="top" src={post.image} alt={post.title} height='170px' />
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted text-end">
                        {post.readTime}
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
              
           
        </Carousel>
         <div>
         <Button variant='outline-secondary' className='bg-white text-dark px-5' as={Link} to="/News&Blog" >View all</Button>
        </div>
      </Row>
   

    </Container>

  );
};

export default ProgramsCarousel;