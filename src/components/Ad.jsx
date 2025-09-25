import React from 'react'


import { Container, Row, Image } from 'react-bootstrap';
import './Ad.css'; // External CSS for animation

const logos = [
  'Axtria.png', 'Cipla.png', 'Clarivate.png', 'Flatiron.png', 'Ibris.png', 'Indegene.png', 'IQVIA.png', 'MuSigma.png', 'panalgo.png', 'Trinity.png'
];

const Ad = () => {
  return (
    <Container fluid className="bg-light py-5">
      {/* First Row: Right to Left */}
      <h5 className='text-center my-5'>Launch Your Career with <b>2000+healthcare Employers</b></h5>
      <Row className="overflow-hidden mb-5 px-2 z">
        <div className="logo-strip strip-rtl">
          {logos.map((logo, idx) => (
            <Image key={idx} src={logo} alt={`Logo ${idx}`} className="  mx-3 logo-img " />
          ))}

        </div>
      </Row>

      {/* Second Row: Left to Right */}
      <Row className="overflow-hidden">
        <div className="logo-strip strip-ltr">
          {logos.map((logo, idx) => (
            <Image key={idx} src={logo} alt={`Logo ${idx}`} className="mx-3 logo-img  " />
          ))}
        </div>
      </Row>
    </Container>
  );
}




export default Ad
