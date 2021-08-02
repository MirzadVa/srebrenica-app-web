import React from 'react'

const ResultCard = ({data}) => {
    return (
        <div className='result-card-wrapper'>
            <p className='name-surname-card'>{data.ime_prezime}</p>
            <p className='dob-card'>{data.datum_rodjenja} - {data.datum_stradanja}</p>
            <button className='open-card-button'>Otvori</button>
        </div>
    )
}

export default ResultCard
