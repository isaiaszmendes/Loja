import React from 'react'
import Logo from './Logo'
import Search from './Search'

const Header = props => {
    return (
        <header className="App-header">
            <Logo />
            <Search />            
        </header>
    )
}


export default Header