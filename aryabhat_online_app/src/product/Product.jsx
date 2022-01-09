import React from 'react'
import './Product.css'

const Product = ({ img, link }) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>

            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={require("../img/ngo-full-page.png")} alt="work-image" className='p-img' />
                {/* <img src={require(img)} alt="work-image" className='p-img' /> */}

            </a>
        </div>
    )
}

export default Product
