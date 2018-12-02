import React, { Component } from 'react'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import './Search.css'

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            input: "",
            pesquisando: false,
            functionSearch: props.resultSearch,
            functionReset: props.resetSearch
        }
        
        this.btnSearch   = this.btnSearch.bind(this)
        this.btnReset    = this.btnReset.bind(this)
        this.pressEnter  = this.pressEnter.bind(this)        
    }

    btnSearch = () =>{        
        const result = this.state.input
        this.state.functionSearch(result)
    }

    btnReset = () =>{
        this.setState({input: ""})
        this.state.functionReset()
    }

    pressEnter(e) {
        if (e.key === 'Enter') {
            const result = this.state.input
            this.state.functionSearch(result)
        }
      }
 
    render(){
        return (        
            <div className='search'>
                <button onClick={this.btnSearch} className='btn-icon btn-search'><Icon nameIcon={faSearch}/></button> 
                <input type="text" 
                    className='input-search' 
                        value={this.state.input}
                        onChange={e => this.setState({input: e.target.value})
                        } onKeyPressCapture={this.pressEnter}
                    placeholder='Search...' />            
                <button onClick={this.btnReset} className='btn-icon btn-delete'><Icon nameIcon={faTimes}/></button>        
            </div>
        )
    }
}

export default Search


