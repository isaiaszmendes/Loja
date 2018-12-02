import React from 'react'
import './Result.css'


const Result = props => {
    let titulo = 'Lista de produtos'
    if(props.titulo !== ""){
        titulo = props.titulo
    }
    return (
        <div className='result-search'>
            <h1 className='result-title'>{titulo}</h1>
        </div>
    )
}

export default Result