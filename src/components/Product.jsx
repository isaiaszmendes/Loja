import React from 'react'

const Product = props => {
    return (
        <div className='list-products' >
            <div className='product-img'>
                <img className='img' src={props.url} alt={props.nameImg} />
            </div>
            <div className='product-title'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className='product-price'>
                <h2>{props.price}</h2>
            </div>
        </div>
    )
}

export default Product