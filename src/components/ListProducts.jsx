import React, { Component} from 'react'
import './ListProducts.css'
import Product from './Product'
import config  from '../config'

class ListProducts extends Component {

    constructor(props){
        super(props)

        this.state = {
            result: props.result,
            pesquisando: props.pesquisando || false,
            produtos: {},
        }
        
        config.syncState('produtos',{
            context: this,
            state: 'produtos',
            asArray: false
        })
        console.log(props);

        console.log('Status Pesquisando', this.state.pesquisando)

    }

    render() {
        if (this.state.pesquisando) {
            return (
                <Product 
                    title='adsasd'
                    url='http://placekitten.com/g/150/300'
                    />
            )
        }else{
            return (
                <div>
                    <h5>Todos os Produtos: {Object.keys(this.state.produtos).length}</h5>
                    <p>Não pesquinsando, exibir a lista de onjetos do banco
                       
                    </p>
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

}

export default ListProducts 