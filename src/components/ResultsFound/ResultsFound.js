/* eslint-disable default-case */
import React from 'react'

const ResultsFound = ({totalCount, name}) => {
    if(totalCount > 0 && name !== ''){
        return (
            <div className='search-result-div'>
                Pretraga po imenu <br/> 
                <span className='search-name'>{name}</span><br/> 
                {totalCount} mogućih poklapanja
            </div>
        )
    }
    if(totalCount === 0 && name !== ''){
        return(
            <div className='search-result-div'>
                Pretraga po imenu <br/> 
                <span className='search-name'>{name}</span><br/> 
                Nažalost, nismo mogli pronaći rezultate s imenom <b>{name}.</b>
            </div>
        )
    }
    if(totalCount > 0 && name === ''){
        return(
            <div className='search-result-div'>
                Pretraga po imenu <br/> 
                <span className='search-name'>{name}</span><br/> 
                {totalCount} mogućih poklapanja
            </div>
        )
    }
}

export default ResultsFound
