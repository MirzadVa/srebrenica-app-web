/* eslint-disable default-case */
import React from 'react'

const ResultsFound = ({totalCount, name, surname, fatherName}) => {
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

    if(totalCount > 0 && surname !== ''){
        return (
            <div className='search-result-div'>
                Pretraga po prezimenu <br/> 
                <span className='search-name'>{name}</span><br/> 
                {totalCount} mogućih poklapanja
            </div>
        )
    }
    if(totalCount === 0 && surname !== ''){
        return(
            <div className='search-result-div'>
                Pretraga po prezimenu <br/> 
                <span className='search-name'>{surname}</span><br/> 
                Nažalost, nismo mogli pronaći rezultate s prezimenom <b>{surname}.</b>
            </div>
        )
    }

    if(totalCount > 0 && fatherName !== ''){
        return (
            <div className='search-result-div'>
                Pretraga po imenu oca <br/> 
                <span className='search-name'>{fatherName}</span><br/> 
                {totalCount} mogućih poklapanja
            </div>
        )
    }
    if(totalCount === 0 && fatherName !== ''){
        return(
            <div className='search-result-div'>
                Pretraga po imenu oca <br/> 
                <span className='search-name'>{fatherName}</span><br/> 
                Nažalost, nismo mogli pronaći rezultate s imenom oca <b>{fatherName}.</b>
            </div>
        )
    }
    if(totalCount > 0 && name === ''){
        return(
            <div className='search-result-div'>
                Svi rezultati <br/> 
                {totalCount} moguća poklapanja
            </div>
        )
    }
}

export default ResultsFound
