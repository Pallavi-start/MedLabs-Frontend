
import { Carousel, Container, Row, Col, Button, Card,} from "react-bootstrap";
import './News&Blog.css'



const NewsBlog = () => {
    return (
        <Container className="">
            <Container  className="py-5 text-center bg-white rounded  bg-light">
                
                <Row>
                    <Col>
                        <h2 className="fw-bold">Our Blogs</h2>
                        <p className="text-muted">
                            Check out our Awesome Blogs written by our Students, Facilitators and Team MedLabs.
                        </p>
                        
                    </Col>
                </Row>
            </Container>
            <Carousel controls={true} indicators={true} interval={8000}>
                {/* DMLT Slide */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-light p-4 rounded shadow-sm">
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5E9aN-bvfTi-twRIuIU6FnAxalYLOaRHV4A&s" alt="DMLT Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="">Diploma in Medical Lab Technician (DMLT)</h1><br />
                                <p>
                                    A paramedical science diploma designed for students after 12th. The course prepares individuals for real-world lab roles and equips them with practical diagnostic skills. Learn about eligibility, career scope, and salary expectations.
                                </p>
                                <p><strong>Author:</strong> Haritha Haridas</p>
                                <Button variant="secondary" href="/">Apply Now</Button>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                {/* B.Voc MLT Banner */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-white p-4 rounded shadow-sm">
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwvOlDtoINMJwXDijUvK4kDOfg0vuysjESg&s" alt="B.Voc MLT Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="">B.Voc MLT: Eligibility, Scope, & Salary</h1><br />
                                <p>
                                    This 3-year vocational program focuses on Medical Laboratory Technology. The course develops students into diagnostic professionals with lab operation expertise. Dive into its curriculum, career paths, and income possibilities.
                                </p>
                                <p><strong>Author:</strong> Haritha Haridas</p>
                                <a href="/" className="btn btn-secondary mt-2" target="_blank" rel="noreferrer">Apply Now</a>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                {/* B.Voc Program Promo */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-light p-4 rounded shadow-sm">
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmNKSiUlqAh3IDESa0roTMo1gI6zfsecz9Q&s" alt="B.Voc Promo Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="text-start">All About the B.Voc Program</h1><br />
                                <p>
                                    Learn everything about the Bachelor of Vocation degree, including course duration, admissions, career roles, salaries, and top institutes that offer MLT and OTT specializations.
                                </p>
                                <p><strong>Author:</strong> Haritha Haridas</p>
                                <a href="/" className="btn btn-secondary mt-2" target="_blank" rel="noreferrer">Learn More</a>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                {/* OTT Slide */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-light p-4 rounded shadow-sm bg-light">
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEho3f2-EksiKzXysbc5frqL3ubspiOHGNQw&s" alt="B.Voc OTT Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="">B.Voc OTT: Eligibility, Scope, & Salary</h1><br />
                                <p>
                                    This vocational course in Operation Theatre Technology prepares students for key surgical support roles. Learn how this degree leads to employment in hospitals and surgical centers with competitive salaries.
                                </p>
                                <p><strong>Author:</strong> Haritha Haridas</p>
                                <Button href="/" variant="secondary">Apply Now</Button>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                {/* Operation Theatre Technician Slide */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-light p-4 rounded shadow-sm">
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMDDWC0cc9jRktvTHzBVXIn7quyeTecn6xg&s" alt="Operation Theatre Technician Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="">Operation Theatre Technician Program</h1><br />
                                <p>
                                    The course teaches sterilization protocols, surgical preparation, and support services in operating theatres. Discover job options, admission criteria, and earning potential after completing this program.
                                </p>
                                <p><strong>Author:</strong> Haritha Haridas</p>
                                <Button href="/" variant="secondary">Apply Now</Button>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                {/* Hospital Administration Slide */}
                <Carousel.Item>
                    <Container>
                        <Row className="align-items-center bg-white p-4 rounded shadow-sm bg-light" >
                            <Col md={6}>
                                <img className="d-block w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosqPOYjBLPLis3vMXUtPphm7N4xSzR2BVuA&s" alt="Hospital Admin Banner" height="400px" />
                            </Col>
                            <Col md={6}>
                                <h1 className="">Hospital Administration Program</h1><br />
                                <p>
                                    This program trains individuals in hospital operations, staff management, patient coordination, and overall facility oversight. Understand course eligibility, career options, and salary benchmarks.
                                </p>
                                <p><strong>Author:</strong> Vibha Taneja</p>
                                <Button href="/" variant="secondary">Apply Now</Button>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

            <Container className="py-5">
                <Row>
                    <Col md={8}>
                    <Row className="g-4">

                    <Col md={6}>
                        <Card className=" shadow-sm mb-4">

                            <div className="bg-section1 text-white">
                                <Container className="py-5 text-start">
                                    <Card.Text>
                                        <Card.Title className="fw-bold text-primary"> B.Voc OTT</Card.Title>
                                        <Card.Subtitle className="mb-2 ">
                                            Course | Eligibility | Job | Salary
                                        </Card.Subtitle >
                                        <strong>Website:</strong> www.MedLabs.com<br />
                                        <strong>Phone:</strong> +91-78 2727 6767<br />
                                        <strong>Email:</strong> admissions@MedLabs.org
                                    </Card.Text>

                                </Container>
                            </div>
                            <Card.Body>


                                <Card.Text>
                                    Are you interested in pursuing a career in the healthcare industry but
                                    don't want to become a doctor or a nurse? The B.Voc in Operation Theatre
                                    Technology prepares you for surgical support roles with high career demand.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Published by:</strong> Haritha Haridas<br />
                                    <strong>Date:</strong> 17 Mar 2024<br />
                                    <strong>Reading Time:</strong> 7 mins
                                </Card.Text>
                                <Button href="/"   variant="secondary"className="p-1 w-100">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* B.Voc MLT Card */}
                    <Col md={6}>
                        <Card className=" shadow-sm mb-4">

                            <div className="bg-section2 text-white">
                                <Container className=" py-5 text-start text-dark">
                                    <Card.Text>
                                        <Card.Title className="fw-bold text-primary">B. Voc. MLT</Card.Title>
                                        <Card.Subtitle className="mb-2 ">
                                            Course | Eligibility | Job | Salary
                                        </Card.Subtitle >
                                        <strong>Website:</strong> www.MedLabs.com<br />
                                        <strong>Phone:</strong> +91-78 2727 6767<br />
                                        <strong>Email:</strong> admissions@MedLabs.org
                                    </Card.Text>
                                </Container>
                            </div>
                            <Card.Body>


                                <Card.Text>
                                    Are you interested in pursuing a career in the healthcare industry but
                                    don't want to become a doctor or a nurse? The B.Voc in Operation Theatre
                                    Technology prepares you for surgical support roles with high career demand.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Published by:</strong> Haritha Haridas<br />
                                    <strong>Date:</strong> 17 Mar 2024<br />
                                    <strong>Reading Time:</strong> 7 mins
                                </Card.Text>
                                <Button href="/"  variant="secondary" className="p-1 w-100">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                   
                </Row>


                <Row className="g-4">
                    {/* B.Voc MLT & OTT Blog */}
                    <Col md={6}>
                        <Card className="  shadow-sm">

                            <div className="bg-section3">
                                <Container className=" py-5 text-start  text-dark">
                                    <Card.Text>
                                        <Card.Title className="fw-bold text-primary"> ALL B.Voc Program</Card.Title>
                                        <Card.Subtitle className="mb-2">
                                            Course | Eligibility | Job | Salary
                                        </Card.Subtitle >
                                        <strong>Website:</strong> www.MedLabs.com<br />
                                        <strong>Phone:</strong> +91-78 2727 6767<br />
                                        <strong>Email:</strong> admissions@MedLabs.org
                                    </Card.Text>
                                </Container>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Explore everything about the B.Voc course: admissions, full form, duration, career opportunities, salary insights, and top colleges. MedLabs brings you the perfect program.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Author:</strong> Haritha Haridas<br />
                                    <strong>Date:</strong> 31 Dec 2023<br />
                                    <strong>Reading Time:</strong> 8 mins
                                </Card.Text>
                                <Button href="/" variant="secondary" className="w-100 p-1">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* B.Voc Hospital Management Blog */}
                    <Col md={6}>
                        <Card className=" shadow-sm">
                            <div className="bg-section">
                                <Container className=" py-5 text-start">
                                    <Card.Text>
                                        <Card.Title className="fw-bold text-primary"> B.Voc im HA</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Course | Eligibility | Job | Salary
                                        </Card.Subtitle >
                                        <strong>Website:</strong> www.MedLabs.com<br />
                                        <strong>Phone:</strong> +91-78 2727 6767<br />
                                        <strong>Email:</strong> admissions@MedLabs.org
                                    </Card.Text>
                                </Container>
                            </div>
                            <Card.Body>

                                <Card.Text>
                                    In today's fast-paced world, hospital operations demand well-trained professionals. Discover how this program prepares you for dynamic careers in healthcare coordination and service delivery.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Author:</strong> Daksh Kapoor<br />
                                    <strong>Date:</strong> 22 Feb 2023<br />
                                    <strong>Reading Time:</strong> 7 mins
                                </Card.Text>
                                <Button href="/" variant="secondary" className="p-1 w-100">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                    </Col>
                    <Col md={4}> 
                         <Col >
                        <div className="bg-image-section mb-5">
                            <Container className=" text-center py-5">
                                <h2 className="fw-bold text-danger">“If I did it, so can you!”</h2>
                                <p className="fs-5">Aishwarya Bisen</p>
                                <p>
                                    MedLabs Institute, Nagpur<br />
                                    <strong>Jan '23 graduate</strong><br />
                                    <strong>Phlebotomist</strong> at Healthians<br />
                                    <span className=" fw-bold">Earning ₹50,000/month</span>
                                </p>
                                <Button  variant="secondary">Apply Now</Button>
                            </Container>
                        </div>
                      </Col>
                      <Col >
                     
                 <video className="w-100" controls>
                  <source src="https://www.vecteezy.com/free-videos/nature" type="video/mp4"  />
                 Your browser does not support the video tag.
                </video>
                      </Col>
                    </Col>
          
                </Row>
         

            </Container>
         


        </Container>
    );
};

export default NewsBlog;