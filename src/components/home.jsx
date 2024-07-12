import React, { useState, useEffect } from 'react';
import home1 from '../assets/home_page_image1.jpg'
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import blog1 from '../assets/blog-img1.jpg'
import blog2 from '../assets/blog-img2.jpg'
import blog3 from '../assets/blog-img3.jpg'
import icon1 from '../assets/icon-8.svg'
import icon2 from '../assets/icon-4.svg'
import icon3 from '../assets/icon-9.svg'
import '../components/home.css'
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const ChangingWords = () => {
    const words = ["tailored", "smart", "fast"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 1500); // Change word every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [words.length]);

    return (
        <span className="animated-word">{words[currentWordIndex]}</span>
    );
};



export const Home = () => {

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
          const url = 'https://ckconsultants.onrender.com/form1'; // Replace with your backend endpoint
          const response = await axios.post(url, formData);
    
          console.log('Form 1 submitted successfully!', response.data);
    
          // Reset form data after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } catch (error) {
          console.error('Error submitting form 1:', error);
        }
      };

    return (
        <div id='home'>
            <div className='container mt-5'>
                <div className='row pt-5'>
                    <div className='col-md-6 d-flex justify-content-center mb-4 gap-3' style={{ textAlign: 'left', flexDirection: 'column' }}>
                        <p style={{ textAlign: 'left', color: '#f85c1d' }}>FUNDING SOLUTIONS</p>
                        <h1 style={{ fontSize: '50px' }}>
                            Achieve your goals,<br />
                            access <ChangingWords /><br /> financing
                        </h1>

                        <p style={{ fontSize: '20px' }}>Unlock financial success with our trusted <br></br>expertise and personalized services.</p>

                        <a href='/Getstart'>
                            <button id='button' style={{ width: '130px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                    </div>

                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={` ${isVisible ? 'bottom-to-top' : ''}`}>
                                <img src={home1} alt='home_page_image' className='img-fluid' />
                            </div>
                        </VisibilitySensor>
                    </div>

                </div>
            </div>


            <section>
                <div className='mt-5 pt-5 pb-5'>
                    <div id='container-loan' style={{ background: '#174035', padding: '4rem 8rem' }}>
                        <div id='loan' className='row' style={{ background: '#274d43', padding: '4rem 4rem' }}>
                            <div id='personal-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Personal loan</h3>
                                <p>Customized funding designed to support personal aspirations, ensuring financial flexibility.</p>
                                <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}>Apply now</button>
                            </div>
                            <div id='startup-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Startup loan</h3>
                                <p>Specialized financial aid igniting new ventures, offering support for early-stage businesses to flourish.</p>
                                <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}><span>Apply now</span></button>
                            </div>
                            <div id='business-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Business loan</h3>
                                <p>Strategic financial assistance fueling established enterprises, enabling growth, and expansion.</p>
                                <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}>Apply now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mt-5'>
                    <div className='row pt-5'>
                        <div id='section-2' className='col-md-6 d-flex justify-content-center mb-4 gap-3' style={{ textAlign: 'left', flexDirection: 'column', paddingLeft: '4rem' }}>
                            <p style={{ textAlign: 'left', color: '#f85c1d' }}>PREPARATION</p>
                            <h1 style={{ fontSize: '50px' }}>Ready to apply?<br></br>Here's what you need</h1>

                            <p style={{ fontSize: '20px' }}>Business Type: LLC, Corporation</p>
                            <p style={{ fontSize: '20px' }}>Strong credit score</p>
                            <p style={{ fontSize: '20px' }}>Identification documents</p>

                            <a href='/Getstart'>
                                <button id='button' style={{ width: '130px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-canter'>
                            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                                <div className={` ${isVisible ? 'bottom-to-top' : ''}`}>
                                    <img src={home1} alt='home_page_image' className='img-fluid' />
                                </div>
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mt-5'>
                    <div className='row pt-5'>

                        <div className='col-md-6 d-flex justify-content-center align-items-canter mb-4'>
                            <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                                <div className={` ${isVisible ? 'bottom-to-top' : ''}`}>
                                    <img src={home1} alt='home_page_image' className='img-fluid' />
                                </div>
                            </VisibilitySensor>
                        </div>

                        <div id='section-3' className='col-md-6 d-flex justify-content-center gap-2' style={{ textAlign: 'left', flexDirection: 'column', paddingLeft: '8rem' }}>
                            <p style={{ textAlign: 'left', color: '#f85c1d' }}>GUIDANCE</p>
                            <h1 style={{ fontSize: '50px' }}>Advice tailored for <br></br> your success</h1>

                            <p style={{ fontSize: '20px' }}>Business growth strategies</p>
                            <p style={{ fontSize: '20px' }}>Hassle-free online application</p>
                            <p style={{ fontSize: '20px' }}>Legal consultation</p>

                            <a href='/Getstart'>
                                <button id='button' style={{ width: '130px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
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
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
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

                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
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
            </section>


            <section>
                <div className='mt-5 pt-5 pb-5'>
                    <div id='container-loan' style={{ background: '#174035', padding: '4rem 8rem' }}>
                        <div className='row pt-2 pb-5 justify-content-center align-items-center'>
                            <div className='col-md-5 d-flex justify-content-center pt-5' style={{ textAlign: 'left', flexDirection: 'column', color: 'white' }}>
                                <p style={{ textAlign: 'left' }}>SIMPLIFIED PROCESS</p>
                                <h1 style={{ fontSize: '50px' }}>Easy 3-step funding solution</h1>
                            </div>
                            <div className='col-md-4 pt-5'>
                                <p style={{ textAlign: 'left', fontSize: '18px', color: 'white' }}>Obtaining funding is hassle-free - apply online, receive a same-day decision, sign your contract.</p>
                            </div>
                            <div className='col-md-3 pt-5'>
                                <a href='/Getstart'>
                                    <button className='mt-4' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>

                        <div id='loan' className='row' style={{ background: '#274d43', padding: '2rem 2rem' }}>
                            <div id='personal-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>01</h6>
                                <h4 className='mt-3'>Online application<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></h4>
                                <p className='mt-3'>Get up and running in no time by creating a free account. Register only with your email address.</p>
                            </div>
                            <div id='startup-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>02</h6>
                                <h4 className='mt-3'>Same-day decision<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></h4>
                                <p className='mt-3'>Go through the summaries for each of your options, taking note of which ones check.</p>
                            </div>
                            <div id='business-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>03</h6>
                                <h4 className='mt-3'>Sign your contract<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></h4>
                                <p className='mt-3'>Effortlessly finalize your agreement online, ensuring a smooth and prompt funding process for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container' style={{ background: '#f6f6f4', marginTop: '80px', paddingBottom: '80px' }}>
                    <div className='row pt-2 pb-5 justify-content-center align-items-center'>
                        <div className='col-md-5 d-flex justify-content-center pt-5' style={{ textAlign: 'left', flexDirection: 'column', paddingLeft: '30px' }}>
                            <p style={{ textAlign: 'left', color: '#f85c1d' }}>TESTIMONIALS</p>
                            <h1 style={{ fontSize: '50px' }}>Real stories of businesses</h1>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <p style={{ textAlign: 'left', fontSize: '18px', paddingLeft: '30px' }}>Discover how businesses like yours transformed with our software. Real stories of growth, innovation, and success.</p>
                        </div>
                        <div className='col-md-3 pt-5 d-flex align-items-left ps-5'>
                            <button id='button' className='mt-4' style={{ width: '170px', padding: '.5rem', background: '#f85c1d', color: 'black', border: 'none' }}>View all stories<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>As a small business, their funding fueled our vision, leading to expansion. Grateful for their instrumental support in our journey to success.<br></br><br></br></p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Frederic Hill</h5>
                                            <h6>Founder & CEO</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial1} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>Their financial aid was pivotal, fueling our rapid growth. They understood our needs, providing strategic support crucial for our scaling journey.<br></br><br></br></p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Julie Kyle</h5>
                                            <h6>Account Executive</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial2} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>Their funding empowered our innovations, enabling us to introduce groundbreaking products. Their support pushed us towards innovation and excellence.</p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Brendan Buck</h5>
                                            <h6>Marketing Director</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial3} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>

                    <div className='row mt-3'>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>Their support turned our dreams into a reality, providing not just funding but also guidance and encouragement. A true catalyst for our business success.</p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Paige Lowery</h5>
                                            <h6>Operations Manager</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial4} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>During tough times, their funding and guidance were instrumental. Together, we navigated challenges, emerged stronger, and continued our journey.</p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Stefan Ball</h5>
                                            <h6>Marketing Manager</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial1} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='m-2 p-4' style={{ textAlign: 'left', background: 'white' }}>
                                    <p>During tough times, their funding and guidance were instrumental. Together, we navigated challenges, emerged stronger, and continued our journey.</p>
                                    <div className='row d-flex justify-content-between align-items-center mt-4'>
                                        <div className='col-lg-6 col-md-12 col-8'>
                                            <h5>Frederic Hill</h5>
                                            <h6>Founder & CEO</h6>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-4'>
                                            <img src={testimonial2} alt='testimonials' className='img-fluid w-75' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>

                </div>
            </section>


            <section>
                <div className='container' style={{ background: 'white', marginTop: '80px', paddingBottom: '80px' }}>
                    <div className='row pt-2 pb-5 justify-content-center align-items-center'>
                        <div className='col-md-5 d-flex justify-content-center pt-5' style={{ textAlign: 'left', flexDirection: 'column', paddingLeft: '30px' }}>
                            <p style={{ textAlign: 'left', color: '#f85c1d' }}>OUR BLOG</p>
                            <h1 style={{ fontSize: '50px' }}>Resources and stories center</h1>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <p style={{ textAlign: 'left', fontSize: '18px', paddingLeft: '30px' }}>Explore insightful content that keeps you ahead of the curve and connected to the pulse of what's happening.</p>
                        </div>
                        <div className='col-md-3 pt-5 d-flex align-items-left ps-5'>
                            <a href='/news'>
                                <button className='mt-4' id='button' style={{ width: '170px', padding: '.5rem', background: '#f85c1d', color: 'black', border: 'none' }}>Read all articles<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                        </div>
                    </div>

                    <div className='row mt-2' id='blog'>
                        <div className='col-md-4 col-12 p-2' >
                            <div className='m-2 p-4 d-flex justify-content-center align-items-left gap-3' style={{ textAlign: 'left', background: '#f6f6f4', flexDirection: 'column' }}>
                                <img src={blog1} alt='testimonials' className='img-fluid w-100' />
                                <h5 className='mt-2'>The rise of digital wallets: a fintech game-changer</h5>
                                <p>When evaluating potential agencies, consider their expertise in various aspects of branding and design.</p>
                                <a href='/news'>
                                    <button id='button' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Read more<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 p-2'>
                            <div className='m-2 p-4 d-flex justify-content-center align-items-left gap-3' style={{ textAlign: 'left', background: '#f6f6f4', flexDirection: 'column' }}>
                                <img src={blog2} alt='testimonials' className='img-fluid w-100' />
                                <h5 className='mt-2'>Saving smarter: practical tips for financial stability</h5>
                                <p>The concept of a multi-brand system has gained traction, allowing businesses to manage various brands.</p>
                                <a href='/news'>
                                    <button id='button' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Read more<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 p-2' >
                            <div className='m-2 p-4 d-flex justify-content-center align-items-left gap-3' style={{ textAlign: 'left', background: '#f6f6f4', flexDirection: 'column' }}>
                                <img src={blog3} alt='testimonials' className='img-fluid w-100' />
                                <h5 className='mt-2'>Building a balanced portfolio: a guide for novices</h5>
                                <p>A well-defined statement helps participants focus their creativity and ensures everyone is on the same page.</p>
                                <a href='/news'>
                                    <button id='button' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Read more<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-5 pb-5' style={{ background: '#274d43' }}>
                <div className='container'>
                    <div className='pe-3 ps-3 pt-5 pb-5'>
                        <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                            <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
                                <div className='row'>
                                    <div className='col-md-5 d-flex flex-column justify-content-center align-items-start p-3' style={{ textAlign: 'left', color: 'white' }}>
                                        <p>CONNECT</p>
                                        <h2 className='mb-3'>Get in touch today</h2>
                                        <p>Reach out to us for assistance and start your financial journey.</p>

                                        <div className='p-4 mb-4 mt-4 w-100' style={{ background: '#365a50' }}>
                                            <h5>Address:</h5>
                                            <p>15 Washington Square</p>
                                            <p>New York, NY 10075, USA</p>
                                        </div>

                                        <div className='p-4 w-100' style={{ background: '#365a50' }}>
                                            <h5>Contacts:</h5>
                                            <p>Email: hello@finpath.com</p>
                                            <p>Phone: +1 (215) 555-1122</p>
                                        </div>
                                    </div>

                                    <div className='col-md-1'></div> {/* Add this empty column for spacing */}

                                    <div className='col-md-6 p-5' style={{ background: 'white' }}>
                                        <p style={{ textAlign: 'left', color: '#f85c1d' }}>GET IN TOUCH</p>
                                        <h4 style={{ textAlign: 'left' }}>Let's get started</h4>
                                        <form className='mt-2' onSubmit={handleSubmit}>
                                            <div className="mb-3 mt-4">
                                                <input
                                                    type="text"
                                                    className="form-control text-left"
                                                    id="name"
                                                    placeholder="Name *"
                                                    style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500', background: '#f6f6f4' }}
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3 mt-4">
                                                <input
                                                    type="email"
                                                    className="form-control text-left"
                                                    id="email"
                                                    placeholder="Email address *"
                                                    style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500', background: '#f6f6f4' }}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 mt-4">
                                                <h5 style={{ textAlign: 'left' }} className='mb-4'>Additional information (optional)</h5>
                                                <textarea
                                                    className="form-control text-left"
                                                    id="message"
                                                    placeholder="Anything else you would like us to know?"
                                                    style={{ border: 'none', padding: '10px', borderRadius: '0', height: '150px', fontWeight: '500', background: '#f6f6f4' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn mt-2"
                                                style={{ background: '#f85c1d', color: 'white', width: '100%', borderRadius: '0', padding: '10px', fontWeight: '500' }}
                                            >
                                                Submit request
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </VisibilitySensor>
                    </div>
                </div>
            </section>


        </div>
    )
}

