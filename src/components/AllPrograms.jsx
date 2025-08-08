import { Container, Row, Col, Card, Button, Form, } from 'react-bootstrap';



const programs = [
  {
    title: 'Bachelor of Optometry (Optom)',
    description: 'Master the science of vision care with exclusive Lenskart training modules and hands-on internships at Lenskart stores.',
    degree: 'MedLabs Powered Degree Programs, B.Optom (SureStart with Lenskart)',
    duration: '4 years (24 months internship at Lenskart)',
    eligibility: 'Min 50% in PCM/PCB in 12th',
    color: 'primary',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc0W-qIt_Ft6SeWek_UdD8s3AOnUQh30lik_nTm8af6ZD6iTCckmzdyU&s',
    href: "/OptometryLenskart"
  },
  {
    title: 'Bachelor of Medical Laboratory Technology (MLT)',
    description: 'Be the backbone of medical diagnosis and master the science of laboratory testing.',
    degree: 'MedLabs Powered Degree Programs, B.Sc. (Hons.), B.Sc., or B.Voc.',
    duration: '3 or 4 years (18-24 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    color: 'success',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFz9ExIWtTOCBIhGiUiVEBA4SBHYbtLJPgQ&s',
    href:"/MedicalLaboratoryTechnology"

  },
  {
    title: 'Bachelor of Hospital Administration (HA)',
    description: 'Master the art of hospital operations and transform healthcare management.',
    degree: 'MedLabs Powered Degree Programs, B.Voc.',
    duration: '3 years (18 months integrated internship)',
    eligibility: '10+2 (any stream, pass)',
    color: 'warning',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-NLWhU9wxAOd2pzkrEg4y400V_QaItXuWg&s',
     href: "/HospitalAdminitration"
  },
  {
    title: 'Bachelor of Operation Theatre Technology (OTT)',
    description: 'Master surgical technology and transform operation theatre management.',
    degree: 'B.Sc. (Hons.), B.Sc., or B.Voc.',
    duration: '3 or 4 years (includes 18-24 months internship)',
    eligibility: '10+2 (any stream, pass)',
    color: 'primary',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cfcznDh8hj_4RPjs6VdqIz4R8q6U0kAzYw&s',
    href:"/OperationTheatreTechnology"
  },
  {
    title: 'Bachelor of Medical Radiology and Imaging Technology (MRIT)',
    description: 'Master advanced imaging and transform patient care through precision diagnostics.',
    degree: 'B.Sc. (Hons.) or B.Sc.',
    duration: '3 years (includes 18–24 months internship)',
    eligibility: '10+2 (any stream, pass)',
    color: 'success',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cfcznDh8hj_4RPjs6VdqIz4R8q6U0kAzYw&s',
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

const AllPrograms = () => {
  return (
    <Container fluid className="py-5 bg-light">

      <Form inline>
        <Row>
          <Col><h1 className=" text-center mb-5">🎓Explore Our Dynamic Programs</h1></Col>


        </Row>
      </Form>
      <Row className="justify-content-center m-5 ">
        {programs.map((prog, idx) => (
          <Col md={6} lg={4} key={idx} className='mb-3 p-2'>
            < Card className="h-100 shadow-sm ">
              <Card.Body>
                <Card.Img variant="top" src={prog.img} alt='image' height='200px' />
                <Card.Title className="">{prog.title}</Card.Title>
                <Card.Text><h6>{prog.description}</h6></Card.Text>
                <ul className="list-unstyled mb-4">
                  <li><strong>📘 Degree:</strong> {prog.degree}</li>
                  <li><strong>⏳ Duration:</strong> {prog.duration}</li>
                  <li><strong>✅ Eligibility:</strong> {prog.eligibility}</li>
                </ul>
               
               
              </Card.Body>
              <Card.Footer> {prog.href && (
                 <Button variant="secondary w-100" href={prog.href}>Explore</Button>
                )}
</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default AllPrograms;