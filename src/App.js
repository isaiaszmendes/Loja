import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
// Components
import Header from './components/Header'
import Product from './components/Product'
import Loading from './components/Loading'


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

    }
    componentDidMount(){
        this.resultSearch(this.state.resultSearch)
    }

    loadingTime = (seconds) =>{
        setTimeout(()=>{
            this.setState({
                pesquisando: false
            })
        }, seconds)
    }
   
    getData = (params = null) => {
        this.setState({pesquisando: true})

        if (params) {
            this.setState({resultSearch: params})
        }else{
            this.setState({resultSearch: ''})
        }

        // Verifica se existe parametros para buscar, se não houver, lista tudo
        const query = params ? `&equalTo="${params}"` : ''
        const url = `https://loja-mmartan.firebaseio.com/produtos.json?orderBy="title"${query}`
        axios.get(url)
            .then(dados => {
                this.setState({
                    produtos: dados.data
                })
            })
            .catch(err => {
                console.log('Deu ruim',err);
            }) 

        // Chama a função de animação Loading  
        this.loadingTime(2000)        
    }

    resultSearch = (params) =>{
        this.getData(params)       
    } 

    resetSearch = () =>{
        this.getData()               
    }

    render() {
            console.log('Status pesquisando antes do render',this.state.pesquisando);
            if (this.state.pesquisando) {
                return (                                              
                        <Loading />                        
                    )
            }
            return (
                <div className="App">
                    <Header 
                        resultSearch={this.resultSearch}
                        resetSearch={this.resetSearch}
                        titulo={this.state.resultSearch}
                        />
                    <div className='resul-label'>
                        <h5>Total: {Object.keys(this.state.produtos).length}</h5>
                    </div>
                    <div className='App-container'>                                          
                        {                            
                            Object.keys(this.state.produtos)
                            .map(key => {
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
    }
}
              
export default App;