import React from 'react'
import Icon from './Icon'
import './Search.css'

const Search = props => {
    return (
        
        <div className='search'>
            <input type="text" className='input-search' name="" placeholder='Search...' />
            <button className='btn-search'><Icon /></button>            
        </div>
    )
}

export default Search