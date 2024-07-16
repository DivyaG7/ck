import React, { useState, useEffect } from 'react';
import home1 from '../assets/home_page_image1.jpg'
// import testimonial1 from '../assets/testimonial1.jpg'
// import testimonial2 from '../assets/testimonial2.jpg'
// import testimonial3 from '../assets/testimonial3.jpg'
// import testimonial4 from '../assets/testimonial4.jpg'
import findsol from '../assets/findsol.jpeg'
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
    // const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    // const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);

    const handleChange1 = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    // const handleChange2 = (isVisible2) => {
    //     if (isVisible2) {
    //         setIsVisible2(true);
    //     }
    // };

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

    // const handleChange5 = (isVisible5) => {
    //     if (isVisible5) {
    //         setIsVisible5(true);
    //     }
    // };

    const handleChange6 = (isVisible6) => {
        if (isVisible6) {
            setIsVisible6(true);
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
                                <img src={findsol} alt='home_page_image' className='img-fluid' />
                            </div>
                        </VisibilitySensor>
                    </div>

                </div>
            </div>


            <section>
                <div className='mt-5 pt-5 pb-5'>
                    <div id='container-loan' style={{ background: '#174035', padding: '4rem 8rem' }}>
                        <div className='row pt-2 pb-5 justify-content-center align-items-center'>
                            <div className='col-md-6 d-flex justify-content-center pt-5' style={{ textAlign: 'left', flexDirection: 'column', color: 'white' }}>
                                <p style={{ textAlign: 'left' }}>SERVICES</p>
                                <h1 style={{ fontSize: '50px' }}>Our Key Services</h1>
                            </div>
                            <div className='col-md-6 pt-5'>
                                <a href='/service'>
                                    <button className='mt-4' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Know more<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>
                        <div id='loan' className='row' style={{ background: '#274d43', padding: '4rem 4rem' }}>
                            <div id='personal-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Interim Finance</h3>
                                <p>Our team excels at raising interim finance for CIRP, arranging fund syndications, and managing complex financial transactions for restructuring and takeovers.</p>
                                <a href='/service'>
                                    <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}>Read more</button></a>
                            </div>
                            <div id='startup-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Resolution Professional</h3>
                                <p>We serve as Resolution Professionals, guiding Financial
                                    Creditors, Operational Creditors, and Corporate Debtors through the CIRP</p>
                                <a href='/service'>
                                    <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}><span>Read more</span></button></a>
                            </div>
                            <div id='business-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h3>Advisory to Banks / FIs</h3>
                                <p>We assist Banks and Financial Institutions in determining the best actions under IBC versus SARFAESI, ensuring optimal outcomes for their distressed assets.</p>
                                <a href='/service'>
                                    <button className='button-underline' style={{ background: '#274d43', border: 'none', color: 'white', fontWeight: '500', marginLeft: '-20px' }}>Read more</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
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
                            <VisibilitySensor onChange={handleChange2} partialVisibility={100}>
                                <div className={` ${isVisible2 ? 'bottom-to-top' : ''}`}>
                                    <img src={home1} alt='home_page_image' className='img-fluid' />
                                </div>
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            </section> */}

            <section>
                <div className='container mt-5'>
                    <div className='row pt-5'>

                        <div className='col-md-6 d-flex justify-content-center align-items-canter mb-4'>
                            <VisibilitySensor onChange={handleChange3} partialVisibility={100}>
                                <div className={` ${isVisible3 ? 'bottom-to-top' : ''}`}>
                                    <img src={home1} alt='home_page_image' className='img-fluid' />
                                </div>
                            </VisibilitySensor>
                        </div>

                        <div id='section-3' className='col-md-6 d-flex justify-content-center gap-2' style={{ textAlign: 'left', flexDirection: 'column', paddingLeft: '8rem' }}>
                            <p style={{ textAlign: 'left', color: '#f85c1d' }}>GUIDANCE</p>
                            <h1 style={{ fontSize: '50px' }}>Guiding with expertise</h1>

                            <p style={{ fontSize: '20px' }}>Trust in our expertise to drive your success.</p>
                            <p style={{ fontSize: '20px' }}>Enhancing performance</p>
                            <p style={{ fontSize: '20px' }}>Implement new strategies</p>

                            <a href='/Getstart'>
                                <button id='button' style={{ width: '130px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
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
                        <VisibilitySensor onChange={handleChange4} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible4 ? 'bottom-to-top' : ''}`}>
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

                        <VisibilitySensor onChange={handleChange4} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible4 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange4} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible4 ? 'bottom-to-top' : ''}`}>
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
            </section>


            <section>
                <div className='mt-5 pt-5 pb-5'>
                    <div id='container-loan' style={{ background: '#174035', padding: '4rem 8rem' }}>
                        <div className='row pt-2 pb-5 justify-content-center align-items-center'>
                            <div className='col-md-5 d-flex justify-content-center pt-5' style={{ textAlign: 'left', flexDirection: 'column', color: 'white' }}>
                                <p style={{ textAlign: 'left' }}>VALUES & CULTURE</p>
                                <h1 style={{ fontSize: '50px' }}>We keep our promises</h1>
                            </div>
                            <div className='col-md-4 pt-5'>
                                <p style={{ textAlign: 'left', fontSize: '18px', color: 'white' }}>We hold ourselves to the highest moral standards at all times.</p>
                            </div>
                            <div className='col-md-3 pt-5'>
                                <a href='/about'>
                                    <button className='mt-4' style={{ width: '150px', padding: '.5rem', background: 'white', color: 'black', border: 'none' }}>Know more<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></a>
                            </div>
                        </div>

                        <div id='loan' className='row' style={{ background: '#274d43', padding: '2rem 2rem' }}>
                            <div id='personal-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>01</h6>
                                <h4 className='mt-3'>Vision<FontAwesomeIcon icon={faArrowRight} className='ms-5' /></h4>
                                <p className='mt-3'>To be the leading consultancy firm in insolvency and bankruptcy services, recognized for our expertise, integrity, and commitment to delivering innovative solutions that drive value for our clients and the community at large.</p>
                            </div>
                            <div className='mb-5 d-block d-md-none' style={{ borderBottom: '.5px solid #f0f0f9' }}></div>
                            <div id='startup-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>02</h6>
                                <h4 className='mt-3'>Mission<FontAwesomeIcon icon={faArrowRight} className='ms-5' /></h4>
                                <p className='mt-3'>To provide unparalleled advisory and professional services in the field of insolvency and bankruptcy, ensuring efficient and effective resolution processes that protect the interests of all stakeholders and contribute to the overall stability and growth of the financial ecosystem.</p>
                            </div>
                            <div className='mb-5 d-block d-md-none' style={{ borderBottom: '.5px solid #f0f0f9' }}></div>
                            <div id='business-loan' className='col-md-4 mb-4' style={{ textAlign: 'left', color: 'white', padding: '20px' }}>
                                <h6 style={{ boxSizing: 'border-box', border: 'none', background: '#365a50', width: 'fit-content', padding: '15px' }}>03</h6>
                                <h4 className='mt-3'>Values<FontAwesomeIcon icon={faArrowRight} className='ms-5' /></h4>
                                <p className='mt-3'>CK Consultants specializes in guiding companies through insolvency and resolution processes under the Insolvency & Bankruptcy Code, 2016.Our team of Interim Resolution Professionals (IRPs) and Resolution Professionals (RPs) efficiently manages financial distress, protecting all stakeholders' interests. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
                        <VisibilitySensor onChange={handleChange5} partialVisibility={100}>
                            <div className={`col-md-4 col-12 p-2 ${isVisible5 ? 'bottom-to-top' : ''}`}>
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
            </section> */}


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
                        <VisibilitySensor onChange={handleChange6} partialVisibility={100}>
                            <div className={`${isVisible6 ? 'bottom-to-top' : ''}`}>
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

