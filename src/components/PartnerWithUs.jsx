import { useState } from 'react';
import { Form, Button, Container, Row, Col,Card ,Image,CardImg ,Table} from 'react-bootstrap';
import axios from 'axios';



  const founders = [
    {
      src: '/',
      name: '',
      role: 'Co-Founder & CEO',
      note: "Business World's 40 under 40 Professional\nStrategic Design from NID",
    },
    {
      img: '/',
      name: 'Nalin Saluja',
      role: 'Co-Founder & CTO',
      note: "India's Best Technology Leaders (2021)\nby White Page International",
    },
    {
      img: '/',
      name: 'Archit Jaiswal',
      role: 'Co-Founder & CFO',
      note: 'C.A from The Institute of Chartered Accountants of India',
    },
  ];
  const recognitions = [
    'Best Healthcare Education Brand - 2024 (ET Edge)',
    'Ranked #18 in Deloitte Technology Fast 50 India - 2022',
    "Dun & Bradstreet's Start-up 50 Trailblazer - 2023",
    "BusinessWorld's Disrupt Future Masters - Kunaal Dudeja (2023)",
    "White Page International's 50 Best Leaders - Nalin Saluja (2021)",
    'Education Innovation Award for Best E-learning and Blended Solutions'
  ];
  const programs = [
    {
      title: 'Bachelors of Science (Hons.)',
      duration: '4 years UG program',
      internship: 'Including 24 months of integrated internship'
    },
    {
      title: 'Bachelors of Science',
      duration: '3 years UG program',
      internship: 'Including 18 months of integrated internship'
    },
    {
      title: 'Masters (M.Sc.)',
      duration: '2 years program',
      internship: 'Including 12 months of integrated internship'
    }
  ];



