import React, { useState } from 'react'
import '../components/about.css'
import { Link } from 'react-router-dom'
import about1 from '../assets/about1.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import icon1 from '../assets/icon-8.svg'
import icon2 from '../assets/icon-4.svg'
import icon3 from '../assets/icon-9.svg'
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const About = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  const handleChange1 = (isVisible1) => {
    if (isVisible1) {
      setIsVisible1(true);
    }
  };

  const handleChange2 = (isVisible2) => {
    if (isVisible2) {
      setIsVisible2(true);
    }
  };

  const [activeBox, setActiveBox] = useState('vision');

  const renderContent = () => {
    switch (activeBox) {
      case 'vision':
        return <p>Our vision is to be the most trusted provider of innovative solutions, driving success and growth for our clients.</p>;
      case 'mission':
        return <p>Our mission is to deliver high-quality products and services that exceed our clients' expectations through continuous improvement and innovation.</p>;
      case 'values':
        return <p>We value integrity, excellence, and collaboration. We strive to uphold these values in everything we do.</p>;
      default:
        return <p>Click on a box to learn more about our vision, mission, and values.</p>;
    }
  };

  return (
    <div>
      <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
        <h1 className='mt-5' style={{ fontSize: '50px', textAlign: 'center' }}>Making a positive impact</h1>
        <p style={{ fontSize: '20px', width: '50%' }}>With a passion for technology and a commitment to excellence, we empower businesses to thrive in the digital landscape.</p>
        <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
          <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li>{'>'}</li>
          <li>About</li>
        </ul>
      </div>

      <section id='about-bg'
      >
        <div className='container pe-5 ps-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <VisibilitySensor onChange={handleChange} partialVisibility={100}>
            <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
              <div className='row' style={{ background: '#f6f6f4' }}>
                <div className='col-md-6 d-flex justify-content-center align-items-left p-5' style={{ textAlign: 'left', flexDirection: 'column' }}>
                  <p style={{ textAlign: 'left', color: '#f85c1d' }}>VALUES & CULTURE</p>
                  <h1 style={{ textAlign: 'left' }}>We keep our <br></br>
                    promises</h1>

                  <p className='mt-4' style={{ textAlign: 'left', fontSize: '20px' }}>We hold ourselves to the highest moral standards at all times.</p>

                  <div className="mt-4">
                    <VisibilitySensor onChange={handleChange} partialVisibility={100}>
                      <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
                        <div id='box' className="d-flex justify-content-center align-items-left" style={{ textAlign: 'center' }}>
                          <div className="col-md-4">
                            <div
                              className={`box ${activeBox === 'vision' ? 'active' : ''}`}
                              onClick={() => setActiveBox('vision')}
                            >
                              <h6>Vision</h6>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div
                              className={`box ${activeBox === 'mission' ? 'active' : ''}`}
                              onClick={() => setActiveBox('mission')}
                            >
                              <h6>Mission</h6>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div
                              className={`box ${activeBox === 'values' ? 'active' : ''}`}
                              onClick={() => setActiveBox('values')}
                            >
                              <h6>Values</h6>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-5">
                          <div className="col-12" style={{ fontSize: '17px', lineHeight: '30px' }}>
                            {renderContent()}
                          </div>
                        </div>
                      </div>
                    </VisibilitySensor>
                  </div>

                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                  <img src={about1} alt='about_page_image' className='img-fluid w-100 h-100' />
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>

      <section>
        <div id='about' className='p-5 w-100' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
          <p className='mt-5' style={{ color: '#f85c1d' }}>TEAM MEMBERS</p>
          <h1 style={{ fontSize: '45px', textAlign: 'center' }}>Get to know our amazing team</h1>
          <p style={{ fontSize: '20px', width: '43%' }}>With a passion for innovation and a dedication to excellence, we bring diverse expertise to every project we undertake.</p>
        </div>

        <div className='container pe-5 ps-5'>
          <div className='row'>
            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
              <div className={`col-md-4 mb-4 ${isVisible1 ? 'bottom-to-top' : ''}`}>
                <div className='p-4' style={{ background: '#f6f6f4' }}>
                  <img src={team1} alt='team-member' className='img-fluid' />
                  <h4 className='mt-4'>Sara Grant</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
              <div className={`col-md-4 mb-4 ${isVisible1 ? 'bottom-to-top' : ''}`}>
                <div className='p-4' style={{ background: '#f6f6f4' }}>
                  <img src={team2} alt='team-member' className='img-fluid' />
                  <h4 className='mt-4'>Claire Olson</h4>
                  <p>Sales Manager</p>
                </div>
              </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
              <div className={`col-md-4 mb-4 ${isVisible1 ? 'bottom-to-top' : ''}`}>
                <div className='p-4' style={{ background: '#f6f6f4' }}>
                  <img src={team3} alt='team-member' className='img-fluid' />
                  <h4 className='mt-4'>Reece Bronson</h4>
                  <p>Financial Manager</p>
                </div>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </section>


      <section id='about-choose'>
        <div className='container' style={{ background: '#f6f6f4', marginTop: '80px', paddingBottom: '80px' }}>
          <div className='row pt-5'>
            <div className='col-md-6 d-flex justify-content-center pt-5 ps-5' style={{ textAlign: 'left', flexDirection: 'column' }}>
              <p style={{ textAlign: 'left', color: '#f85c1d' }}>WHY CHOOSE US</p>
              <h1 style={{ fontSize: '50px' }}>Reasons to choose our lending specialists</h1>
            </div>
            <div className='col-md-6 pt-5 ps-5 mt-5'>
              <p style={{ textAlign: 'left', fontSize: '18px' }}>We care about your business and we're here if you need help finding a solution to match your business needs. Fast access to flexible funding solutions to support cash flow and business growth.</p>
            </div>
          </div>

          <div className='row mt-5'>
            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-3 col-md-12 col-12'>
                    <img src={icon1} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-8 col-md-12 col-12'>
                    <h5>Speed</h5>
                    <p>Swift approvals ensuring your business stays ahead in crucial decisions.</p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-3 col-md-12 col-12'>
                    <img src={icon2} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-8 col-md-12 col-12'>
                    <h5>Flexibility</h5>
                    <p>Tailored solutions adapting seamlessly to your evolving business.</p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-3 col-md-12 col-12'>
                    <img src={icon3} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-8 col-md-12 col-12'>
                    <h5>Confidence</h5>
                    <p>Reliable support fostering trust, providing assurance for your aspirations.</p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </section >

      <section id='nextstep'>
        <div className='container mt-5 mb-5'>
          <div className='row pt-5'>
            <div className='d-flex justify-content-center align-items-center mb-4 gap-3' style={{ flexDirection: 'column' }}>
              <p style={{ color: '#f85c1d' }}>START TODAY</p>
              <h1 style={{ fontSize: '50px', textAlign: 'center' }}>
                Ready to get started?<br></br>
                Take the next step
              </h1>

              <p style={{ fontSize: '20px', textAlign: 'center' }}>Experience unparalleled service, cutting-edge <br></br>technology, and dedicated support.</p>
              <a href='/Getstart'>
                <button id='button' style={{ width: '130px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
            </div>
          </div>
        </div>
      </section>

    </div >
  )
}

