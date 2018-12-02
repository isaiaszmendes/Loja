import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header'
import Result from './components/Result'
import ListProducts from './components/ListProducts'


class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            resultSearch: "",
            pesquisando: false
        }

        this.resetSearch    = this.resetSearch.bind(this)
        this.resultSearch      = this.resultSearch.bind(this)
        
    }

    resultSearch(params) {
        // console.log(params)
        this.setState({pesquisando: true})
        this.setState({resultSearch: params})
        // console.log(this.state.resultSearch)
        
    } 

    resetSearch = () =>{        
        console.log(this.state.resultSearch)
        this.setState({
            resultSearch: '',
            pesquisando: true
        })
        console.log(this.state.resultSearch)
    }


    render() {
        return (
            <div className="App">
                <Header 
                    resultSearch={this.resultSearch}
                    resetSearch={this.resetSearch}
                    />
                <Result titulo={this.state.resultSearch} />
                <div className='App-container'>
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                </div>
        
                
            </div>
        )
    }
}
    
export default App;
    