import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBookOpen, FaShieldAlt } from 'react-icons/fa';

const Camp = [
    {
    name: "Ashoka Institute of Technology & Management",
    location: "Varanasi, Uttar Pradesh",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "Awadh Public Charitable Trust (APCT)",
    location: "Delhi",
    programs: "MLT, OTT",
    accreditation: "NAAC 'A' Graded",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s'
  },
  {
    name: "Babu Banarasi Das University",
    location: "Lucknow, Uttar Pradesh",
    programs: "Optom - Lenskart, MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  }
,
  {
    name: "Apeejay Stya University",
    location: "Gurugram, Haryana",
    programs: "MLT, OTT, MRIT",
    accreditation: "NAAC 'A' Graded",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'
  },
  {
    name: "DPG Institute of Technology & Management",
    location: "Gurugram, Haryana",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "Lingaya's Vidyapeeth",
    location: "Faridabad, Haryana",
    programs: "MLT, OTT, MRIT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'
  },



  {
    name: "COER University",
    location: "Roorkee, Uttarakhand",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s'
  },

  {
    name: "HRIT University",
    location: "Ghaziabad, Uttar Pradesh",
    programs: "Optom - Lenskart, MLT, OTT, MRIT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'
  },

  {
    name: "Rustomjee Academy for Global Careers (Thane)",
    location: "Mumbai, Maharashtra",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "Sigma University",
    location: "Vadodara, Gujarat",
    programs: "MLT, OTT, MRIT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s'
  },
  {
    name: "Silver Oak University",
    location: "Ahmedabad, Gujarat",
    programs: "MLT, OTT, MRIT",
    accreditation: "NAAC 'A' Graded",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'

  },
  {
    name: "Sri Sukhmani Institute of Management (SSIM)",
    location: "Delhi",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "TBI - KIET",
    location: "Ghaziabad, Uttar Pradesh",
    programs: "MLT, OTT - Eye-Q",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "Vikrant University",
    location: "Gwalior, Madhya Pradesh",
    programs: "MLT, OTT, MRIT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvRRLFZEkwvlsT7b-bIjAvde3r_3x22guwA&'
  },
  {
    name: "MedLabs Institute (Faridabad)",
    location: "Faridabad, Haryana",
    programs: "MLT, OTT - Eye-Q",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s'
  },
  {
    name: "MedLabs Institute (Nagpur)",
    location: "Nagpur, Maharashtra",
    programs: "MLT, HA, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkObc2RFbosrBgArPF0WaUXMsumj7YKb2vQ&s'
  },
  {
    name: "MedLabs Institute (Faridabad)",
    location: "Faridabad, Haryana",
    programs: "MLT, OTT - Eye-Q",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },


  {
    name: "MIT University",
    location: "Shillong, Meghalaya",
    programs: "MLT, OTT, MRIT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  },
  {
    name: "Rustomjee Academy for Global Careers (Dahisar)",
    location: "Mumbai, Maharashtra",
    programs: "MLT, OTT",
    accreditation: "UGC Recognised",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZPFqiQsGAb3eWPW81QL2HqM3hS9nPgAoA&'
  }


];

const Campuses = () => {
 
  return (
    <Container className=' px-'>
      <Container className="mb-5 ">
        <h1 className="text-center mb-4 p-5 "><strong>Partner Campuses Offering</strong></h1>
        <Row xs={1} md={3} className="g-4">
          {Camp.map((campus, idx) => (
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
      

      </Container>
    </Container>
  );
};

export default Campuses;




