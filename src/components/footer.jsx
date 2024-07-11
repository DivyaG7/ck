import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div style={{ borderBottom: '2px solid #f6f7fc' }}></div>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-4' style={{ textAlign: 'left' }}>
                <h5 className='mb-4' style={{ fontWeight: 'bold' }}>Features</h5>
                <p>Page builder</p>
                <p>Theme options</p>
                <p>Theme builder</p>
                <p>Template library</p>
              </div>
              <div className='col-md-4' style={{ textAlign: 'left' }}>
                <h5 className='mb-4' style={{ fontWeight: 'bold' }}>Resources</h5>
                <p>Support center</p>
                <p>Documentation</p>
                <p>Community</p>
                <p>Hosting</p>
              </div>
              <div className='col-md-4' style={{ textAlign: 'left' }}>
                <h5 className='mb-4' style={{ fontWeight: 'bold' }}>Social</h5>
                <p>Behance</p>
                <p>Dribbble</p>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
          <div className='col-md-4' style={{ textAlign: 'left' }}>
            <h5>Business hours</h5>
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
      </div>
      <div className='mb-5' style={{ borderBottom: '2px solid #f6f7fc' }}></div>

      <div className='container d-flex justify-content-between pb-4'>
        <p>© FinPath WordPress Theme. All Rights Reserved.</p>
        <div className='d-flex justify-content-between gap-4'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

