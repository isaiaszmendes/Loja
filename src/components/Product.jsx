import React from 'react'
import './Product.css' 

const Product = props => {
    return (
        <div className='list-products' >
            <div className='product-img'>
                <img className='img' src={props.url} alt={props.nameImg} />
            </div>
            <div className='product-title'>
               <div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
               </div>
                <div>
                    <div className='product-price'>
                        <p className='price-discunt'>{props.price}</p>
                        <p>{parseFloat((props.price /1.2).toFixed(2))}</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Product

