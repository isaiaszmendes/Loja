import React from 'react'
import './ListProducts.css'


const ListProducts = props => {
    return (
        <div className='list-products'>
            <div className='product-img'>
                <img src="https://placekitten.com/g/200/200" alt="cat"/>
                {/* <img src="https://placekitten.com/g/200/200" alt="cat"/>
                <img src="https://placekitten.com/g/200/200" alt="cat"/>
                <img src="https://placekitten.com/g/200/200" alt="cat"/> */}
            </div>
            <div className='product-title'>
                <h2>Kit Cat bola de Pelos</h2>
                <p>Lorem ipsum dolor sit, ame</p>
            </div>
            <div className='product-price'>
                <h2>R$:90,00 por R$:298,00</h2>
            </div>
        </div>
    )
}

export default ListProducts 