function PartnerWithUs() {
    const handleOpenPDF = () => {
    window.open('medlabs_brochure.pdf', '_blank'); // Opens PDF in a new tab
  }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    affiliationType: '',
    institute: '',
    state: '',
    district: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('ttps://medlabs-backend.onrender.com/api/enquiry', formData)
       .then(res => console.log(res.data))
       .catch(err => console.error(err));

      alert('Form submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    }
  };


  return (
    <Container fluid className=" bg-light">
      <Row className="align-items-center">
        {/* Left Panel – Promotional Section */}
        <Col md={6} className="">
          <Card className="border-0 p bg-light">
            <Card.Body>
              {/* Replace with actual image */}
              <Image src="https://media.istockphoto.com/id/608002780/photo/happy-student-at-the-school.jpg?s=612x612&w=0&k=20&c=AGt63KNWG2r8JVy1WZ4C2vcX0N9-DPj6C6bxhYMGz48=" alt="Partner with MedLabs" fluid className="mb-3" rounded />

              <Card.Title as="h3" className="fw-bold">Partner with MedLabs</Card.Title>
              <Card.Text>
                MedLabs's all-in-one platform helps you grow your Allied Health program with:
              </Card.Text>
              <ul>
                <li>25+ Campuses across India</li><br />
                <li>Dedicated Partnership Team</li><br />
                <li>10,000+ Students Trained</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Panel – Enquiry Form */}
        <Col md={6}>
          <Card className="p-5 shadow-sm">
            <Card.Title className="mb-3 fw-semibold">Enquire Now</Card.Title>
            <Form onSubmit={handleSubmit}>
           <Row>
           <Col sm={6}>
             <Form.Group className="">
         <Form.Label>Name</Form.Label>
          <Form.Control 
          name="name"
          type="text"
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
    </Col>
    <Col sm={6}>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          name="phone"
          type="tel"
          placeholder="+91..." 
          value={formData.phone}
          onChange={handleChange}
        />
       
      </Form.Group>
    </Col>
  </Row>

  <Form.Group className="mb-3">
    <Form.Label>Email Address</Form.Label>
    <Form.Control 
      name="email"
      type="email"
      placeholder="Enter email"
      value={formData.email}
      onChange={handleChange}
    />
  </Form.Group>

  <Row>
    <Col sm={6}>
      <Form.Group className="mb-3">
        <Form.Label>I am...</Form.Label>
        <Form.Select 
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option>Select...</option>
          <option>Educator</option>
          <option>Administrator</option>
        </Form.Select>
      </Form.Group>
    </Col>
    <Col sm={6}>
      <Form.Group className="mb-3">
        <Form.Label>Affiliation Type</Form.Label>
        <Form.Select 
          name="affiliationType"
          value={formData.affiliationType}
          onChange={handleChange}
        >
          <option>Select...</option>
          <option>Private</option>
          <option>Government</option>
        </Form.Select>
      </Form.Group>
    </Col>
  </Row>

  <Form.Group className="mb-3">
    <Form.Label>Institute/College/University Name</Form.Label>
    <Form.Control 
      name="institute"
      type="text"
      value={formData.institute}
      onChange={handleChange}
    />
  </Form.Group>

  <Row>
    <Col sm={6}>
      <Form.Group className="mb-3">
        <Form.Label>State</Form.Label>
      
          <Form.Control 
      name="state"
      type="text"
      placeholder="Enter state"
      value={formData.state}
      onChange={handleChange}
    />
      </Form.Group>
    </Col>
    <Col sm={6}>
      <Form.Group className="mb-3">
        <Form.Label>District</Form.Label>
       
           <Form.Control 
      name="district"
      type="text"
      placeholder="Enter district"
      value={formData.district}
      onChange={handleChange}
    />
      </Form.Group>
    </Col>
  </Row>

  <Button variant="secondary" type="submit" className="w-100 mt-2">Enquire Now</Button>
</Form>
          </Card>
        </Col>
      </Row>
      <Row>


        <Container className='my-4 p-5'>
          <h1 className="mb-4 fw-bold text-center p-5">Measuring Success Via Students Outcomes</h1>
          <Row xs={1} md={2} lg={4} className=" d-flex justify-content-evenly">
            <Col>

              <Card.Body><strong className="text-danger fs-1">10,000+</strong><br></br>Students Trained</Card.Body>

            </Col>
            <Col>

              <Card.Body ><strong className="text-danger fs-1">2,000+</strong><br></br> Healthcare Employers</Card.Body>

            </Col>
            <Col>

              <Card.Body><strong className="text-danger fs-1">98%</strong><br></br> Placement Rate</Card.Body>

            </Col>
            <Col>

              <Card.Body><strong className="text-danger fs-1">20+ <br></br> </strong>Partner Campuses Across India</Card.Body>

            </Col>
          </Row>
        </Container>


      </Row>
     <Row className='bg-secondary'>
        <Container className="my-4 p-5">
          <h1 className="text-center fw-bold mb-4 text-white">Our Business Model</h1>
        
         <Table striped bordered hover responsive className='text-center '>
      <thead >
        <tr >
          <th>Candidate Journey</th>
          <th>MedLabs</th>
          <th>HEI Partners</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Candidate Acceptance</td>
          <td>Robust promotion engine to drive program awareness</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Learning in Technology-Enabled Classrooms</td>
          <td>In-classroom training with proprietary tech-based pedagogy</td>
          <td>Provide classroom infrastructure & conduct examinations</td>
        </tr>
        <tr>
          <td>Practical Training in Industry-Grade Labs</td>
          <td>-</td>
          <td>Provide laboratory infrastructure</td>
        </tr>
        <tr>
          <td>18–24 Months Internship</td>
          <td>Dedicated internship support</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Degree</td>
          <td>-</td>
          <td>Provide UGC approved degree</td>
        </tr>
        <tr>
          <td>Network of 2000+ Healthcare Organisations</td>
          <td>Dedicated job support</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>

  
        </Container> 

      </Row>
      <Row>
        <Container className="py-5">
          <h2 className="text-center fw-bold mb-5">Our Founders</h2>
          <Row className="gy-4 justify-content-center">
            {founders.map((founder, idx) => (
              <Col md={4} key={idx}>
                <Card className="hover-shadow">
                  <CardImg
                    src='/'
                    alt="Our Founder"
                    fluid
                    rounded
                    className=" h-100 object-fit-cover"
                  />
                  <Card.Body>

                    <Card.Title className="fs-4 fw-semibold">{founder.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{founder.role}</Card.Subtitle>
                    <Card.Text style={{ whiteSpace: 'pre-line' }}>{founder.note}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

      </Row>
      <Container className="my-5">
        <h1 className="mb-4 text-center ">Recognized for Excellence</h1>
        <Row>
          {recognitions.map((item, idx) => (
            <Col md={2} key={idx} className="mb-3 ">
              <Card>
                <Card.Body>
                  <Card.Text as="li">{item}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h1 className="mt-5 mb-4 text-center">MedLabs Powered Degree Programs</h1>
        <Row>
          {programs.map((program, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card >
                <Card.Body className='bg-secondary text-white rounded shadow-lg'>
                  <Card.Title>{program.title}</Card.Title><hr />
                  <Card.Text>{program.duration}</Card.Text>
                  <Card.Text>{program.internship}</Card.Text><hr />
                  <Button variant="dark white w-100" onClick={handleOpenPDF}>Get Brochure</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


    </Container>

  );
}

export default PartnerWithUs;