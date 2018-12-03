import React, { Component } from 'react';
import firebase from 'firebase'
import config  from './config'
import axios from 'axios'
import './App.css'
// Components
import Header from './components/Header'
import ListProducts from './components/ListProducts'
import ListSearch from './components/ListSearch'
import Product from './components/Product'

function searchInObject(req){
    return function(x){
        return console.log(x, req);
    }
}

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            resultSearch: "",
            pesquisando: false,
            produtos: {},
        }

        this.resetSearch    = this.resetSearch.bind(this)
        this.resultSearch      = this.resultSearch.bind(this)

        // config.syncState('produtos',{
        //     context: this,
        //     state: 'produtos',
        //     asArray: false
        // })

    }
    componentDidMount(){
        this.resultSearch(this.state.resultSearch)
    }
   

    resultSearch = (params) =>{
        if(params !== ""){
            this.setState({pesquisando: true})
            this.setState({resultSearch: params})
            const url = `https://loja-mmartan.firebaseio.com/produtos.json?orderBy="title"&equalTo="${params}"`
            axios.get(url)
                .then(dados => {
                    this.setState({
                        produtos: dados.data,
                        pesquisando: false
                    })
                })
                .catch(err => {
                    console.log('Deu ruim',err);
                })
                
        }else{
            this.setState({pesquisando: true})
            const url = `https://loja-mmartan.firebaseio.com/produtos.json?orderBy="title"`
            axios.get(url)
                .then(dados => {
                    this.setState({
                        produtos: dados.data,
                        pesquisando: false
                    })
                })
                .catch(err => {
                    console.log('Deu ruim',err);
                })
        }
       
    } 

    resetSearch = () =>{   
      
        this.setState({
            resultSearch: '',
            pesquisando: false
        })
        
    }

    render() {
        console.log(this.state.pesquisando, 'antes do render')
        // if (this.state.pesquisando) {
            if (this.state.pesquisando) {
                return (
                    <div>
                        <p>Carregando .... </p>
                        {/* {} */}
                    </div>
                )
            }
            return (
                <div className="App">
                    <Header 
                        resultSearch={this.resultSearch}
                        resetSearch={this.resetSearch}
                        titulo={this.state.resultSearch}
                        />
                    {/* <p>{console.log(JSON.stringify(this.state.produtos))}</p> */}
                    <div className='App-container'>
                        {/* <ListSearch  />  */}
                        <h5>Total: {Object.keys(this.state.produtos).length}</h5>
                        {
                            
                           Object.keys(this.state.produtos)
                            .map(key => {
                                // console.log(key);
                                return  <Product key={key}
                                        title={this.state.produtos[key].title}
                                        description={this.state.produtos[key].description}
                                        nameImg={this.state.produtos[key].img.name}
                                        url={this.state.produtos[key].img.url}
                                        price={this.state.produtos[key].price}
                                    />
                            })
                        }
                        
                    </div>
                </div>          
            )
        // }else{
        //     return (
        //         <div className="App">
        //             <Header 
        //                 resultSearch={this.resultSearch}
        //                 resetSearch={this.resetSearch}
        //                 titulo={this.state.resultSearch}
        //             />
        //             <div className='App-container'>
        //                 <ListProducts 
        //                     pesquisando={this.state.pesquisando}
        //                     result={this.state.resultSearch}
        //                 />
        //             </div>
        //         </div>          
        //     )
        // }

    }
}
    
export default App;
    