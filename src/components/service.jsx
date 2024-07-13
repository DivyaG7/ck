import React from 'react'
import { Link } from 'react-router-dom'
import '../components/service.css'

export const Service = () => {
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
            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>1</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Interim Resolution Professionals</h5>
                    <p>We provide services to Financial Creditors, Operational Creditors and other stakeholders to act as IRPs for initiating and implementing Corporate Insolvency Resolution Process ('CIRP') as specified under the Insolvency & Bankruptcy Code, 2016.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>2</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Resolution Professional</h5>
                    <p>We provide services to Financial Creditors, Operational Creditors and to the Corporate Debtors to act as a Resolution Professional under a Corporate Insolvency Resolution Process ('CIRP') as specified under the Insolvency & Bankruptcy Code, 2016.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>3</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Representation on Commitee of Creditors</h5>
                    <p>We provide services as mentioned under section 21 (6C) and section 21 (6A) (b) of the Insolvency & Bankruptcy Code, 2016 to represent specific Financial Creditor/ any Class of Creditors on the Committee of Creditors.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>4</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Liquidator</h5>
                    <p>We provide all services as a Liquidator as specified under the Insolvency & Bankruptcy Code, 2016 such as verification of claims of creditors, custody and control of the assets, preserve and protect assets of the company, carry out liquidation for the benefits of all stakeholders.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>5</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Corporate consulting for Resolution / Liquidation</h5>
                    <p>We provide professional and strategic advice to all stakeholders in the IBC ecosystem for the best course of action to be adopted for the resolution process in case of default by the Corporate Debtor.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>6</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Preparation of RFRPs, Evaluation Matrix , Process Documents</h5>
                    <p>We provide consultation to Corporates for Preparation of RFRPs, Evaluation Matrix , Process Documents.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>7</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Identification of prospective resolution applicants, investors, lenders.</h5>
                    <p>Given the vast Insolvency experience and associated business networks developed by our Senior IPs , we as a team have substantial access to potential investors and Special Situation Lenders who could be potential resolution applicant in any CIRP matters.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>8</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Managing operations/cash flows of the entity under Insolvency.</h5>
                    <p>Witworth has on its panel many industry experts from varied industry segments. These are senior and experienced professionals with working knowledge of each industry having personally worked in those segments. These Industry Specialists coupled with an experienced team of CAs, CSes, and finance and business professionals are available at all our branch locations enabling us to manage the ongoing operations, control cash flows and payments for maintaining an entity under CIRP as a going concern.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>9</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>IBC Acquisition Strategy Advisory for resolution applicants for acquisition of assets / entities through the CIRP / Liquidation process</h5>
                    <p>We advise clients who are looking to invest in distressed assets though the CIRP / Liquidation route. Their investment strategy as well as handholding them through the process is part of our Advisory business.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>10</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Preparation of resolution plans and representations of resolution applicant before RP, CoC , NCLT</h5>
                    <p>Our team of experts will help the resolution applicant to prepare an appropriate Resolution Plan for the business entity under CIRP.
                      <br></br>
                      As per Section 5(26) of the IBC, "Resolution Plan" means a plan proposed by any person for Insolvency Resolution of the Corporate Debtor as a going concern. A resolution plan is prepared on the basis of the Information Memorandum given by the Resolution Professional.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>11</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Legal Advisory Service / Representation</h5>
                    <p>We provide legal assistance to our clients through empanelled advocates for initiating the Insolvency Resolution process. We have established associations with reputed Legal firms to undertake cases with NCLT benches. All the needs of the client with regard to the following are taken care of .</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>12</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Interim Finance / Fund Syndications</h5>
                    <p>The team is experienced in raising Interim Finance for companies under CIRP as well as implementing complex transactions involved in arranging fund syndication and for raising funds from investors, Special Situation Funds and NBFCs etc. for restructuring, takeover etc. of financially distressed entities. The team advises on navigating bankruptcies, acquisitions, debt restructurings, trading etc.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>13</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>NCLT/NCLAT Representations</h5>
                    <p>To prepare any kind of application for and represent before NCLT and NCLAT.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>14</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Advisory to Corporate Debtor</h5>
                    <p>Advisory to Corporate Debtor under financial stress as per RBI Circular dated June 7, 2019 and Sashakt Scheme.</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-md-12 border'>
              <div className='d-flex gap-4 pt-5 pb-5 pe-2 ps-2'>
                <div>
                  <h1 style={{ fontSize: '60px', fontWeight: '800', color: '#f85c1d' }}>15</h1>
                </div>
                <div>
                  <div className='d-flex gap-2' style={{ flexDirection: 'column' }}>
                    <h5>Advisory to Banks /FIs</h5>
                    <p>Advise Banks/Financial Institutions in shortlisting matters for action under IBC Vs SARFAESI</p>
                    <a href='/' style={{ textDecoration: 'none' }}><p>Scope of work of Interim Resolution Professionals</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

