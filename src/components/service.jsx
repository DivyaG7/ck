import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/service.css'
import VisibilitySensor from 'react-visibility-sensor';
import { ScrollToTop } from './scroll';

export const Service = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible13, setIsVisible13] = useState(false);
  const [isVisible14, setIsVisible14] = useState(false);
  const [isVisible15, setIsVisible15] = useState(false);

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


  const handleChange3 = (isVisible3) => {
    if (isVisible3) {
      setIsVisible3(true);
    }
  };

  const handleChange4 = (isVisible4) => {
    if (isVisible4) {
      setIsVisible4(true);
    }
  };

  const handleChange5 = (isVisible5) => {
    if (isVisible5) {
      setIsVisible5(true);
    }
  };

  const handleChange6 = (isVisible6) => {
    if (isVisible6) {
      setIsVisible6(true);
    }
  };

  const handleChange7 = (isVisible7) => {
    if (isVisible7) {
      setIsVisible7(true);
    }
  };

  const handleChange8 = (isVisible8) => {
    if (isVisible8) {
      setIsVisible8(true);
    }
  };

  const handleChange9 = (isVisible9) => {
    if (isVisible9) {
      setIsVisible9(true);
    }
  };

  const handleChange10 = (isVisible10) => {
    if (isVisible10) {
      setIsVisible10(true);
    }
  };

  const handleChange11 = (isVisible11) => {
    if (isVisible11) {
      setIsVisible11(true);
    }
  };

  const handleChange12 = (isVisible12) => {
    if (isVisible12) {
      setIsVisible12(true);
    }
  };

  const handleChange13 = (isVisible13) => {
    if (isVisible13) {
      setIsVisible13(true);
    }
  };

  const handleChange14 = (isVisible14) => {
    if (isVisible14) {
      setIsVisible14(true);
    }
  };

  const handleChange15 = (isVisible15) => {
    if (isVisible15) {
      setIsVisible15(true);
    }
  };


  return (
    <div>
      <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
        <h1 className='mt-5' style={{ fontSize: '50px', textAlign: 'center' }}>Our services and solutions</h1>
        <p style={{ fontSize: '20px', width: '50%' }}>Discover how our tech solutions can transform your business. Explore our features and take your business to new heights.</p>
        <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
          <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li>{'>'}</li>
          <li>Services</li>
        </ul>
      </div>

      <section>
        <div className='container' style={{ textAlign: 'left' }}>
          <div className='row p-5 m-5 gap-4' id='service'>
            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
              <div className={` ${isVisible1 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>1</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Interim Resolution Professionals.</h5>
                        <p>We act as Interim Resolution Professionals (IRPs)
                          for initiating and implementing CIRP, offering our services to Financial Creditors,
                          Operational Creditors, and other stakeholders. Our scope of work includes taking control
                          of the debtor’s assets and affairs, managing operations, and ensuring compliance with
                          the Insolvency and Bankruptcy Code, 2016.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
              <div className={` ${isVisible2 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>2</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Resolution Professional.</h5>
                        <p>We serve as Resolution Professionals, guiding Financial
                          Creditors, Operational Creditors, and Corporate Debtors through the CIRP. Our expertise
                          ensures the development and execution of effective resolution plans to revive financially
                          distressed entities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange3} partialVisibility={100}>
              <div className={` ${isVisible3 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>3</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Representation on Committee of Creditors.</h5>
                        <p>Our firm represents specific Financial
                          Creditors or Classes of Creditors on the Committee of Creditors as per sections 21(6C)
                          and 21(6A)(b) of the Insolvency and Bankruptcy Code, 2016, ensuring their interests are
                          effectively communicated and safeguarded.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange4} partialVisibility={100}>
              <div className={` ${isVisible4 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>4</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Liquidator Services.</h5>
                        <p>Acting as Liquidators, we provide end-to-end services, including
                          verification of creditors' claims, custody and control of assets, and executing liquidation
                          processes to maximize returns for stakeholders.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
              <div className={` ${isVisible5 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>5</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Corporate Consulting for Resolution / Liquidation.</h5>
                        <p>We offer strategic advice to
                          stakeholders within the IBC ecosystem, guiding them on the optimal courses of action for
                          resolution processes, ensuring compliance and maximizing recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange6} partialVisibility={100}>
              <div className={` ${isVisible6 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>6</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Preparation of RFRPs, Evaluation Matrix, Process Documents.</h5>
                        <p>Our team assists
                          Corporates in preparing Request for Resolution Plans (RFRPs), Evaluation Matrices,
                          and other essential process documents to streamline the resolution process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange7} partialVisibility={100}>
              <div className={` ${isVisible7 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>7</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Identification of Prospective Resolution Applicants.</h5>
                        <p>Leveraging our extensive
                          business networks and experience, we identify potential investors, resolution applicants,
                          and Special Situation Lenders for CIRP matters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange8} partialVisibility={100}>
              <div className={` ${isVisible8 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>8</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Managing Operations/Cash Flows.</h5>
                        <p>With a panel of industry experts and a skilled team
                          of finance professionals, we manage the operations and cash flows of entities under
                          insolvency, ensuring their continuity as going concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange9} partialVisibility={100}>
              <div className={` ${isVisible9 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>9</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>IBC Acquisition Strategy Advisory.</h5>
                        <p>We advise clients on acquiring distressed assets
                          through CIRP and Liquidation processes, providing strategic insights and handholding
                          through the entire acquisition journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange10} partialVisibility={100}>
              <div className={` ${isVisible10 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>10</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Preparation of Resolution Plans.</h5>
                        <p>Our experts assist resolution applicants in preparing
                          comprehensive Resolution Plans, ensuring they meet all regulatory requirements and
                          effectively address the needs of the Corporate Debtor.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange11} partialVisibility={100}>
              <div className={` ${isVisible11 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>11</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Legal Advisory Service / Representation</h5>
                        <p>Partnering with reputable legal firms, we
                          provide extensive legal advisory services, including filing CIRP applications, pleadings,
                          and representing stakeholders before NCLT, NCLAT, and the Supreme Court of India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange12} partialVisibility={100}>
              <div className={` ${isVisible12 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>12</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Interim Finance / Fund Syndications</h5>
                        <p>Our team is adept at raising interim finance for
                          companies under CIRP, arranging fund syndication, and navigating complex financial
                          transactions for restructuring and takeovers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange13} partialVisibility={100}>
              <div className={` ${isVisible13 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>13</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>NCLT/NCLAT Representations</h5>
                        <p>We prepare and represent applications before NCLT
                          and NCLAT, ensuring our clients' interests are thoroughly advocated.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange14} partialVisibility={100}>
              <div className={` ${isVisible14 ? 'right-to-left' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>14</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Advisory to Corporate Debtors</h5>
                        <p>We offer advisory services to Corporate Debtors under
                          financial stress, following RBI Circulars and the Sashakt Scheme, guiding them towards
                          financial stability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>


            <VisibilitySensor onChange={handleChange15} partialVisibility={100}>
              <div className={` ${isVisible15 ? 'left-to-right' : ''}`}>
                <div className='col-md-12 border'>
                  <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                    <div>
                      <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>15</h1>
                    </div>
                    <div>
                      <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                        <h5>Advisory to Banks / FIs</h5>
                        <p>We assist Banks and Financial Institutions in determining the
                          best actions under IBC versus SARFAESI, ensuring optimal outcomes for their
                          distressed assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>

          </div>
        </div>
      </section>

      <ScrollToTop />


    </div>
  )
}

