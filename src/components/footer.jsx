import React from 'react'
import '../components/footer.css'
import logo from '../assets/ck_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <div>
      <div style={{ borderBottom: '2px solid #f0f0f9' }}></div>
      <div className='container d-flex flex-md-row flex-column justify-content-between align-items-left mb-3 mt-3'>
        <img src={logo} alt="Logo" className="logo mb-3" />

        <div className='d-flex social-media-links'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>

      <div style={{ borderBottom: '2px solid #f0f0f9' }}></div>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6' style={{ textAlign: 'left' }}>
                <h5 className='mb-4' style={{ fontWeight: 'bold' }}>Useful links</h5>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}><p>Home</p></a>
                <a href='/about' style={{textDecoration: 'none', color: 'black'}}><p>About</p></a>
                <a href='/service' style={{textDecoration: 'none', color: 'black'}}><p>Services</p></a>
                <a href='/news' style={{textDecoration: 'none', color: 'black'}}><p>News</p></a>
                <a href='/contact' style={{textDecoration: 'none', color: 'black'}}><p>Contact</p></a>
              </div>
              <div className='col-md-6' style={{ textAlign: 'left' }}>
                <h5 className='mb-4' style={{ fontWeight: 'bold' }}>Social</h5>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
          <div className='col-md-6' style={{ textAlign: 'left' }}>
            <h5 style={{ fontWeight: 'bold' }}>Business hours</h5>
            <div className='d-flex flex-md-row flex-column justify-content-between mt-4 gap-3'>
              {/* <div className='d-flex flex-column'>
                <p className="mb-1">Monday - Friday</p>
                <p className="mb-1">Saturday</p>
                <p className="mb-1">Sunday</p>
              </div>
              <div className='d-flex flex-column align-items-end'>
                <p className="mb-1">09.00 AM - 6.00 PM</p>
                <p className="mb-1">09.00 AM - 2.00 PM</p>
                <p className="mb-1">Closed</p>
              </div> */}
              <p className="mb-1">Monday - Friday</p>
              <p className="mb-1">09.00 AM - 6.00 PM</p>
            </div>
            <div className='mb-2 mt-2' style={{ borderBottom: '2px solid #f0f0f9' }}></div>
            <div className='d-flex flex-md-row flex-column justify-content-between mt-2 gap-3'>
              <p className="mb-1">Saturday</p>
              <p className="mb-1">09.00 AM - 4.00 PM</p>
            </div>
            <div className='mb-2 mt-2' style={{ borderBottom: '2px solid #f0f0f9' }}></div>
            <div className='d-flex flex-md-row flex-column justify-content-between mt-2 gap-3'>
              <p className="mb-1">Sunday</p>
              <p className="mb-1">Closed</p>
            </div>
            <div className='mb-2 mt-2' style={{ borderBottom: '2px solid #f0f0f9' }}></div>
          </div>
        </div>
      </div>
      <div className='mb-5' style={{ borderBottom: '2px solid #f0f0f9' }}></div>

      <div className='container d-flex justify-content-between pb-4' id='footer'>
        <p>© FinPath WordPress Theme. All Rights Reserved.</p>
        <div className='d-flex justify-content-between gap-4'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

