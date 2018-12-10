import React from 'react'
import './Product.css' 

const Product = props => {
    return (
        <div className='list-products' >
            <div className='product-img'>
                <img className='img' src={props.url} alt={props.nameImg} />
            </div><hr/>
            <div className='product-info'>
               <div className='product-title'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
               </div>
                <div>
                    <div className='product-price'>
                        <p className='price-discunt'>R$:{props.price}</p>
                        <p>R$:{parseFloat((props.price /1.2).toFixed(2))}</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Product

