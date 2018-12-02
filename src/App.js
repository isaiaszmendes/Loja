import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header'
import Result from './components/Result'


class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            valueSearch: "",
            pesquisando: false
        }

        this.resetSearch    = this.resetSearch.bind(this)
        this.resultSearch      = this.resultSearch.bind(this)
        
    }

    resultSearch(params) {
        // console.log(params)
        this.setState({pesquisando: true})
        this.setState({valueSearch: params})
        // console.log(this.state.valueSearch)
        
    } 

    resetSearch = () =>{        
        console.log(this.state.valueSearch)
        this.setState({
            valueSearch: '',
            pesquisando: true
        })
        console.log(this.state.valueSearch)
    }


    render() {
        return (
            <div className="App">
                <Header 
                    resultSearch={this.resultSearch}
                    resetSearch={this.resetSearch}
                    />
                <Result titulo={this.state.valueSearch}/>
            </div>
        )
    }
}
    
export default App;
    