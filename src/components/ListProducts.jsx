import React, { Component } from 'react'
import './ListProducts.css'
import Product from './Product'
import config  from '../config'

class ListProducts extends Component {

    constructor(props){
        super(props)

        this.state = {
            produtos: {},
        }

        config.syncState('produtos',{
            context: this,
            state: 'produtos',
            asArray: false
        })
    }

    render(){
        return (
            <div>
                <h5>Todos os Produtos: {Object.keys(this.state.produtos).length}</h5>
                <p>Não pesquinsando, exibir a lista de objetos do banco </p>
                {
                    Object.keys(this.state.produtos).map(key => {
                        return  <Product key={key}
                                title={this.state.produtos[key].title}
                                description={this.state.produtos[key].description}
                                nameImg={this.state.produtos[key].img.name}
                                url='http://placekitten.com/g/250/200'
                                price={this.state.produtos[key].price}
                            />
                    })
                }
            </div>
        )                
    }
}

export default ListProducts 