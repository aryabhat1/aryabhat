import React from 'react'
import './About.css'
// import imgdesign from '../../img/web-designer1.jpg';
import award from '../../img/award1.jpg';

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg">

                </div>
                <div className="a-card">
                    <img src={require("../../img/web-designer1.jpg")} alt="image not available" className="a-img" />
                </div>
            </div>

            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    A Web Designer with a focus on Visual and Interaction Design. Design and Craft web-pages based on deep understanding of customer needs.
                </p>
                <p className='a-desc'>My workshop is equipped with the state of the art equipment to deliver the best of services.</p>

                <div className="a-award">
                    <img src={require("../../img/award1.jpg")} alt='award image' className="a-award-img">

                    </img>
                    <div className="a-award-text">
                        <h4 className='a-award-title'>International Design Award</h4>
                        <p className='a-award-desc'>
                            Awarded for creativity in the year 2018 by FICCI Board of Design, San Francisco
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
