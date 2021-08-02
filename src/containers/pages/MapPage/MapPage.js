import React, { useEffect, useState } from 'react';
import 'styles/global.css'

import Map from 'components/Map/Map'
import ThreeDots from 'components/Loading/ThreeDots';

import queryString from 'query-string' 

const MapPage = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [isLoading, setIsLoading] = useState(true)

   
    useEffect(() => {
        const parsed = queryString.parse(window.location.search);
        const { lat, long } = parsed
        setLat(lat)
        setLong(long)
        setIsLoading(false)
    },[])

    return (
        isLoading ? (
            <div className='loading-container'>
                <ThreeDots />
                <h3>Učitavanje mape</h3>
            </div>
            
        ) : 
        <div className='container-map'>
            <Map lat={lat} long={long}/>
            <h1 className='map-text'>EEEEEE</h1>
        </div>
        
    )
  
}

export default MapPage;
