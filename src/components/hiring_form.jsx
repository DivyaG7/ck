import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';


export const Hiringform = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'https://example.com/api/contact'; // Replace with your backend endpoint
      const response = await axios.post(url, formData);

      console.log('Form submitted successfully!', response.data);

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Close the modal after submission
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} animation={false} backdrop="static" keyboard={false} dialogClassName="modal-right">
      <Modal.Header closeButton>
        <Modal.Title className='p-4'><h2>We're hiring</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className='p-4'>Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days.</p>
        <form onSubmit={handleSubmit} className='p-4'>
          <div className="mb-3 mt-2">
            <input
              type="text"
              className="form-control text-left"
              id="name"
              placeholder="Name"
              style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500', background: '#f6f6f4' }}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control text-left"
              id="email"
              placeholder="Email address"
              style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500', background: '#f6f6f4' }}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control text-left"
              id="message"
              placeholder="Message"
              style={{ border: 'none', padding: '10px', borderRadius: '0', height: '150px', fontWeight: '500', background: '#f6f6f4' }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button variant="primary" type="submit" className="mt-2" style={{ background: '#f85c1d', color: 'white', width: '100%', borderRadius: '0', padding: '10px', fontWeight: '500' }}>
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};