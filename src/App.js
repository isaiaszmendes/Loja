import React, { Component } from 'react'
import Pagination from "react-js-pagination"
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
            pesquisaFiltro: {},
            activePage: 1,
            totalItems: 10,
            countItems: 0
        }

        this.resetSearch        = this.resetSearch.bind(this)
        this.resultSearch       = this.resultSearch.bind(this)
        this.handlePageChange   = this.handlePageChange.bind(this)

    }

    componentDidMount(){
        this.carregaDadosIniciais()
    }
    
    // Filtra de acordo com a pesquisa
    MySearch = (obj, pesq) => {    
        
        const listaDeProdutos = []
        pesq = pesq.toLowerCase()
        for(let i=0; i < obj.length; i++){
            const title  = obj[i].title.toLowerCase().indexOf(pesq) !== -1
            const description  = obj[i].description.toLowerCase().indexOf(pesq) !== -1
            if(title || description){
                listaDeProdutos.push(obj[i])
            }
        }

        const primeiraL = pesq.charAt(0).toUpperCase()
        const restoPalavra = pesq.substr(1,(pesq.length - 1))

        this.setState({
            pesquisaFiltro: listaDeProdutos,
            resultSearch: `${primeiraL}${restoPalavra}`,
             
        })
        return listaDeProdutos
    }

    listItems = (items, pageActual, limitItems) => {
        let result = [];
        let totalPage = Math.ceil( items.length / limitItems );
        let count = ( pageActual * limitItems ) - limitItems;
        let delimiter = count + limitItems;
        
        if(pageActual <= totalPage){
            for(let i=count; i < delimiter; i++){
                if(items[i] != null){            
                    result.push(items[i]);                  
                }
                count++;
            }
        }

        return result
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber})
    }      

    loadingTime = (seconds) =>{
        setTimeout(()=>{
            this.setState({    
                pesquisando: false
            })
        }, seconds)
    }
   
    getData = () => {
        this.setState({pesquisando: true})
        const url = `https://loja-mmartan.firebaseio.com/produtos.json`

        axios.get(url)
            .then(dados => dados.data)
            .then((produtos) => {
                var id = 0
                for (const key in produtos) {
                    produtos[key].id = id
                    id++
                }

                this.setState({
                    produtos: produtos,
                    pesquisaFiltro: produtos,
                    countItems: produtos.length                    
                })
            })
            .catch(err => {
                console.log('Deu ruim',err);
            }) 

        // Chama a função de animação Loading  
        this.loadingTime(1000)        
    }

    // carrega os dados quando a aplicação inicia pela primeira vez
    carregaDadosIniciais = () =>{
        this.getData()     
    } 
    
    // Filtra os produtos já carregados melhorando o desenopenho da aplicação
    resultSearch = (params) =>{
        const filtro = this.MySearch(this.state.produtos, params)   

        this.setState({
            pesquisaFiltro: filtro,
            countItems: filtro.length,
            activePage: 1     
        })    
    } 

    // Reinicia os dados que já estão carregados desde o inicio da aplicação
    resetSearch = () =>{
        this.setState({
            pesquisaFiltro: this.state.produtos,
            countItems: this.state.produtos.length,
            resultSearch: "",
            activePage: 1
        })             
    }

    render() {
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
                        <h5>Total: {this.state.countItems}</h5>
                    </div>
                    <div className='App-container'>                                          
                        {
                            Object.entries(this.listItems(this.state.pesquisaFiltro, this.state.activePage, this.state.totalItems))
                            .map(([key, value]) => {

                                return  <Product key={value.id}
                                        title={this.state.produtos[value.id].title}
                                        description={this.state.produtos[value.id].description}
                                        nameImg={this.state.produtos[value.id].img.name}
                                        url={this.state.produtos[value.id].img.url}
                                        price={this.state.produtos[value.id].price}
                                    />
                            })
                        }                        
                    </div>

                    <div className='footer-pagination'>                     
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.totalItems}
                        totalItemsCount={Object.keys(this.state.pesquisaFiltro).length}
                        pageRangeDisplayed={4}
                        onChange={this.handlePageChange}
                        />
                    </div> 
                
                </div>          
            )
    }
}
              
export default App;