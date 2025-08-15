
import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function ApplyNow({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('https://backend-medlabs.onrender.com/api/submit', formData)
       .then(res => console.log(res.data))
       .catch(err => console.error(err));

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', campus: '' });
      setTimeout(() => {
        setSubmitted(false);
        handleClose(); // close modal after success
      }, 1000);
    } catch (err) {
      setError('Submission failed. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Admission Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select name="campus" value={formData.campus} onChange={handleChange} required>
              <option value="">Select a Campus</option>
               <option>SSIM - Dwarka, Delhi</option>
              <option>APCT - Saket, Delhi</option>
              <option>BBD University - Lucknow</option>
              <option>HRIT University - Ghaziabad</option>
              <option>Ashoka Institute - Varanasi</option>
              <option>TBI-KIET - Ghaziabad</option>
              <option>Lingaya's University - Faridabad</option>
               <option>Apeejay Stya University - Gurugram</option>
               <option>DPGITM - Gurugram</option>
               <option>MedLabs Institute - Faridabad</option>
              <option>Silver Oak University -Ahmedabad</option>
             <option>Sigma University - Vadodara</option>
             <option>Silver Oak University -Ahmedabad</option>
             <option>Sigma University - Vadodara</option>
              <option>Rustomjee Academy - Thane, Mumbai</option>
             <option>Rustomjee Academy - Dahisar, Mumbai</option>
              <option>MedLabs Institute - Nagpur</option>
               <option>Vikrant University - Gwalior</option>
              <option>MIT University - Shillong</option>
             <option>COER University - Roorkee</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary w-100" type="submit">
            Submit
          </Button><br></br>
          <Form.Text className="text-muted">
             By continuing, I agree to the <a href="/TermsCondition">T&Cs</a> and <a href="/PrivacyPolicy">Privacy Policy</a>.
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ApplyNow;
