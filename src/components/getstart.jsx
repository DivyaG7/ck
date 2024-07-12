import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../components/getstart.css'
import axios from 'axios';


export const Getstart = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleChange1 = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        checkboxes: {
            'General enquiry': false,
            'Billing and subscriptions': false,
            'Corporate information': false,
            'Security concern': false,
            'Other': false,
        },
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
    
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                checkboxes: {
                    ...prevState.checkboxes,
                    [id]: checked,
                },
            }));
        } else {
            setFormData({
                ...formData,
                [id]: value,
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Transform checkboxes object to an array of selected options
        const selectedCheckboxes = Object.keys(formData.checkboxes).filter(key => formData.checkboxes[key]);
    
        try {
            const url = 'https://ckconsultants.onrender.com/form2'; // Replace with your backend endpoint
            const response = await axios.post(url, {
                ...formData,
                checkboxes: selectedCheckboxes,
            });
    
            console.log('Form 2 submitted successfully!', response.data);
    
            // Reset form data after successful submission
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
                checkboxes: {
                    'General enquiry': false,
                    'Billing and subscriptions': false,
                    'Corporate information': false,
                    'Security concern': false,
                    'Other': false,
                },
            });
        } catch (error) {
            console.error('Error submitting form 2:', error);
        }
    };
    


    return (
        <div>
            <div id='about' className='p-5 w-100' style={{ background: '#174035', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, textAlign: 'center' }}>
                <h1 className='mt-5' style={{ fontSize: '50px', textAlign: 'center' }}>Free consultation</h1>
                <p style={{ fontSize: '20px', width: '40%' }}>Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.</p>
                <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
                    <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                    <li>{'>'}</li>
                    <li>Free consultation</li>
                </ul>
            </div>

            <section id='about-bg'
            >
                <div className='container pe-5 ps-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <VisibilitySensor onChange={handleChange1} partialVisibility={100}>
                        <div className={`${isVisible ? 'bottom-to-top' : ''}`}>
                            <div className='row' style={{ background: '#f6f6f4' }}>
                                <div className='col-md-6 d-flex justify-content-center align-items-left p-5' style={{ textAlign: 'left', flexDirection: 'column', background: '#f6f6f4' }}>
                                    <p style={{ textAlign: 'left', color: '#f85c1d' }}>CONTACT US</p>
                                    <h2 style={{ textAlign: 'left' }}>Don’t hesitate to reach out. We’ll be happy to respond</h2>

                                    <div className='mt-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>
                                        <div className='p-3 d-flex w-100' style={{ background: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                                <h5>1. Inquiry submission</h5>
                                                <p>Submit your quote inquiry form.</p>
                                            </div>
                                            <div className='d-flex p-3' style={{ background: '#f6f6f4', color: '#f7570a' }} id='fontawesome'>
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex w-100' style={{ background: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                                <h5>2. Data evaluation</h5>
                                                <p>We review your information.</p>
                                            </div>
                                            <div className='d-flex p-3' style={{ background: '#f6f6f4', color: '#f7570a' }} id='fontawesome'>
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex w-100' style={{ background: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                                <h5>3. Personalized suggestions</h5>
                                                <p>We generate a custom quote.</p>
                                            </div>
                                            <div className='d-flex p-3' style={{ background: '#f6f6f4', color: '#f7570a' }} id='fontawesome'>
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex w-100' style={{ background: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                                <h5>4. Quote delivery</h5>
                                                <p>Receive your quotes via email.</p>
                                            </div>
                                            <div className='d-flex p-3' style={{ background: '#f6f6f4', color: '#f7570a' }} id='fontawesome'>
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex w-100' style={{ background: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className='d-flex' style={{ flexDirection: 'column' }}>
                                                <h5>5. Follow-up</h5>
                                                <p>Receive assistance with your questions.</p>
                                            </div>
                                            <div className='d-flex p-3' style={{ background: '#f6f6f4', color: '#f7570a' }} id='fontawesome'>
                                                <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                                            </div>
                                        </div>

                                    </div>




                                </div>
                                <div className='col-md-6 p-5' style={{ background: '#eeeeec' }}>

                                    <h4 style={{ textAlign: 'left' }}>Contact details</h4>
                                    <form className='mt-2' onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-4">
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
                                        <div className="mb-3 mt-4">
                                            <input
                                                type="text"
                                                className="form-control text-left"
                                                id="phone"
                                                placeholder="Phone number"
                                                style={{ border: 'none', padding: '10px', borderRadius: '0', fontWeight: '500' }}
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 mt-4">
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
                                        <div className="mt-4" style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h5 style={{ textAlign: 'left' }} className='mb-4 mt-1'>How can we help?</h5>
                                            {['General enquiry', 'Billing and subscriptions', 'Corporate information', 'Security concern', 'Other'].map((description, index) => (
                                                <div className="form-check" style={{ display: 'flex', gap: 5 }} key={index}>
                                                    <input
                                                        className="form-check-input custom-checkbox"
                                                        type="checkbox"
                                                        id={`checkbox${index + 1}`}
                                                        checked={formData.checkboxes[`checkbox${index + 1}`]}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={`checkbox${index + 1}`}>
                                                        {description}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mb-4 mt-4">
                                            <h5 style={{ textAlign: 'left' }} className='mb-4'>Additional information (optional)</h5>
                                            <textarea
                                                className="form-control text-left"
                                                id="message"
                                                placeholder="Anything else you would like us to know?"
                                                style={{ border: 'none', padding: '10px', borderRadius: '0', height: '150px', fontWeight: '500' }}
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

