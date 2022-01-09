import React from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
// init("user_dS89JxAdKe0UcZMwFTVYr");
import { useState } from 'react';


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5x7mjki', 'template_i8ubvjy', formRef.current, 'user_dS89JxAdKe0UcZMwFTVYr')
            .then((result) => {
                console.log(result.text);
                setDone(true)

            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={require('../../img/Phone.png')} alt="image not available" className="c-icon" />
                            +91-7410 147 125
                        </div>

                        <div className="c-info-item">
                            <img src={require('../../img/Email.png')} alt="image not available" className="c-icon" />
                            sushant.pru@gmail.com
                        </div>

                        <div className="c-info-item">
                            <img src={require('../../img/Address.png')} alt="image not available" className="c-icon" />
                            <p>7, Peterbrook Rise,
                                Shirley, Solihull, B90 1 JH,
                                Birmingham,
                                United Kingdom</p>
                        </div>

                    </div>


                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>
                        <p>Get in touch. Always ready to serve you</p>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />

                        <input type="text" placeholder='Subject' name="user_subject" />

                        <input type="text" placeholder='Email' name="user_email" />

                        <textarea rows='5' placeholder="Message" name='message' />

                        <button type="submit">Submit</button>
                        <p className='reply'>{done && 'Your message has been submitted. Thank you!'}</p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
