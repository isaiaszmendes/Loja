import React, { Component } from 'react'
import './ListProducts.css'
import Product from './Product'
import config  from '../config'

class ListSearch extends Component {

    constructor(props){
        super(props)

        this.state = {
            result: '', // props.result,
        }
    }

    render(){
        return (
            <div>
                <h5>Total: {Object.keys(this.state.produtos).length}</h5>
                <p>Resultado da pesquisa</p>
              
            </div>
        )        
    }

}

export default ListSearch 