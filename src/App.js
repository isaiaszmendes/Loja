import React, { Component } from 'react';
import Pagination from "react-js-pagination";
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
            activePage: 1,
            totalItems: 4,
            countPages: 0,
            countItems: 0

        }

        this.resetSearch        = this.resetSearch.bind(this)
        this.resultSearch       = this.resultSearch.bind(this)
        this.handlePageChange   = this.handlePageChange.bind(this)

    }

    listItems = (items, pageActual, limitItems) => {
        let result = [];
        let totalPage = Math.ceil( items.length / limitItems );
        let count = ( pageActual * limitItems ) - limitItems;
        let delimiter = count + limitItems;

        // this.setState({
        //     countPages: totalPage
        // })
        // console.log(totalPage);
        
        if(pageActual <= totalPage){
            for(let i=count; i<delimiter; i++){
                if(items[i] != null){
                    result.push(items[i]);
                }
                count++;
            }
        }
    
        // console.log(result)
        return result
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.getData(this.state.resultSearch)
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
            .then(dados => dados.data)
            .then((produtos) => {
                console.log(produtos);
                this.setState({
                    produtos: produtos,
                    countItems: produtos.length
                    
                })

            })
            .catch(err => {
                console.log('Deu ruim',err);
            }) 

        // Chama a função de animação Loading  
        this.loadingTime(4000)        
    }



    resultSearch = (params) =>{
        this.getData(params)       
    } 

    resetSearch = () =>{
        this.getData()               
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
                            Object.keys(this.listItems(this.state.produtos, this.state.activePage, 4))
                            .map((key) => {
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

                    <div className='footer-pagination'>                     
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.totalItems}
                        totalItemsCount={Object.keys(this.state.produtos).length}
                        pageRangeDisplayed={6}
                        onChange={this.handlePageChange}
                        />
                    </div> 
                
                </div>          
            )
    }
}
              
export default App;