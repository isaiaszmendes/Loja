import './Header.css'
import React from 'react'
import Result from './Result'
import Logo from './Logo'
import Search from './Search'


const Header = props => {
    return (
        <header className="App-header">
            <div className='header-search'>
                <Logo />
                <Search 
                    resultSearch={props.resultSearch}
                    resetSearch={props.resetSearch}
                    />     
            </div>    
            <Result titulo={props.titulo} />
        </header>
    )
}


export default Header