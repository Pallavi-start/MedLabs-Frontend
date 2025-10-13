import React from 'react';
import { Carousel, Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, } from 'react';
import './ProgramsPage.css'

const AIprogramData = [
 
    {
    title: 'AI Healthcare Training Program',
     description:' Learn how Artificial Intelligence is revolutionizing diagnostics, drug development, and patient care.',
     eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
     duration: '2 Month ',
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-Pl2CSGoRUJ0atuXpl-PFJdl_VRYq7aw2w&s',
     href: "/AIInHealthcareTrainingProgram"
    },  
  
   {
    title: 'Competitive Intelligence Training Program',
    description: 'Gain expertise in pharma and healthcare competitive intelligence to support strategic business decisions',
    duration: '2 Months ',
    eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
    img: 'https://img.freepik.com/free-photo/businessman-analyzing-data-charts-laptop_53876-25079.jpg',
    href: "/ForecassitifyCompetitiveIntelligenceProgram"
  }, 
  
   {
    title: 'HEOR Program',
    description: ' Shape healthcare decision-making and market access with advanced skills in HEOR and Real-World Evidence.',
    duration: '2 Months ',
    eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwXUQMdkguUVOOaJ7jUHD_-pdCN7885Q9Dw&s',
    href: "/HEORProgram"
  }, 
   {
    title: 'Pharma Business Analytics',
    description: ' Transform pharma and healthcare decision-making with the power of analytics and real-world evidence.',
    duration: '2 Months ',
    eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMz65CSexkCaytmKVuqauG8GSuPy6o6E-_w&s',
    href: "/PharmaBusinessAnalytics"
  }, 
  {
    title:'Pharma Forecasting Training Program',
  description : 'Pharma  Gain expertise in pharmaceutical forecasting, demand planning, and data-driven decision-making.',
    duration: '2 Months ',
    eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3sq95XSTNUVEh4N9KQj8cGwqhnVmvtU3ng&s',
    href: "/PharmaForecastingTrainingProgram"
  }, 
  {
    title:'Commercial Analytics',
    description:'Master the skills to analyze market performance, sales data, and business outcomes in the pharmaceutical and healthcare industries.',
    duration:'2 Months',
    eligibility: 'Btech/Mtech/MCA/BPharma/Mpharma',
    img: '/commercialAnalytics.png',
    href: "/CommericialAnalytics"
  }
];



const programData = [
  // {
  //   title: 'Bachelor of Optometry (Optom)',
  //   description: 'Master the science of vision care with exclusive Lenskart training modules and hands-on internships at Lenskart stores.',
  //   degree: 'MedLabs Powered Degree Programs, B.Optom (SureStart with Lenskart)',
  //   duration: '4 years (24 months internship at Lenskart)',
  //   eligibility: 'Min 50% in PCM/PCB in 12th',
  //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
  //   href: "/OptometryLenskart"
  // },
  {
    title: 'Bachelor of Medical Laboratory Technology (MLT)',
    description: 'Be the backbone of medical diagnosis and master the science of laboratory testing.',
    degree: 'MedLabs Powered Degree Programs, B.Sc. (Hons.), B.Sc., or B.Voc.',
    duration: '3 or 4 years (18-24 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    img: "MLT.png",
    href: "MLT.png"
  },
  {
    title: 'Bachelor of Hospital Administration (HA)',
    description: 'Master the art of hospital operations and transform healthcare management.',
    degree: 'MedLabs Powered Degree Programs, B.Voc.',
    duration: '3 years (18 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://media.licdn.com/dms/image/v2/D5612AQH2heo6D80YCg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1706788460035?e=2147483647&v=beta&t=O2w2YpPzbLeG8JP9QCdvRqH15mURxG1-r8aqgZwCCYI',
    href: "/HospitalAdminitration"
  },



  // {
  //   title: 'Bachelor of Operation Theatre Technology (OTT)',
  //   description: 'Master surgical technology and transform operation theatre management.',
  //   degree: 'B.Sc. (Hons.), B.Sc. or B.Voc.',
  //   duration: '3 or 4 years (18-24 months internship)',
  //   eligibility: '10+2 (any stream, pass)',
  //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
  //   href: "/OperationTheatreTechnology"
  // },
  {
    title: 'Bachelor of Medical Radiology and Imaging Technology (MRIT)',
    description: 'Master advanced imaging and transform diagnostics with precision.',
    degree: 'B.Sc. (Hons.) or B.Sc.',
    duration: '3 years (18-24 months internship)',
    eligibility: '10+2 (any stream, pass)',
    img: 'https://www.ahu.edu/sites/default/files/styles/og_image/public/media/radiologists-examining-images.jpg?itok=f3r8T7A7',
    href: "/MedicalRadiologyAndImagingTechnology"
  },
  // {
  //   title: 'OTT with Eye-Q Training Modules',
  //   description: 'Hands-on internships at Eye-Q hospitals and exclusive training modules.',
  //   degree: 'B.Voc. (SureStart with Eye-Q)',
  //   duration: '3 years (18 months internship)',
  //   eligibility: '10+2 (any stream, pass)',
  //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFKv1tAOqKY4PBnobotsjPJTcjx9JFRvDaw&s',
  //   href: "/OperationTheatreTechnologyEye-Q"
  // },


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
    title: "Data Analytics in Pharma",
    name: "Nachiket Kulkarni - Birlasoft",
    quote: `“The Data Analytics in Pharma course gave me the skills I needed. Hands-on pharma datasets and practical training helped me confidently build dashboards in Tableau and SQL. Within a month, I landed a Data Analyst role at IQVIA.”`,
  },
  {
    title: "Clinical Research & Pharmacovigilance",
    name: "Varun Gupta - ZS, P",
    quote: `This pharmacovigilance course made my career shift possible. Practical training and excellent support helped me understand drug safety and case processing. Two weeks after finishing, I was selected as a Drug Safety Associate at Accenture.`,
  },
  {
    title: "Health Economics & Outcomes Research (HEOR)",
    name: "Sneha Mhaske - Axtria,",
    quote: `The HEOR program exceeded my expectations. Practical case studies and modeling assignments helped me gain confidence, and I secured an HEOR Analyst role at Parexel..`,
  },

