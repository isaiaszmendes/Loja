import React from 'react'
import Logo from './Logo'
import Search from './Search'

const Header = props => {
    return (
        <header className="App-header">
            <Logo />
            <Search 
                resultSearch={props.resultSearch}
                resetSearch={props.resetSearch}
                />            
        </header>
    )
}


export default Header