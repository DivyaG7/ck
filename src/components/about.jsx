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
import { ScrollToTop } from './scroll'

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
        return <p>To be the leading consultancy firm in insolvency and bankruptcy services,
          recognized for our expertise, integrity, and commitment to delivering innovative solutions that
          drive value for our clients and the community at large.</p>;
      case 'mission':
        return <p>To provide unparalleled advisory and professional services in the field of
          insolvency and bankruptcy, ensuring efficient and effective resolution processes that protect the
          interests of all stakeholders and contribute to the overall stability and growth of the financial
          ecosystem.</p>;
      case 'values':
        return <p>CK Consultants specializes in guiding companies through insolvency and resolution processes
          under the Insolvency & Bankruptcy Code, 2016. Our team of Interim Resolution Professionals
          (IRPs) and Resolution Professionals (RPs) efficiently manages financial distress, protecting all
          stakeholders' interests. With our expertise and industry experience, we offer customized
          advisory, legal representation, and financial restructuring services. We support clients in
          achieving the best possible outcomes throughout the insolvency journey.</p>;
      default:
        return <p>Click on a box to learn more about our vision, mission, and values.</p>;
    }
  };

  return (
    <div>
      <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
        <h1 className='mt-5' style={{ fontSize: '50px', textAlign: 'center' }}>Innovative CIRP solutions guaranteed.</h1>
        <p style={{ fontSize: '20px', width: '50%' }}>CK Consultants: Leading in Insolvency & Bankruptcy solutions under the 2016 Code. Expert services ensure a seamless Corporate Insolvency Resolution Process (CIRP)</p>
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
            <div className='col-md-6 d-flex justify-content-center ps-5' style={{ textAlign: 'left', flexDirection: 'column' }}>
              <p style={{ textAlign: 'left', color: '#f85c1d' }}>WHY CHOOSE US</p>
              <h1 style={{ fontSize: '50px' }}>Reasons to choose us</h1>
            </div>
            <div className='col-md-6 pt-5 ps-5'>
              <p style={{ textAlign: 'left', fontSize: '18px' }}>At CK Consultants, we combine in-depth knowledge of the Insolvency and Bankruptcy Code
                with practical experience to provide our clients with tailored solutions. Our holistic approach,
                extensive network, and commitment to excellence ensure that we deliver measurable results,
                safeguarding the interests of all stakeholders involved.<br></br><br></br>
                Choose CK Consultants for expert guidance, strategic insights, and comprehensive support
                throughout your insolvency and bankruptcy processes.
              </p>
            </div>
          </div>

          <div className='row mt-5'>
            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <img src={icon1} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <h5>Expertise in Insolvency & Bankruptcy</h5>
                    <p>CK Consultants specializes in navigating the
                      complexities of the Insolvency & Bankruptcy Code, 2016. Our team comprises seasoned
                      Interim Resolution Professionals (IRPs) and Resolution Professionals (RPs) with
                      extensive experience in managing corporate insolvency proceedings, ensuring thorough
                      and effective resolution strategies.
                    </p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <img src={icon2} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <h5>Comprehensive Service Offerings</h5>
                    <p>We provide a complete range of services tailored
                      to meet the diverse needs of our clients under financial distress. From advisory and legal
                      representation to financial restructuring and resolution planning, CK Consultants offers
                      holistic solutions aimed at safeguarding stakeholders' interests and optimizing outcomes
                      during insolvency processes.
                    </p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
                <div className='row m-2 gap-3' style={{ textAlign: 'left', background: 'white', padding: '30px' }}>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <img src={icon3} alt='speed-icon' style={{ background: '#f6f6f4', padding: '10px' }} />
                  </div>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <h5>Proven Track Record</h5>
                    <p>With a demonstrated track record of successful case
                      management and resolution, CK Consultants has earned a reputation for delivering
                      results. Our proactive approach and commitment to client satisfaction underscore our
                      ability to handle challenging insolvency cases with professionalism and diligence,
                      achieving favorable resolutions for our clients.</p>
                  </div>
                </div>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </section >


      <section className='container'>
        <div className='row mt-5 pt-4'>
        <p style={{ color: '#f85c1d' }}>SERVICES</p>
          <h1 className='mb-5' style={{ fontSize: '50px', textAlign: 'center' }}>
            Our Key Services
          </h1>
          <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: '#f6f6f4', padding: '30px' }}>
                <div className='col-lg-12 col-md-12 col-12'>
                  <h5 style={{fontWeight: 'bold'}}>Interim Resolution Professionals.</h5>
                  <p>We act as Interim Resolution Professionals (IRPs) for initiating and implementing CIRP, offering our services to Financial Creditors, Operational Creditors, and other stakeholders. Our scope of work includes taking control of the debtor’s assets and affairs, and ensuring compliance with the Insolvency and Bankruptcy Code, 2016.</p>
                  <a href='/service'><button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500' }}><span>Read more</span></button></a>
                </div>
              </div>
            </div>
          </VisibilitySensor>

          <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: '#f6f6f4', padding: '30px' }}>
                <div className='col-lg-12 col-md-12 col-12'>
                  <h5 style={{fontWeight: 'bold'}}>Resolution Professional.</h5>
                  <p>We serve as Resolution Professionals, guiding Financial Creditors, Operational Creditors, and Corporate Debtors through the CIRP. Our expertise ensures the development and execution of effective resolution plans to revive financially distressed entities.</p><br></br>
                  <a href='/service'><button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500' }}><span>Read more</span></button></a>
                </div>
              </div>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
            <div className={`col-md-4 col-12 p-2 ${isVisible2 ? 'bottom-to-top' : ''}`}>
              <div className='row m-2 gap-3' style={{ textAlign: 'left', background: '#f6f6f4', padding: '30px' }}>
                <div className='col-lg-12 col-md-12 col-12'>
                  <h5 style={{fontWeight: 'bold'}}>Representation on Committee of Creditors.</h5>
                  <p>Our firm represents specific Financial Creditors or Classes of Creditors on the Committee of Creditors as per sections 21(6C) and 21(6A)(b) of the Insolvency and Bankruptcy Code, 2016, ensuring their interests are effectively communicated and safeguarded.</p>
                  <a href='/service'><button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500' }}><span>Read more</span></button></a>
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>


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


      <ScrollToTop />

    </div >
  )
}