{
  title: "Pharma Forecasting & Market Access",
  name: "Rhea R -  IQVIA",
  quote: "This course helped me transition from sales to analytics with real industry exercises. I was selected by ZS Associates as a Market Access Analyst within weeks."
}
]

const blogPosts = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPXV8ZF2sbbAOlOtwtt7gobr7EIS-1VNqmw&s', // Replace with relevant image URL
    title: 'Breaking Into Pharma Analytics: Skills Required by Pharma GCC Industries',
    description: "Pharmaceutical companies are rapidly adopting data-driven analytics for drug launches, sales forecasting, and patient trend insights, creating high demand for professionals who can turn data into actionable business decisions.",
    readTime: '10 min read',
    href: "/BreakingIntoPharmaAnalytics"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIofcsqJ--3C19uz-0Ii6162-e_pc3S696oA&s',
    title: 'Pharmacovigilance Careers: How to Move from Fresher to Drug Safety Associate',
    description: `Pharmacovigilance ensures medicine safety by monitoring adverse drug reactions. Hands-on training helps freshers land Drug Safety Associate roles at companies like Accenture and Cognizant.`,
    readTime: '8 min read',
    href:"/PharmacovigilanceBlog"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldH60R3mi9H8w6f2LRAt236ZR75-2vYf2iw&s',
    title: 'HEOR & Market Access: The Hidden Career Path in Pharma Consulting',
    description: `HEOR combines health economics, real-world evidence, and policy analysis to support pricing and access decisions. Trained graduates often secure analyst roles at Parexel, Trinity Life Sciences, and other consulting firms.`,
    readTime: '9 min read',
    href:"/HEORBlog"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8PdyxGrMBokM9RpwtV0CvZ3rLkgXlHEo_A&s',
    title: 'From Classroom to Cipla: My Journey into Regulatory Affairs',
    description: `Regulatory Affairs ensures medicines meet safety, efficacy, and quality standards. Focused training with mock submissions helps students confidently enter roles at Cipla, Sun Pharma, and other pharma companies.`,
    readTime: '7 min read',
    href:"/RegulatoryAffairsPage"
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNO6KhyVq7sWMCGzuyiYU_5-W81Z3KWbzKg&s',
    title: 'Pharma Forecasting Simplified: How Analysts Predict Sales of New Drugs',
    description: `Forecasting in pharma combines patient-based modeling, market share assumptions, and historical analogues to guide strategic decisions. Training with real-world case studies prepares candidates for analyst roles at ZS Associates, IQVIA, and more.`,
    readTime: '8 min read',
    href:"/PharmaForecastingPage"
  },
   {
    image: "blog6.png",
    title:"Digital Transformation from Static Forecasting to AI-based Strategic Forecasting",
    description:"Discover how Agentic AI is revolutionizing pharma forecasting — transforming static reports into real-time, intelligent systems that evolve with the market.",
    readTime: "10 min read",
    href: "/AgenticAIBlog",
  }
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const ProgramsCarousel = () => {

  const chunks2 = chunkArray(blogPosts, 3);
  const chunks3 = chunkArray(AIprogramData,3);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className='text-center '>
      <Row className='text-center py-5 '>
        <h2><strong>Pursue India's Most In-Demand</strong></h2>
        <h1><strong>Artificial Intelligence Courses in Healthcare</strong></h1>

        <Carousel activeIndex={index} onSelect={handleSelect}>
          {chunks3.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center m-4">
                {group.map((program, idx) => (
                  <Col key={idx} md={4} className="mb-3 p-2 ">
                    <Card className="h-100 shadow p-2 ">
                      {program.img && (
                        <Card.Img variant="top" src={program.img}
                          height='200px' />
                      )}
                      <Card.Body>
                        <Card.Title>{program.title}</Card.Title>
                        <Card.Text className='text-start'>
                          {program.description}<br />

                       
                          <strong>⏳Duration:</strong> {program.duration}<br />
                          <strong>✅ Eligibility:</strong> {program.eligibility}
                        </Card.Text>
                        
                      </Card.Body>
                      <Card.Footer>{program.href && (
                          <Button variant="secondary w-100" as={Link} to={program.href}>Explore</Button>
                        )}</Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <Button variant='outline-secondary' className=' px-3' as={Link} to="/AllPrograms" onClick={() => window.scrollTo(0, 0)}>Explore all program</Button>
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
            <i className="bi bi-telephone-fill me-2"></i>+91 9021643748
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
          <h2><strong>Pursue India's Most In-Demand</strong></h2>
        <h1><strong>Allied Health Programs 
          </strong></h1>
        </Col>


      <Row className="justify-content-center p-5">
  {programData.map((program, idx) => (
    <Col key={idx} md={4} className="mb-3 p-2">
      <Card className="h-100 shadow p-2">
        {program.img && (
          <Card.Img
            variant="top"
            src={program.img}
            height="200px"
          />
        )}
        <Card.Body>
          <Card.Title>{program.title}</Card.Title>
          <Card.Text className="text-start">
            {program.description}
            <br />
            <strong>📘 Degree:</strong> {program.degree}
            <br />
            <strong>⏳ Duration:</strong> {program.duration}
            <br />
            <strong>✅ Eligibility:</strong> {program.eligibility}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {program.href && (
            <Button
              variant="secondary w-100"
              as={Link}
              to={program.href}
            >
              Explore
            </Button>
          )}
          
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>


        <div>
          <Button variant='outline-secondary' className='bg-white text-dark m-3' as={Link} to="/AllPrograms" onClick={() => window.scrollTo(0, 0)}>Explore all program</Button>
        </div>

      </Row>



      <Container className='p-5 my-5'>
        <h1 className="text-center mb-5 ">The MedLabs Edge</h1>
        <Row className='justify-content-center'>
          {edgePoints.map((point, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <Card className="text-center h-100 border-3 bg-transparent">
                <Card.Body>

                  <Card.Title className='text-primary fst-italic'>{point.title}</Card.Title>
                  <Card.Text className='fst-italic'>{point.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
      <Row className="text-center mb-4">
        <h3 className="pt-3">Student Success Stories</h3>
        <h1>
          <strong>From Classroom to Career</strong>
        </h1>
      </Row>
<Row className="testimonial-row">
  {successStories.map((story, idx) => (
    <Col md={3} lg={3} key={idx} className="my-3">
      <Card className="testimonial-card d-flex flex-column h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="testimonial-title text-center mb-3">
            {story.title}
          </Card.Title>
          <Card.Text className="testimonial-quote flex-grow-1">
            {story.quote}
          </Card.Text>
          <Card.Subtitle className="testimonial-name text-end mt-3">
            — {story.name}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>




    </Container>

      <Row className='mt-5 p-5 ' style={{ backgroundColor: '#021a40ff',  }}>

        <h1 className="text-center mb-4 text-white "><strong>News & Blogs</strong></h1>
  
<Carousel interval={null} indicators={true} nextIcon={<span className="carousel-arrow">&#10095;</span>} prevIcon={<span className="carousel-arrow">&#10094;</span>}>
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
                 {post.href && (
              <Button variant="secondary w-100" as={Link} to={post.href}>Explore</Button>
                 )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ))}
</Carousel>


<div>
  <Button variant='outline-secondary' className='bg-white text-dark px-5 mt-5' as={Link} to="/News&Blog" >View all</Button>
</div>
</Row>
   

    </Container>

  );
};

export default ProgramsCarousel;