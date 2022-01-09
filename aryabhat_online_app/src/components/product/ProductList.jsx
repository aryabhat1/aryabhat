import React from 'react'
import './ProductList.css';
import Product from '../../product/Product'
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>

                <h1 className="pl-title">
                    Create and Inspire. Helping some of the fastest growing startups.
                </h1>
                <p className="pl-desc">
                    <h4>Our work would be a statement of you and your vision.</h4>
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (

                    <Product key={item.id} img={item.img} link={item.link} />
                )

                )}

            </div>

        </div>
    )
}

export default ProductList
