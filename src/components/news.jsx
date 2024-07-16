import React from 'react'
import { Link } from 'react-router-dom'
import '../components/news.css'
import { ScrollToTop } from './scroll'

export const News = () => {
  return (
    <div>
      <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
        <h1 className='mt-5' style={{ fontSize: '50px', textAlign: 'center' }}>Blog</h1>
        <p style={{ fontSize: '20px', width: '50%' }}>Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.</p>
        <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
          <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li>{'>'}</li>
          <li>Blog</li>
        </ul>
      </div>


      <section>
        <div className='container mt-5 mb-5 p-4' style={{ background: '#f6f6f4' }}>
          <h2>Latest Additions</h2>
          <div className='row mt-5' style={{ textAlign: 'left' }}>
            <div className='col-md-4 mb-4'>
              <div className='d-flex flex-column' id='news'>
                <h5>CORPORATE LAWS</h5>
                <div className='mt-3'>
                  <p><a href='/'>Stock brokers to detect mule accounts, set up systems to detect fraud and market abuse</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 12, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Disclosure requirements w.r.t. debt securities | Amendments in LODR & NCS Regulations</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 12, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>SEBI eases investing norms for NRIs, OCIs, and RIs through FPI route in IFSC</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 9, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Welcome Aboard Mr. 0101101: Inducting AI in corporate boardroom</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 8, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>SEBI approves the reduction of face value to Rs. 10000 for privately placed debt securities</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 6, 2024</p>
                </div>
              </div>
            </div>

            <div className='mb-5 d-md-none' style={{ borderBottom: '2px solid #f0f0f9' }}></div>


            <div className='col-md-4 mb-4'>
              <div className='d-flex flex-column' id='news'>
                <h5>RESOLUTION</h5>
                <div className='mt-3'>
                  <p><a href='/'>Importance of Filing Timely Claims in IBC: A Guide for Government Departments</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>June 19, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Recent amendments in IBBI Regulations</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>February 22, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Summary of Important Supreme Court Judgements on IBC</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>February 15, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Snapshot of Amendments in the IBBI Regulations</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>February 3, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Group Insolvency: Relevance of Substantive Consolidation in Indian Context</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>January 10, 2024</p>
                </div>
              </div>
            </div>

            <div className='mb-5 d-md-none' style={{ borderBottom: '2px solid #f0f0f9' }}></div>


            <div className='col-md-4 mb-4'>
              <div className='d-flex flex-column' id='news'>
                <h5>FINANCIAL SERVICES</h5>
                <div className='mt-3'>
                  <p><a href='/'>Time to say Wah! to Pravaah: New interface for regulatory approvals by NBFCs</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 12, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Cryptos: Are They Back in Business?</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 11, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Time value of money, NPVs, IRRs</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 6, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>Consent Managers for NBFCs</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 5, 2024</p>
                </div>

                <div className='mt-2'>
                  <p><a href='/'>FAQs on Co-lending</a></p>
                  <p style={{ fontSize: '10px', color: '#818283' }}>July 4, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />

    </div>
  )
}

