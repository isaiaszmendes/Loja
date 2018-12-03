import React, { Component } from 'react';
import './App.css'
// Components
import Header from './components/Header'
import ListProducts from './components/ListProducts'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            resultSearch: "",
            pesquisando: false,
        }

        this.resetSearch    = this.resetSearch.bind(this)
        this.resultSearch      = this.resultSearch.bind(this)

    }

    resultSearch = (params) =>{
        this.setState({pesquisando: true})
        this.setState({resultSearch: params})

       
    } 

    resetSearch = () =>{        
        this.setState({
            resultSearch: '',
            pesquisando: false
        })


    }

    render() {
        console.log(this.state, 'antes do render')
        if (true) {
            return (
                <div className="App">
                    <Header 
                        resultSearch={this.resultSearch}
                        resetSearch={this.resetSearch}
                        titulo={this.state.resultSearch}
                        />
                    <div className='App-container'>
                        <ListProducts 
                            pesquisando={this.state.pesquisando}
                            result={this.state.resultSearch}
                        />
                    </div>
                </div>          
            )
        }else{
            return (
                <div className="App">
                    <Header 
                        resultSearch={this.resultSearch}
                        resetSearch={this.resetSearch}
                        titulo={this.state.resultSearch}
                    />
                    <div className='App-container'>
                        <ListProducts  />
                    </div>
                </div>          
            )
        }

    }
}
    
export default App;
    