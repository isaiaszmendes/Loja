import './Loading.css'
import React from 'react'


const Loading = props => {
    return (
        <div className='loading'>
            <div>
                <h3>Carregando</h3>
                <div className='loading-barra'></div>
            </div>
        </div>
    )
}

export default Loading