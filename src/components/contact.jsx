import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import contact from '../assets/contact.jpg'
import axios from 'axios';
import '../components/contact.css'
import con_icon1 from '../assets/icon-6.svg'
import con_icon2 from '../assets/icon-2.svg'
import con_icon3 from '../assets/icon-3.svg'
import VisibilitySensor from 'react-visibility-sensor';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange1 = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

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
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <h1 className='mt-5' style={{ fontSize: '50px' }}>Let's keep in touch</h1>
        <p style={{ fontSize: '20px', width: '40%' }}>Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.</p>
        <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
          <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li>{'>'}</li>
          <li>Contact</li>
        </ul>
      </div>

      <section id='about-bg'
      >
        <div className='container pe-5 ps-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
            <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
              <div className='row' style={{ background: '#f6f6f4' }}>
                <div className='col-md-6 d-flex justify-content-center align-items-left p-5' style={{ textAlign: 'left', flexDirection: 'column' }}>
                  <p style={{ textAlign: 'left', color: '#f85c1d' }}>CONTACT US</p>
                  <h1 style={{ textAlign: 'left' }}>How can we help?</h1>

                  <p className='mt-4' style={{ textAlign: 'left', fontSize: '18px' }}>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>

                  <form className='mt-2' onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                      <input
                        type="text"
                        className="form-control text-left"
                        id="name"
                        placeholder="Name"
                        style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500' }}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <input
                        type="email"
                        className="form-control text-left"
                        id="email"
                        placeholder="Email address"
                        style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500' }}
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
                        style={{ border: 'none', padding: '10px', borderRadius: '0', height: '150px', fontWeight: '500' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn mt-2"
                      style={{ background: '#f85c1d', color: 'white', width: '100%', borderRadius: '0', padding: '10px', fontWeight: '500' }}
                    >
                      Submit
                    </button>
                  </form>


                </div>
                <div className='col-md-6 position-relative' id='contact'>
                  <div className="image-container">
                    <img src={contact} alt='about_page_image' className='img-fluid w-100 h-100' style={{ marginLeft: '12px' }} />
                    <div className='overlay-content position-absolute w-100 bottom-0 p-5' style={{ textAlign: 'left' }}>
                      <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                        <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
                          <h3>The team's exceptional service and proactive advice have been instrumental in optimizing our financial processes.</h3>
                        </div>
                      </VisibilitySensor>
                      <p>Claire Olson</p>
                      <p>Founder & CEO</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>

      <section className='container'>
        <div className='row mt-5'>
          <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                <div className='col-lg-3 col-md-12 col-12'>
                  <img src={con_icon1} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                </div>
                <div className='col-lg-8 col-md-12 col-12'>
                  <h5>Fast onboarding</h5>
                  <p>Seamless initiation into our system for swift financial assistance.</p>
                </div>
              </div>
            </div>
          </VisibilitySensor>

          <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                <div className='col-lg-3 col-md-12 col-12'>
                  <img src={con_icon2} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                </div>
                <div className='col-lg-8 col-md-12 col-12'>
                  <h5>Expert support</h5>
                  <p>Guidance from industry professionals tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                <div className='col-lg-3 col-md-12 col-12'>
                  <img src={con_icon3} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                </div>
                <div className='col-lg-8 col-md-12 col-12'>
                  <h5>Consulting partners</h5>
                  <p>Collaboration with experienced advisors for strategic financial planning.</p>
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>


      <section>
        <div className="map-container mt-5">
          {/* Google Maps Embed iframe */}
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248839.0447873106!2d80.01263977812498!3d12.964807662433914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720601926483!5m2!1sen!2sin"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          {/* Address overlay only on larger screens */}
          <div className="address-overlay d-none d-md-block">
            <h3 className='mt-2'>Contact details</h3>
            <div className="mt-4">
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Address:</span> 15 Washington Square, New York</p>
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Phone:</span> +1 (215) 557-1122</p>
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Email:</span> hello@company.com</p>
            </div>

            <h3 className='mt-4'>Opening hours</h3>
            <div className='d-flex flex-column flex-md-row justify-content-between mt-4'>
              <div className='d-flex flex-column'>
                <p className="mb-1">Monday - Friday</p>
                <p className="mb-1">Saturday</p>
                <p className="mb-1">Sunday</p>
              </div>
              <div className='d-flex flex-column' style={{ alignItems: 'end' }}>
                <p className="mb-1">09.00 AM - 6.00 PM</p>
                <p className="mb-1">09.00 AM - 2.00 PM</p>
                <p className="mb-1">Closed</p>
              </div>
            </div>
          </div>

          {/* Address displayed above the map on mobile screens */}
          <div className="address-above-map d-md-none p-3" style={{ textAlign: 'left' }}>
            <h3 className='mt-2'>Contact details</h3>
            <div className="mt-4">
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Address:</span> 15 Washington Square, New York</p>
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Phone:</span> +1 (215) 557-1122</p>
              <p className="mb-1"><span style={{ fontWeight: 'bold' }}>Email:</span> hello@company.com</p>
            </div>

            <h3 className='mt-4'>Opening hours</h3>
            <div className='d-flex flex-md-row justify-content-between mt-4'>
              <div className='d-flex flex-column'>
                <p className="mb-1">Monday - Friday</p>
                <p className="mb-1">Saturday</p>
                <p className="mb-1">Sunday</p>
              </div>
              <div className='d-flex flex-column align-items-end'>
                <p className="mb-1">09.00 AM - 6.00 PM</p>
                <p className="mb-1">09.00 AM - 2.00 PM</p>
                <p className="mb-1">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

